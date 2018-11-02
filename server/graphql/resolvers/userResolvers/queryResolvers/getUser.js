export default {
  getArticle: async (root, { id }, { ArticleModel }) => {
    const article = await ArticleModel.findById(id);
    return article;
  }
};
