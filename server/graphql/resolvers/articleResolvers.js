const articleResolvers = {
  Query: {
    getAllArticles: async (root, args, { ArticleModel }) => {
      const allArticles = await ArticleModel.find();
      return allArticles;
    }
  }
};

export default articleResolvers;
