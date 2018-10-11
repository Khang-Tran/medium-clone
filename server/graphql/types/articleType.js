const articleType = `
  type Article {
    id: ID
    text: String!
    title: String!
    description: String!
    feature_img: String!
    claps: Int
    createdDate: String
    author: User!
    comments: [Comment]
    tags: [Tag]
  }
  
  input CommentInput {
    author: ID!
    text: String!
  }
  
  type Comment {
    author: ID!
    text: String!
  } 
  
  input TagInput {
    name: String!
  }
  
  type Tag {
    name: String!
  }
`;

export default articleType;
