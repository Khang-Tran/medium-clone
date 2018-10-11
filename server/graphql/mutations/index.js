import articleMutations from './articleMutations';

const Mutation = `
  type Mutation {
    _empty: String
  }
`;

const mutations = [Mutation, articleMutations];

export { Mutation, mutations };
