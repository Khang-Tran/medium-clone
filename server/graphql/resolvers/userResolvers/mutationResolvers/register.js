import bcrypt from 'bcryptjs';
import { createToken } from '../../../utils';

export default {
  register: async (root, { name, email, password }, { UserModel }) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const newUser = await new UserModel({
      name,
      email,
      password: hash
    }).save();

    return { token: createToken(newUser, process.env.SECRET, '1hr') };
  }
};
