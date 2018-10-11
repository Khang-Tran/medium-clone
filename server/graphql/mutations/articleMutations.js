const articleMutations = `
  extend type Mutation {
    addArticle(text: String!, title: String!, description: String!,
     img: String, tags: [TagInput]): Article
     
    clapArticle(id: ID!): Article
    
    commentArticle(id: ID!, comment: CommentInput!): Article
  }
`;

export default articleMutations;
