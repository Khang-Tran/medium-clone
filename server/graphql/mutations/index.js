import articleMutations from './articleMutations';
import userMutations from './userMutations';

const Mutation = `
  type Mutation {
    _empty: String
  }
`;

const mutations = [Mutation, articleMutations, userMutations];

export { Mutation, mutations };
