import bcrypt from 'bcryptjs';
import { createToken } from '../../../utils';

export default {
  login: async (root, { email, password }, { UserModel }) => {
    const user = await UserModel.findOne({ email });

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      throw new Error('Invalid password');
    }

    return { token: createToken(user, process.env.SECRET, '1hr') };
  }
};
