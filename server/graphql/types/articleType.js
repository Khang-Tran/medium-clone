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
  
  type Comment {
    author: User
    text: String!
  }
  
  type Tag {
    name: String!
  }
`;

export default articleType;
