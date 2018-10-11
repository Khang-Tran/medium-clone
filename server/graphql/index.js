import { makeExecutableSchema } from 'graphql-tools';
import { mutations } from './mutations';
import { queries } from './queries';
import resolvers from './resolvers';
import { types } from './types';

const schema = makeExecutableSchema({
  typeDefs: [...types, ...queries, ...mutations],
  resolvers
});

export default schema;
