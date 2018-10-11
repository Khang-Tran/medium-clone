import { makeExecutableSchema } from 'graphql-tools';
import merge from 'lodash.merge';

import { ArticleType, UserType } from './types';

const resolvers = {};
const schema = makeExecutableSchema({
  typeDefs: [ArticleType, UserType],
  resolvers: merge(resolvers)
});

export default schema;
