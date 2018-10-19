import bcrypt from 'bcryptjs';
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

UserSchema.pre('save', function (next) {
  if (!this.isModified('password')) {
    return next;
  }

  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(this.password, salt, (err, hash) => {
      if (err) return next(err);
      this.password = hash;
      next();
    });
  });
});

const UserModel = mongoose.model('User', UserSchema);

export default UserModel;
