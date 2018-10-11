import cloudinary from 'cloudinary';

export default {
  addArticle: async (root, { text, title, description, img }, { ArticleModel }) => {
    let uploadResult = {};
    if (img) {
      uploadResult = await cloudinary.uploader.upload(img.path);
    }

    const newArticle = await new ArticleModel({
      text,
      title,
      description,
      img: uploadResult.url !== null ? uploadResult.url : ''
    }).save();

    return newArticle;
  }
};
