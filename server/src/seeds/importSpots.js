/**
 * 景点数据导入脚本
 *
 * 从 new_one/miniprogram/utils/constants.js 读取32个景点的完整数据，
 * 清理旧数据后重新导入 MongoDB。
 *
 * 使用方式: npm run seed
 * 前提：MongoDB 已启动且 .env 中 MONGODB_URI 正确配置
 */

const mongoose = require('mongoose');
const path = require('path');

// 使用统一的配置模块（包含生产环境校验）
const config = require('../config/env');

const MONGODB_URI = config.mongodbUri;

// 从 miniapp 项目引入景点数据和照片数据（CommonJS 格式）
const { spotsData } = require(path.resolve(__dirname, '../../../miniprogram/utils/constants.js'));
const { spotPhotos } = require(path.resolve(__dirname, '../../../miniprogram/utils/photos.js'));

// 定义 Spot Schema（与 models/Spot.js 保持一致）
const celebritySchema = new mongoose.Schema(
  {
    name: { type: String, default: '' },
    shortBio: { type: String, default: '' },
    fullBio: { type: String, default: '' },
    baikeUrl: { type: String, default: '' },
  },
  { _id: false }
);

const spotSchema = new mongoose.Schema(
  {
    spotId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    district: { type: String, required: true, enum: ['huangpu', 'jingan', 'hongkou', 'xuhui', 'changning', 'putuo', 'yangpu', 'pudong', 'songjiang', 'jiading', 'baoshan', 'minhang', 'qingpu', 'fengxian', 'jinshan', 'chongming'] },
    type: {
      type: String,
      required: true,
      enum: [
        'historic', 'garden', 'religious', 'museum', 'park',
        'memorial', 'architecture', 'culture', 'art', 'modern',
        'street', 'view', 'hotel', 'shopping', 'bridge',
      ],
    },
    lng: { type: Number, required: true },
    lat: { type: Number, required: true },
    poem: { type: String, default: '' },
    description: { type: String, default: '' },
    address: { type: String, default: '' },
    openTime: { type: String, default: '' },
    price: { type: String, default: '' },
    extra: { type: String, default: '' },
    celebrity: celebritySchema,
    baikeUrl: { type: String, default: '' },
    photos: { type: [String], default: [] },
    coverPhoto: { type: String, default: '' },
    tags: { type: [String], default: [] },
    status: { type: String, enum: ['online', 'offline', 'draft'], default: 'online' },
    reviewCount: { type: Number, default: 0 },
    avgRating: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Spot = mongoose.model('Spot_Seed', spotSchema);

// 修正 shaoxing_park 坐标（如果数据中有偏差）
function fixCoordinates(spots) {
  return spots.map((spot) => {
    if (spot.id === 'shaoxing_park') {
      return {
        ...spot,
        lng: 121.46,
        lat: 31.212,
      };
    }
    return spot;
  });
}

// 将 spotsData 的 id 字段映射为 spotId，其余字段保持不变
function transformSpot(raw) {
  const photos = raw.photos || spotPhotos[raw.id] || [];
  const coverPhoto = photos.length > 0 ? photos[0] : '';

  return {
    spotId: raw.id,
    name: raw.name,
    district: raw.district,
    type: raw.type,
    lng: raw.lng,
    lat: raw.lat,
    poem: raw.poem || '',
    description: raw.description || '',
    address: raw.address || '',
    openTime: raw.openTime || '',
    price: raw.price || '',
    extra: raw.extra || '',
    celebrity: {
      name: raw.celebrity?.name || '',
      shortBio: raw.celebrity?.shortBio || '',
      fullBio: raw.celebrity?.fullBio || '',
      baikeUrl: raw.celebrity?.baikeUrl || '',
    },
    baikeUrl: raw.baikeUrl || '',
    photos,
    coverPhoto,
    tags: raw.tags || [],
    status: 'online',
    reviewCount: 0,
    avgRating: 0,
  };
}

async function importSpots() {
  console.log('\n========== 开始导入景点数据 ==========\n');

  // 连接 MongoDB
  try {
    await mongoose.connect(MONGODB_URI);
    console.log(`[Seed] MongoDB 连接成功: ${MONGODB_URI}`);
  } catch (err) {
    console.error(`[Seed] MongoDB 连接失败: ${err.message}`);
    process.exit(1);
  }

  // 修正坐标
  const fixedData = fixCoordinates(spotsData);

  // 统计各区数量
  const districtCount = {};
  const DISTRICT_NAMES = {
    huangpu: '黄浦区', jingan: '静安区', hongkou: '虹口区',
    xuhui: '徐汇区', changning: '长宁区', putuo: '普陀区',
    yangpu: '杨浦区', pudong: '浦东新区', songjiang: '松江区',
    jiading: '嘉定区', baoshan: '宝山区', minhang: '闵行区',
    qingpu: '青浦区', fengxian: '奉贤区', jinshan: '金山区',
    chongming: '崇明区'
  };

  const transformed = fixedData.map((raw) => {
    districtCount[raw.district] = (districtCount[raw.district] || 0) + 1;
    return transformSpot(raw);
  });

  const db = mongoose.connection.db;
  const spotsCollection = db.collection('spots');

  try {
    // 清除旧数据
    const deleteResult = await spotsCollection.deleteMany({});
    console.log(`[Seed] 已清除旧数据: ${deleteResult.deletedCount} 条`);

    // 批量插入
    const insertResult = await spotsCollection.insertMany(transformed);
    console.log(`[Seed] 成功导入: ${insertResult.insertedCount} 条`);

    // 创建索引
    await spotsCollection.createIndex({ spotId: 1 }, { unique: true });
    await spotsCollection.createIndex({ district: 1, type: 1 });
    await spotsCollection.createIndex({ status: 1 });
    await spotsCollection.createIndex({ name: 'text', description: 'text' });
    console.log('[Seed] 索引创建完成');
  } catch (err) {
    console.error(`[Seed] 数据导入失败: ${err.message}`);
    process.exit(1);
  }

  // 验证导入结果
  const totalCount = await spotsCollection.countDocuments({});
  console.log(`\n[Seed] 验证: 数据库中共 ${totalCount} 条景点记录`);
  const districtSummary = Object.entries(districtCount)
    .map(([k, v]) => `${DISTRICT_NAMES[k]}${v}`)
    .join(', ');
  console.log(`[Seed] 各区分布: ${districtSummary}`);

  // 断开连接
  await mongoose.disconnect();
  console.log('\n========== 导入完成 ==========\n');
  process.exit(0);
}

importSpots();
