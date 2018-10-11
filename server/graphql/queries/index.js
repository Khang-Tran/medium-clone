import articleQueries from './articleQueries';
import userQueries from './userQueries';

const Query = `
  type Query {
    _empty: String
  }
`;

const queries = [Query, userQueries, articleQueries];

export { Query, queries };
