const articleMutations = `
  extend type Mutation {
    addArticle(text: String!, title: String!, description: String!,
     img: String): Article
     
    clapArticle(id: ID!): Article
    
    commentArticle(id: ID!): Article
  }
`;

export default articleMutations;
