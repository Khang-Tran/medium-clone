import { makeExecutableSchema } from 'graphql-tools';
import { queries } from './queries';
import resolvers from './resolvers';
import { types } from './types';

const schema = makeExecutableSchema({
  typeDefs: [...types, ...queries],
  resolvers
});

export default schema;
