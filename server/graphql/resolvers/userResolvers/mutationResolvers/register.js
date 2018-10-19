import { ApolloError } from 'apollo-server-express';
import { errorCode } from '../../../../helpers/constants';
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
      throw new ApolloError(errors.message, errorCode.BAD_USER_INPUT);
    }

    const user = await UserModel.findOne({ email });
    if (user) {
      throw new ApolloError(`user with email ${email} already existed.`, errorCode.EXISTED);
    }
    try {
      let newUser = await new UserModel({
        name,
        email,
        password
      }).save();


      return { token: createToken(newUser, process.env.SECRET, '1hr') };
    } catch (e) {
      throw new ApolloError('cannot create new user.', errorCode.INTERNAL_ERROR, e);
    }
  }
};
