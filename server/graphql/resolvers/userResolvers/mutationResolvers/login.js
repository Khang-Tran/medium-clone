import { ApolloError } from 'apollo-server-express';
import bcrypt from 'bcryptjs';
import { errorCode } from '../../../../helpers/constants';
import { createToken } from '../../../../helpers/utils';
import validateLoginInput from '../../../../validations/login';

export default {
  login: async (root, { email, password }, { UserModel }) => {
    const { errors, isValid } = validateLoginInput({
      email,
      password
    });

    if (!isValid) {
      throw new ApolloError(errors.message, errorCode.BAD_USER_INPUT);
    }
    const user = await UserModel.findOne({ email });
    if (!user) {
      throw new ApolloError(`user with email ${email} does not exist.`, errorCode.NOT_EXISTED);
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      throw new ApolloError('password is invalid', errorCode.BAD_USER_INPUT);
    }

    return { token: createToken(user, process.env.SECRET, '1hr') };
  }
};
