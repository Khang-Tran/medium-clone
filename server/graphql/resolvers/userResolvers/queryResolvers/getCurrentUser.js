export default {
  getCurrentUser: async (root, { id }, { currentUser, UserModel }) => {
    if (!currentUser) {
      return null;
    }

    const user = await UserModel.findOne({ email: currentUser.email });
    return user;
  }
};
