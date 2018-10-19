const userMutations = `
  extend type Mutation {
    register(name: String!, email: String!, password: String!): Token
    login(email: String!, password: String!): Token
  }
`;

export default userMutations;
