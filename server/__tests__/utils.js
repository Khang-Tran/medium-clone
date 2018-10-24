import { graphql } from 'graphql';
import schema from '../graphql';

const request = (query, context, variables) => {
  return graphql(schema, query, null, { context }, variables);
};

export { request };
