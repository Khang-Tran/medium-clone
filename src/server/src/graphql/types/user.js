import {
		GraphQLID,
		GraphQLNonNull,
		GraphQLObjectType,
		GraphQLString
} from 'graphql';

const userType = new GraphQLObjectType({
		name: 'user',
		fields: () => {
				return {
						id: {type: new GraphQLNonNull(GraphQLID)},
						name: {type: GraphQLString},
						email: {type: GraphQLString}
				};
		}
});

export default userType;

