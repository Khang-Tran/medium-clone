import { ApolloError, UserInputError } from 'apollo-server-express';
import bcrypt from 'bcryptjs';
import { createToken } from '../../../../helpers/utils';
import validateRegisterInput from '../../../../validations/register';

export default {
  register: async (root, { name, email, password }, { UserModel }) => {
    const { errors, isValid } = validateRegisterInput({
      name,
      email,
      password
    });

    if (!isValid) {
      throw new UserInputError(
        'failed to register due to validation errors',
        { errors }
      );
    }

    const user = await UserModel.findOne({ email });
    if (user) {
      throw new ApolloError(`user with email ${email} already existed.`);
    }
    let newUser = {};
    try {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);
      newUser = await new UserModel({
        name,
        email,
        password: hash
      }).save();
    }
    catch (e) {
      throw new ApolloError(`cannot create new user due to ${e}`);
    }

    return { token: createToken(newUser, process.env.SECRET, '1hr') };
  }
};
