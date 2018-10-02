import {GraphQLList, GraphQLObjectType} from 'graphql';
import userType from '../types/user';
import UserModel from '../../models/user';

export const queryType = new GraphQLObjectType({
		name: 'userQuery',
		fields: () => {
				return {
						users: {
								type: new GraphQLList(userType),
								resolve: () => {
										const user = UserModel.find().exec();
										if (!user) {
												console.log('err');
										}
										return user;
								}
						}
				};
		}
});
