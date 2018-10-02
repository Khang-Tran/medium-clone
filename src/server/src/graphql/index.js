import {queryType} from './queries/user';
import {add} from './mutations/add';
import {GraphQLObjectType, GraphQLSchema} from 'graphql';

const userSchema = new GraphQLSchema({
		query: queryType,
		mutation: new GraphQLObjectType({
				name: 'Mutation',
				fields: {add}
		})
});

export default userSchema;
