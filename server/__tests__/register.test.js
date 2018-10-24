import UserModel from '../models/User';
import { request } from './utils';

describe('register ', async () => {
  it('should create newUser when input is valid', async () => {
    const query = `mutation {
      register() {
        token
      }
    }`;

    const result = await request(query, UserModel, );
    console.log(result);
  });
});
