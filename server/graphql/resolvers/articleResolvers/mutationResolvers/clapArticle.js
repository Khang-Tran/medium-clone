export default {
  clapArticle: async (root, { id }, { ArticleModel }) => {
    const article = await ArticleModel.findById(id);
    article.claps += 1;
    article.save();
    return article;
  }
};
