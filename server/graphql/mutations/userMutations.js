const userMutations = `
  extend type Mutation {
    register(email: String!, name: String!, password: String!): Token
    login(email: String!, password: String!): Token
  }
`;

export default userMutations;
