const userType = `
  type User {
    name: String!
    email: String!
    avatar: String
    joinDate: String
    followers: [User]
    followings: [User]
  }
`;

export default userType;
