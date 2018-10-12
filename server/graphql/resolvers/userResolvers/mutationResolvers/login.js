import { ApolloError, UserInputError } from 'apollo-server-express';
import bcrypt from 'bcryptjs';
import { createToken } from '../../../../helpers/utils';
import validateRegisterInput from '../../../../validations/register';

export default {
  login: async (root, { email, password }, { UserModel }) => {
    const { errors, isValid } = validateRegisterInput({
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
    if (!user) {
      throw new ApolloError(`user with email ${email} does not exist.`);
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      throw new ApolloError('password is invalid');
    }

    return { token: createToken(user, process.env.SECRET, '1hr') };
  }
};
