import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name: String,
    email: String,
    avatar: String,
    joinDate: {
      type: Date,
      default: Date.now
    },
    password: String,
    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
    following: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
    ]
  }
);


const UserModel = mongoose.model('User', UserSchema);

export default UserModel;
