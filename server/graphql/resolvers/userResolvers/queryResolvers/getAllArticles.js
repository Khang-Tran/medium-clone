export default {
  getAllArticles: async (root, args, { ArticleModel }) => {
    const allArticles = await ArticleModel.find();
    return allArticles;
  }
};
