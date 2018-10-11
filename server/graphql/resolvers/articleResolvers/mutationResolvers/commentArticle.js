export default {
  commentArticle: async (root, { id, author, text }, { ArticleModel }) => {
    const article = ArticleModel.findById(id);
    article.comments.push({
      author,
      text
    });

    article.save();
    return article;
  }
};
