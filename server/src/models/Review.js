const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
  {
    spotId: {
      type: String,
      required: true,
      index: true,
      trim: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    userName: {
      type: String,
      default: '匿名用户',
      trim: true,
    },
    userAvatar: {
      type: String,
      default: '',
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
      validate: {
        validator: Number.isInteger,
        message: '评分必须是1-5的整数',
      },
    },
    content: {
      type: String,
      required: true,
      trim: true,
      maxlength: 500,
    },
    images: {
      type: [String],
      default: [],
    },
    status: {
      type: String,
      enum: ['approved', 'pending', 'rejected'],
      default: 'approved',
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

// 复合索引：按景点查询、按时间倒序
reviewSchema.index({ spotId: 1, createdAt: -1 });
reviewSchema.index({ spotId: 1, rating: -1 });

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
