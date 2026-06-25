const mongoose = require('mongoose');

const spotSchema = new mongoose.Schema(
  {
    spotId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    district: {
      type: String,
      required: true,
      enum: ['huangpu', 'jingan', 'hongkou', 'xuhui', 'changning', 'putuo', 'yangpu', 'pudong', 'songjiang', 'jiading', 'baoshan', 'minhang', 'qingpu', 'fengxian', 'jinshan', 'chongming'],
    },
    type: {
      type: String,
      required: true,
      enum: [
        'historic',
        'garden',
        'religious',
        'museum',
        'park',
        'memorial',
        'architecture',
        'culture',
        'art',
        'modern',
        'street',
        'view',
        'hotel',
        'shopping',
        'bridge',
      ],
    },
    lng: {
      type: Number,
      required: true,
    },
    lat: {
      type: Number,
      required: true,
    },
    poem: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    address: {
      type: String,
      default: '',
    },
    openTime: {
      type: String,
      default: '',
    },
    price: {
      type: String,
      default: '',
    },
    extra: {
      type: String,
      default: '',
    },
    celebrity: {
      name: { type: String, default: '' },
      shortBio: { type: String, default: '' },
      fullBio: { type: String, default: '' },
      baikeUrl: { type: String, default: '' },
    },
    baikeUrl: {
      type: String,
      default: '',
    },
    photos: {
      type: [String],
      default: [],
    },
    coverPhoto: {
      type: String,
      default: '',
    },
    tags: {
      type: [String],
      default: [],
    },
    status: {
      type: String,
      enum: ['online', 'offline', 'draft'],
      default: 'online',
      index: true,
    },
    reviewCount: {
      type: Number,
      default: 0,
    },
    avgRating: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// 复合索引
spotSchema.index({ district: 1, type: 1 });
spotSchema.index({ status: 1, district: 1 });
spotSchema.index({ name: 'text', description: 'text' });

const Spot = mongoose.model('Spot', spotSchema);

module.exports = Spot;
