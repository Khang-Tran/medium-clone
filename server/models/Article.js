import mongoose from 'mongoose';

const { Schema } = mongoose;
const ArticleSchema = new Schema(
  {
    text: String,
    title: String,
    description: String,
    img: String,
    claps: {
      type: Number,
      default: 0
    },
    createdDate: {
      type: Date,
      default: Date.now
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    comments: [
      {
        author: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User'
        },
        text: String
      }
    ],
    tags: [{ name: String }]
  }
);

const ArticleModel = mongoose.model('Article', ArticleSchema);

export default ArticleModel;
