const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    openid: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    nickname: {
      type: String,
      default: '微信用户',
      trim: true,
      maxlength: 30,
    },
    avatar: {
      type: String,
      default: '',
    },
    gender: {
      type: String,
      enum: ['保密', '男', '女'],
      default: '保密',
    },
    birthday: {
      type: String,
      default: '',
    },
    region: {
      type: String,
      default: '',
      trim: true,
      maxlength: 50,
    },
    bio: {
      type: String,
      default: '',
      trim: true,
      maxlength: 100,
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    lastLoginAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
