const mongoose = require('mongoose');

const itinerarySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },
    spots: [
      {
        spotId: { type: String, required: true, trim: true },
        order: { type: Number, required: true, min: 1 },
      },
    ],
  },
  {
    timestamps: true,
  }
);

// 同一个用户的行程名称可以不唯一（用户可以删除后重建同名行程）

const Itinerary = mongoose.model('Itinerary', itinerarySchema);

module.exports = Itinerary;
