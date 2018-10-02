import UserType from '../types/user';
import {GraphQLNonNull, GraphQLString} from 'graphql';
import UserModel from '../../models/user';

export const add = {
		type: UserType,
		args: {
				name: {
						type: new GraphQLNonNull(GraphQLString)
				}
		},
		resolve(root, params) {
				const model = new UserModel(params);
				const newUser = model.save();
				if (!newUser) {
						console.log('err');
				}
				return newUser;
		}
};

