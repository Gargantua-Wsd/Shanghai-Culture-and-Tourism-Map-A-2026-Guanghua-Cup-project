const TYPE_ICONS = {
  historic: '🏛️', garden: '🌳', religious: '🕊️', museum: '🏺', park: '🌿',
  memorial: '🎖️', architecture: '🏰', culture: '📖', art: '🎨', modern: '✨',
  street: '🚏', view: '📸', hotel: '🏨', shopping: '🛒️', bridge: '🌉'
}

const TYPE_NAMES = {
  historic: '历史建筑', garden: '园林', religious: '宗教场所', museum: '博物馆',
  park: '公园', memorial: '纪念馆', architecture: '特色建筑', culture: '文化街区',
  art: '艺术空间', modern: '现代文娱', street: '特色街道', view: '观景摄影',
  hotel: '酒店地标', shopping: '商业街', bridge: '桥梁'
}

const spotsData = [
  // ==================== 黄浦区 (10) ====================
  {
    id: 'yuyuan', name: '豫园 & 城隍庙', district: 'huangpu', type: 'garden',
    lng: 121.4949, lat: 31.2293,
    poem: '奇秀甲于东南，名园冠绝今古；飞檐藏尽风月，闹市独享清幽。',
    description: '豫园始建于明代嘉靖年间，是四川布政使潘允端为孝敬父母所建，素有"东南名园冠"之美誉。园内大假山为江南假山中的大手笔，点春堂曾是清末小刀会起义的指挥部。紧邻的城隍庙乃道教宫观，飞檐斗拱，香火鼎盛，周边的老街（上海老街/方浜中路）青石板路蜿蜒，古玩店、茶馆林立，是感受老上海"烟火气"与"市井味"的最佳去处。',
    address: '福佑路168号', openTime: '09:00-16:30', price: '40元', extra: '玉玲珑太湖石一绝',
    baikeUrl: 'https://baike.baidu.com/item/%E8%B1%AB%E5%9B%AD',
    celebrity: { name: '潘允端', shortBio: '豫园始建者，明代官员，孝心筑园。', fullBio: '潘允端，明嘉靖进士，为奉养父亲潘恩建造豫园，历时二十余年，成就江南名园，其孝道与造园艺术被后世传颂。', baikeUrl: 'https://baike.baidu.com/item/%E6%BD%98%E5%85%81%E7%AB%AF' }
  },
  {
    id: 'bund', name: '外滩万国建筑博览群', district: 'huangpu', type: 'historic',
    lng: 121.4892, lat: 31.2412,
    poem: '十里洋场今胜昔，万国楼台月如钩；百年潮汐诉旧事，一江灯火照新愁。',
    description: '外滩，位于黄浦江畔，全长约1.5公里，矗立着52幢风格迥异的古典复兴大楼，被誉为"万国建筑博览群"。这里曾是旧上海的金融中心，记录了从租界时期到现代都市的沧桑巨变。漫步于此，西侧是庄重典雅的历史建筑，东侧是浦东现代化的摩天大楼，黄浦江水奔流不息，构成了上海最经典的城市天际线。',
    address: '中山东一路', openTime: '全天', price: '免费', extra: '夜景绝佳',
    baikeUrl: 'https://baike.baidu.com/item/%E5%A4%96%E6%BB%A9',
    celebrity: { name: '沙逊·维克多', shortBio: '犹太巨富，和平饭店缔造者，外滩繁荣的推动者。', fullBio: '沙逊家族是旧上海地产大亨，维克多·沙逊建造了华懋饭店（今和平饭店），其远见卓识影响了外滩的格局，成为十里洋场传奇人物。', baikeUrl: 'https://baike.baidu.com/item/%E7%BB%B4%E5%85%8B%E5%A4%9A%C2%B7%E6%B2%99%E9%80%8A' }
  },
  {
    id: 'dajingge', name: '大境阁（大境路老城墙）', district: 'huangpu', type: 'historic',
    lng: 121.4835, lat: 31.2274,
    poem: '江皋霁雪遗旧景，大千胜境阅沧桑；青砖犹记抗倭志，飞阁尚存曲韵香。',
    description: '大境阁位于人民路大境路口，是上海市区仅存的两段明代古城墙之一，始建于明嘉靖三十二年（1553年），为抵御倭寇所建。这里曾是明清"沪城八景"之"江皋霁雪"的所在地，登楼远眺，银装素裹，美不胜收。阁内供奉关帝，晚清时期曾是任伯年、朱屺瞻等画家雅集之地，也是昆曲爱好者切磋技艺的场所，保留了老城厢深厚的文化底蕴。',
    address: '人民路大境路口', openTime: '09:00-16:00', price: '5元', extra: '昆曲雅集',
    baikeUrl: 'https://baike.baidu.com/item/%E5%A4%A7%E5%A2%83%E9%98%81',
    celebrity: { name: '任伯年', shortBio: '晚清画家，海派四杰之一，曾在大境阁雅集。', fullBio: '任伯年，清末著名画家，擅长人物、花鸟，其作品融汇中西，曾在大境阁与文人墨客切磋技艺，留下艺术佳话。', baikeUrl: 'https://baike.baidu.com/item/%E4%BB%BB%E4%BC%AF%E5%B9%B4' }
  },
  {
    id: 'sanshan', name: '三山会馆', district: 'huangpu', type: 'historic',
    lng: 121.5009, lat: 31.2085,
    poem: '闽商故地聚三山，雕梁画栋映百年；戏台犹闻丝竹韵，革命遗存耀史篇。',
    description: '三山会馆始建于清宣统元年（1909年），是上海唯一完整保存的晚清会馆建筑，由福建水果商人集资兴建。会馆门楼高约12.5米，门额环绕双龙戏珠、历史人物等精美浮雕，墙体两侧雕有千里眼、顺风耳图像，内部雕梁画栋，六棱宫灯点缀其间，极富艺术价值。这里还是上海工人第三次武装起义唯一保存下来的革命遗址，具有双重历史意义。',
    address: '中山南路1551号', openTime: '09:00-16:30', price: '免费', extra: '精美古戏台',
    baikeUrl: 'https://baike.baidu.com/item/%E4%B8%8A%E6%B5%B7%E4%B8%89%E5%B1%B1%E4%BC%9A%E9%A6%86',
    celebrity: { name: '林尔嘉', shortBio: '福建商帮领袖，三山会馆捐建者。', fullBio: '林尔嘉，清末民初实业家，热心公益，倡建三山会馆促进闽沪商贸，其爱国情怀影响深远。', baikeUrl: 'https://baike.baidu.com/item/%E6%9E%97%E5%B0%94%E5%98%89' }
  },
  {
    id: 'shangchuan', name: '商船会馆', district: 'huangpu', type: 'historic',
    lng: 121.505, lat: 31.215,
    poem: '帆樯林立董家渡，商贾云集会馆街；金漆藻台传古韵，双合大殿证兴衰。',
    description: '商船会馆是上海现存历史最悠久的行业会馆，也是最具代表性的商会建筑，始建于清康熙年间，占地近20亩。会馆自带上海第一座会馆戏台，八角形藻井金光闪闪，令人叹为观止。主体建筑"双合式大殿"为上海所有会馆中唯一的双合式结构，殿内鎏金双龙戏珠浮雕、屋顶"抱龙柱"等均为原物，见证了上海近代民族商业的兴衰与抗争。',
    address: '会馆街38号', openTime: '09:00-16:00', price: '免费', extra: '金漆藻井',
    baikeUrl: 'https://baike.baidu.com/item/%E5%95%86%E8%88%B9%E4%BC%9A%E9%A6%86',
    celebrity: { name: '陈熙元', shortBio: '航运巨商，商船会馆创始人之一。', fullBio: '陈熙元，清代上海航运业巨头，联合同行兴建商船会馆，推动上海港埠繁荣，为民族商业发展作出贡献。', baikeUrl: 'https://www.baidu.com/s?wd=%E9%99%88%E7%86%99%E5%85%83%E5%95%86%E8%88%B9%E4%BC%9A%E9%A6%86' }
  },
  {
    id: 'gucheng_park', name: '古城公园', district: 'huangpu', type: 'park',
    lng: 121.4912, lat: 31.2265,
    poem: '螺旋坡道喻城垣，绿荫深处藏公所；丹凤台前望古今，人民路上阅沧桑。',
    description: '古城公园地处上海老城厢核心地带，以"古"与"新"融合为设计理念。从下沉广场到丹凤台的螺旋坡道暗喻上海城墙遗址的时光隧道，人民路草坪溪流复刻老城厢护城河的现代演绎。园内密林深处的沪南钱业公所，如今改建为胡问遂艺术馆，是了解上海钱庄业历史和书法艺术的好去处。',
    address: '人民路333号', openTime: '全天', price: '免费', extra: '现代与古典交融',
    baikeUrl: 'https://baike.baidu.com/item/%E5%8F%A4%E5%9F%8E%E5%85%AC%E5%9B%AD',
    celebrity: { name: '胡问遂', shortBio: '著名书法家，艺术馆设于此。', fullBio: '胡问遂，海派书法大家，其艺术馆坐落古城公园，传承翰墨精神。', baikeUrl: 'https://baike.baidu.com/item/%E8%83%A1%E9%97%AE%E9%81%82' }
  },
  {
    id: 'huangpu_park', name: '黄浦公园 & 人民英雄纪念塔', district: 'huangpu', type: 'park',
    lng: 121.488, lat: 31.244,
    poem: '江潮滚滚忆英烈，塔影巍巍映丹心；百年公园开先例，一江春水照古今。',
    description: '黄浦公园始建于1868年，是上海最早的公园，迄今已一百五十余年历史。公园按照英国自然园景风格规划设计，后经多次改建，成为上海首家免费开放的公园。园内上海市人民英雄纪念塔及其主题浮雕是主要景观，黄浦滨水区立体花墙和数百个花箱成为沪上知名绿化景观，许多游客专程前来拍照留念。',
    address: '中山东一路500号', openTime: '全天', price: '免费', extra: '人民英雄纪念塔',
    baikeUrl: 'https://baike.baidu.com/item/%E9%BB%84%E6%B5%A6%E5%85%AC%E5%9B%AD',
    celebrity: { name: '陈毅', shortBio: '上海市首任市长，曾参与规划黄浦公园。', fullBio: '陈毅元帅在新中国成立后主持上海城市建设，重视公共空间，黄浦公园的改造提升体现了其人民城市的理念。', baikeUrl: 'https://baike.baidu.com/item/%E9%99%88%E6%AF%85' }
  },
  {
    id: 'shaoxing_park', name: '绍兴公园', district: 'huangpu', type: 'park',
    lng: 121.460, lat: 31.212,
    poem: '门墙小院藏丘壑，峭壁叠瀑趣侔江；天趣洞天通幽径，仿竹廊亭意未尽。',
    description: '绍兴公园由前庭、中庭、后庭三区组成，是典型的江南园林风格。前庭有林荫匝地的门墙小院、浑然天成的山石壁景；中庭有凝重痴顽的湖石假山、峭壁叠瀑、澄碧池水；后庭有自然古朴的仿竹廊亭，庭院深深，意犹未尽。许多中老年市民在此观景、健身、品茶，颇受喜爱。',
    address: '绍兴路62号', openTime: '全天', price: '免费', extra: '江南园林',
    baikeUrl: 'https://www.baidu.com/s?wd=%E4%B8%8A%E6%B5%B7%E7%BB%8D%E5%85%B4%E5%85%AC%E5%9B%AD',
    celebrity: { name: '鲁迅', shortBio: '文学巨匠，曾在绍兴路一带活动。', fullBio: '鲁迅先生虽未直接与绍兴公园相关，但其故乡绍兴与公园同名，公园所在区域文化氛围浓厚，与鲁迅精神相契合。', baikeUrl: 'https://baike.baidu.com/item/%E9%B2%81%E8%BF%85' }
  },
  {
    id: 'shanghai_museum', name: '上海博物馆（人民广场）', district: 'huangpu', type: 'museum',
    lng: 121.4745, lat: 31.2320,
    poem: '天圆地方藏珍宝，鼎彝书画贯古今；包罗万象通中外，一日看尽五千年。',
    description: '上海博物馆被誉为"包罗中国古代艺术万象"的顶级艺术博物馆，馆藏文物逾百万件，尤以青铜器、陶瓷器、书画为特色。建筑设计融合天圆地方理念，是人民广场的文化地标。常设展览涵盖中国古代各个时期的历史文物和艺术品，特展更是汇聚全球顶级文物，是了解中华文明的必到之处。',
    address: '人民大道201号', openTime: '09:00-17:00周一闭馆', price: '免费预约', extra: '大克鼎镇馆',
    baikeUrl: 'https://baike.baidu.com/item/%E4%B8%8A%E6%B5%B7%E5%8D%9A%E7%89%A9%E9%A6%86',
    celebrity: { name: '马承源', shortBio: '文博泰斗，上海博物馆原馆长。', fullBio: '马承源先生毕生致力于青铜器研究，为上博征集无数国宝，奠定其世界级博物馆地位。', baikeUrl: 'https://baike.baidu.com/item/%E9%A9%AC%E6%89%BF%E6%BA%90' }
  },
  {
    id: 'immersive_theater', name: '沉浸式剧场（第一百货）', district: 'huangpu', type: 'modern',
    lng: 121.4823, lat: 31.2362,
    poem: '神庙幻境窥庆国，鲸海微茫梦元白；身临其境成亲历，移步换景入戏来。',
    description: '位于南京东路第一百货商业中心的"星空间"系列剧场，是上海沉浸式演出的重要阵地。《庆余年》沉浸式话剧将影视IP搬上舞台，观众不再远观，而是皇城惊变的亲历者，机关巧妙，移步换景。《梦微之》环境式古风音乐剧讲述白居易与元稹的生死之交，座位分区设计带来不同互动体验。',
    address: '南京东路830号', openTime: '视演出而定', price: '180-580元', extra: '沉浸式体验',
    baikeUrl: 'https://www.baidu.com/s?wd=%E4%B8%8A%E6%B5%B7%E7%AC%AC%E4%B8%80%E7%99%BE%E8%B4%A7%E6%98%9F%E7%A9%BA%E9%97%B4%E6%B2%89%E6%B5%B8%E5%BC%8F%E5%89%A7%E5%9C%BA',
    celebrity: { name: '猫腻', shortBio: '《庆余年》原著作者，网络文学大神。', fullBio: '猫腻，著名网络作家，作品《庆余年》被改编为多种艺术形式，其创作影响了一代读者。', baikeUrl: 'https://baike.baidu.com/item/%E7%8C%AB%E8%85%BB' }
  },

  // ==================== 静安区 (9) ====================
  {
    id: 'jingansi', name: '静安寺 & 南京西路商圈', district: 'jingan', type: 'religious',
    lng: 121.4472, lat: 31.2263,
    poem: '金顶铜瓦耀佛光，闹市梵音净尘心；十里霓虹接云汉，千年古刹守清宁。',
    description: '静安寺是上海最古老的佛教寺庙之一，始建于三国时期，以其金碧辉煌的金色屋顶和庄严肃穆的钟鼓楼而闻名，在繁华的现代商圈中独守一方宁静。周围便是顶级的南京西路商业街区，汇聚了恒隆广场、中信泰富等高端购物中心，是时尚潮流与历史底蕴交融的典范。不远处的静安公园则是市民休闲放松的城市绿洲。',
    address: '南京西路1686号', openTime: '07:30-17:00', price: '50元', extra: '闹中取静',
    baikeUrl: 'https://baike.baidu.com/item/%E9%9D%99%E5%AE%89%E5%AF%BA',
    celebrity: { name: '康僧会', shortBio: '三国高僧，静安寺开山祖师。', fullBio: '康僧会，西域高僧，东吴时期来沪建寺，为静安寺千年法脉之始。', baikeUrl: 'https://baike.baidu.com/item/%E5%BA%B7%E5%83%A7%E4%BC%9A' }
  },
  {
    id: 'hudie_wan', name: '蝴蝶湾 & 苏州河静安段', district: 'jingan', type: 'park',
    lng: 121.4572, lat: 31.2375,
    poem: '曲水流觞绘新卷，绿影婆娑掩故庐；苏河蝶变展芳华，梦清园里话春秋。',
    description: '蝴蝶湾位于苏州河畔的静安段，是一个精致的滨水公共空间，通过巧妙的景观设计，将原本废弃的工业码头变成了绿意盎然的亲水步道。这里是"苏河蝶变"的缩影，保留了福新面粉厂旧址等工业遗存，串联起沿线的艺术馆与咖啡馆。夜晚灯光璀璨，成为市民散步、骑行、感受苏州河宁静与优雅的好去处。',
    address: '康定东路与泰兴路交叉口', openTime: '全天', price: '免费', extra: '滨水漫步',
    baikeUrl: 'https://www.baidu.com/s?wd=%E8%9D%B4%E8%9D%B6%E6%B9%BE%E8%8B%8F%E5%B7%9E%E6%B2%B3%E9%9D%99%E5%AE%89%E6%AE%B5',
    celebrity: { name: '荣毅仁', shortBio: '近代实业家，苏河湾民族工业代表。', fullBio: '荣氏家族在苏州河畔兴办福新面粉厂，推动民族工业振兴。', baikeUrl: 'https://baike.baidu.com/item/%E8%8D%A3%E6%AF%85%E4%BB%81' }
  },
  {
    id: 'zhangyuan', name: '张园', district: 'jingan', type: 'historic',
    lng: 121.4598, lat: 31.2314,
    poem: '海上第一名园地，味莼园里阅繁华；昔登热气球望远，今赏新韵焕新生。',
    description: '张园原名张氏味莼园，是晚清富商张叔和于1882年兴建的花园，1885年起向公众开放，市民可在此看戏、照相、宴客、登热气球望远，被誉为"海上第一名园"。1918年前后逐渐改为民用建筑，2022年张园西区完成保护性修缮后焕新回归，成为上海城市更新的新范本，繁华更胜往昔。',
    address: '威海路590弄', openTime: '10:00-22:00', price: '免费', extra: '海派新地标',
    baikeUrl: 'https://baike.baidu.com/item/%E5%BC%A0%E5%9B%AD',
    celebrity: { name: '张叔和', shortBio: '张园创始人，近代实业家。', fullBio: '张叔和购地筑园，向公众开放，引入热气球等西式娱乐，被誉为"海上第一名园"。', baikeUrl: 'https://baike.baidu.com/item/%E5%BC%A0%E5%8F%94%E5%92%8C' }
  },
  {
    id: 'sihang', name: '四行仓库抗战纪念馆', district: 'jingan', type: 'memorial',
    lng: 121.4655, lat: 31.2431,
    poem: '弹孔累累铭壮士，四昼夜守铸英魂；八百孤军惊天地，一壁残垣证丹心。',
    description: '四行仓库是民国时期盐业、金城、中南、大陆四家银行共同出资建设的仓库旧址。1937年淞沪会战后期，谢晋元率领"八百壮士"在此坚守四昼夜，抗击日军。2015年，纪念馆在原有弹孔痕迹基础上，真实复原了西墙上的8个炮弹孔、420余个枪弹孔，是这段悲壮历史的无言见证。',
    address: '光复路1号', openTime: '09:00-16:30', price: '免费', extra: '爱国主义教育基地',
    baikeUrl: 'https://baike.baidu.com/item/%E5%9B%9B%E8%A1%8C%E4%BB%93%E5%BA%93',
    celebrity: { name: '谢晋元', shortBio: '八百壮士指挥官，民族英雄。', fullBio: '谢晋元团长率部死守四行仓库，振奋全国民心，其不屈精神永载史册。', baikeUrl: 'https://baike.baidu.com/item/%E8%B0%A2%E6%99%8B%E5%85%83' }
  },
  {
    id: 'exhibition_center', name: '上海展览中心', district: 'jingan', type: 'architecture',
    lng: 121.458, lat: 31.230,
    poem: '爱俪园基起广厦，苏式宫殿耀申城；可游可读可休憩，一砖一瓦总关情。',
    description: '上海展览中心前身为英籍犹太人哈同所建的私家花园爱俪园，新中国成立后在其旧址建造中苏友好大厦，1984年改称上海展览中心。这座宫殿般的建筑是新中国成立后第一座最大的标志性景观建筑，如今已成为"可漫步、可阅读、有温度、可休憩"的宜人城市公共空间。',
    address: '延安中路1000号', openTime: '视展览而定', price: '免费', extra: '苏式建筑',
    baikeUrl: 'https://baike.baidu.com/item/%E4%B8%8A%E6%B5%B7%E5%B1%95%E8%A7%88%E4%B8%AD%E5%BF%83',
    celebrity: { name: '哈同', shortBio: '犹太富商，爱俪园建造者。', fullBio: '哈同，上海地产大亨，建造爱俪园（哈同花园），其建筑风格影响了上海近代园林。', baikeUrl: 'https://baike.baidu.com/item/%E5%93%88%E5%90%8C' }
  },
  {
    id: 'moller_villa', name: '马勒别墅', district: 'jingan', type: 'architecture',
    lng: 121.4553, lat: 31.2257,
    poem: '北欧童话落申城，尖顶雕栏入画屏；欧洲大师评经典，百年别墅醉游人。',
    description: '马勒别墅于1936年落成，是上海标志性的花园建筑之一，由犹太富商伊利克·马勒投资建成。这座北欧式花园洋房尖顶、回廊、彩色玻璃与雕花栏杆尽显异域风情，被欧洲建筑师设计协会评为"二十世纪建筑设计十个最经典作品"之一。站在别墅旁的天桥上，可免费捕捉建筑全景，轻松解锁上海版"小欧洲"质感。',
    address: '陕西南路30号', openTime: '外观全天', price: '参观免费', extra: '童话城堡',
    baikeUrl: 'https://baike.baidu.com/item/%E9%A9%AC%E5%8B%92%E5%88%AB%E5%A2%85',
    celebrity: { name: '伊利克·马勒', shortBio: '犹太船商，别墅建造者。', fullBio: '马勒根据女儿梦境设计别墅，融合挪威与上海风格，成为海派建筑瑰宝。', baikeUrl: 'https://baike.baidu.com/item/%E9%A9%AC%E5%8B%92%E5%88%AB%E5%A2%85' }
  },
  {
    id: 'ershida', name: '中共二大会址纪念馆', district: 'jingan', type: 'memorial',
    lng: 121.4638, lat: 31.2279,
    poem: '老成都北藏旧址，僻静里弄开新篇；首部党章此间定，红色星火自此燃。',
    description: '中共二大会址纪念馆位于静安区老成都北路7弄30号，房屋处于里弄深处，前、后门均可通行，便于人员疏散，1922年党中央将此定为中共二大会场。这里诞生了中国共产党第一部党章，是开展红色教育的经典线路之一。紧邻纪念馆的辅德里公园内，还有300米长的银杏大道，秋日金黄一片，氛围感十足。',
    address: '老成都北路7弄30号', openTime: '09:00-16:30', price: '免费', extra: '红色初心',
    baikeUrl: 'https://baike.baidu.com/item/%E4%B8%AD%E5%85%B1%E4%BA%8C%E5%A4%A7%E4%BC%9A%E5%9D%80%E7%BA%AA%E5%BF%B5%E9%A6%86',
    celebrity: { name: '蔡和森', shortBio: '二大代表，革命先驱。', fullBio: '蔡和森参与起草第一部党章，为中国革命理论作出重大贡献。', baikeUrl: 'https://baike.baidu.com/item/%E8%94%A1%E5%92%8C%E6%A3%AE' }
  },
  {
    id: 'suhewan', name: '苏河湾万象天地 & 天后宫', district: 'jingan', type: 'modern',
    lng: 121.470, lat: 31.240,
    poem: '百年妈祖佑苏河，戏台T台一脉通；万象天地聚潮玩，石库门里焕新生。',
    description: '苏河湾万象天地位于苏州河北岸，是生态、人文、社交三合一的空间。建于百年前的妈祖庙天后宫，如今成为文旅新地标，戏台与T台灵活切换，演绎苏河魅力。紧邻的慎余里是上海保存完整的石库门裡弄代表，红砖外墙斑驳厚重，复古与潮流在此碰撞出独特韵味。',
    address: '福建北路100号', openTime: '10:00-22:00', price: '免费', extra: '石库门风貌',
    baikeUrl: 'https://baike.baidu.com/item/%E4%B8%8A%E6%B5%B7%E5%A4%A9%E5%90%8E%E5%AE%AB',
    celebrity: { name: '妈祖', shortBio: '海神，天后宫供奉之神。', fullBio: '妈祖是中国东南沿海信仰的海神，保佑航海安全，天后宫是上海重要的妈祖庙，承载民间信仰。', baikeUrl: 'https://baike.baidu.com/item/%E5%A6%88%E7%A5%96' }
  },
  {
    id: 'fotografiska', name: 'Fotografiska影像艺术中心', district: 'jingan', type: 'art',
    lng: 121.4521, lat: 31.2368,
    poem: '老仓库里赏影像，苏州河畔品艺术；工业遗存今焕彩，光影交错有新篇。',
    description: 'Fotografiska影像艺术中心坐落于苏州河静安段，由老仓库改造修缮而成。这座百年工业建筑保留了原始的钢筋水泥结构、高阔挑高与斑驳墙面，工业风质感十足。在这里可以欣赏有质感的现代影像作品，感受艺术格调，是"艺术苏河"沿线的文化地标。',
    address: '光复路127号', openTime: '10:00-20:00', price: '120元', extra: '工业风艺术空间',
    baikeUrl: 'https://www.baidu.com/s?wd=Fotografiska%E5%BD%B1%E5%83%8F%E8%89%BA%E6%9C%AF%E4%B8%AD%E5%BF%83%E4%B8%8A%E6%B5%B7',
    celebrity: { name: '安妮·莱博维茨', shortBio: '摄影大师，Fotografiska常展艺术家。', fullBio: '安妮·莱博维茨，当代最著名的摄影师之一，其作品曾在Fotografiska展出，影响全球影像艺术。', baikeUrl: 'https://baike.baidu.com/item/%E5%AE%89%E5%A6%AE%C2%B7%E8%8E%B1%E5%8D%9A%E7%BB%B4%E8%8C%A8' }
  },

  // ==================== 虹口区 (13) ====================
  {
    id: 'duolun', name: '多伦路文化名人街', district: 'hongkou', type: 'culture',
    lng: 121.4838, lat: 31.2634,
    poem: '海上旧里文脉深，鸿儒谈笑白墙在；石板路上寻故影，左联烽火铸诗魂。',
    description: '多伦路是一条全长仅五百多米的小路，但却是中国近代文化史上的重镇，被誉为"现代文学重镇"。鲁迅、茅盾、郭沫若、叶圣陶等文学巨匠都曾在此居住、活动，中国左翼作家联盟的成立大会也在此召开。路面铺设着古朴的石板，路旁矗立着栩栩如生的名人雕像，以及风格各异的旧式洋楼，一步一景，处处透着浓厚的艺术气息和人文情怀。',
    address: '多伦路（近四川北路）', openTime: '全天', price: '免费', extra: '名人雕像群',
    baikeUrl: 'https://baike.baidu.com/item/%E5%A4%9A%E4%BC%A6%E8%B7%AF',
    celebrity: { name: '鲁迅', shortBio: '文学巨匠，左联精神领袖。', fullBio: '鲁迅先生晚年定居虹口，在多伦路一带领导左翼文化运动，以笔为刃唤醒民众。', baikeUrl: 'https://baike.baidu.com/item/%E9%B2%81%E8%BF%85' }
  },
  {
    id: 'luxun_park', name: '鲁迅公园 & 甜爱路', district: 'hongkou', type: 'park',
    lng: 121.482604, lat: 31.270152,
    poem: '文坛巨擘长眠地，松柏苍翠伴墨魂；甜爱路短情意长，红叶题诗寄相思。',
    description: '鲁迅公园（原虹口公园）是上海主要的历史文化纪念性公园，园内安葬着伟大的文学家鲁迅先生，并设有鲁迅纪念馆。公园环境清幽，是市民晨练、唱戏、散步的聚集地。公园旁的甜爱路被誉为上海最浪漫的马路，路两旁的墙壁上刻着著名的爱情诗篇，路口的爱心邮筒寄托了无数情侣的美好愿望。',
    address: '四川北路2288号', openTime: '05:00-21:00', price: '免费', extra: '浪漫打卡',
    baikeUrl: 'https://baike.baidu.com/item/%E9%B2%81%E8%BF%85%E5%85%AC%E5%9B%AD',
    celebrity: { name: '鲁迅', shortBio: '民族魂，鲁迅公园永铭。', fullBio: '鲁迅（周树人）是伟大的文学家、思想家，其精神影响一代代中国人。', baikeUrl: 'https://baike.baidu.com/item/%E9%B2%81%E8%BF%85' }
  },
  {
    id: 'jewish', name: '犹太难民纪念馆 & 提篮桥', district: 'hongkou', type: 'museum',
    lng: 121.5114, lat: 31.2535,
    poem: '摩西会堂证患难，黄浦江畔留余温；十里洋场避风港，万家灯火念故人。',
    description: '上海犹太难民纪念馆是"提篮桥历史文化风貌区"的核心，摩西会堂是二战期间数万犹太难民在上海避难的重要历史见证。这里曾经是犹太人的聚集区，保留了大量的欧式建筑和历史遗迹，如舟山路、霍山路的红砖尖顶房屋，被称为"小维也纳"。它记录了上海这座城市在战火中张开怀抱、庇护难民的温情历史。',
    address: '长阳路62号', openTime: '09:00-17:00', price: '20元', extra: '和平记忆',
    baikeUrl: 'https://baike.baidu.com/item/%E4%B8%8A%E6%B5%B7%E7%8A%B9%E5%A4%AA%E9%9A%BE%E6%B0%91%E7%BA%AA%E5%BF%B5%E9%A6%86',
    celebrity: { name: '何凤山', shortBio: '中国辛德勒，签证拯救犹太难民。', fullBio: '何凤山博士在维也纳签发数千份生命签证，许多犹太人来沪避难，上海成为"诺亚方舟"。', baikeUrl: 'https://baike.baidu.com/item/%E4%BD%95%E5%87%A4%E5%B1%B1' }
  },
  {
    id: 'post_museum', name: '上海邮政博物馆 & 苏州河口', district: 'hongkou', type: 'museum',
    lng: 121.4871, lat: 31.2456,
    poem: '尺素传情通天堑，塔楼耸立阅江潮；百年邮政话沧桑，一纸家书抵万金。',
    description: '上海邮政博物馆坐落于苏州河与黄浦江交汇处，原为上海邮政总局大楼，是欧洲折衷主义建筑的代表作。大楼顶部的钟楼和雕塑群气势恢宏，是苏州河口的标志性建筑之一。馆内不仅展示了从古至今的邮政发展史，还保留了营业大厅的复古风貌。站在博物馆外的广场上，可以同时看到外白渡桥、陆家嘴天际线以及流淌的苏州河，视野极佳。',
    address: '天潼路395号', openTime: '09:00-17:00(周三-周日)', price: '免费', extra: '钟楼景观',
    baikeUrl: 'https://baike.baidu.com/item/%E4%B8%8A%E6%B5%B7%E9%82%AE%E6%94%BF%E5%8D%9A%E7%89%A9%E9%A6%86',
    celebrity: { name: '李辉祖', shortBio: '邮政先驱，推动近代邮政。', fullBio: '李辉祖为上海邮政事业贡献卓越，主持建造邮政总局大楼，奠定通信基石。', baikeUrl: 'https://www.baidu.com/s?wd=%E6%9D%8E%E8%BE%89%E7%A5%96%E9%82%AE%E6%94%BF' }
  },
  {
    id: 'jinchaonong', name: '今潮8弄', district: 'hongkou', type: 'modern',
    lng: 121.4862, lat: 31.2551,
    poem: '八条弄堂藏旧事，六十六幢老洋房；颍川寄庐今犹在，石库门里见沧桑。',
    description: '今潮8弄完整保留修缮了上海中心城区8条弄堂内的66幢老建筑，其中既有百年精致豪宅"颍川寄庐"，也有见证历史变迁的石库门弄堂社区"公益坊"，还有"扆虹园"等优秀历史保护建筑。这里已成为沉浸式文艺体验地，赏灯游园、文化娱乐活动常年不断。其中一尺花园（颍川寄庐店）在保留建筑原有结构布局的基础上，让游客在百年建筑中享受悠闲时光。',
    address: '四川北路989弄', openTime: '全天', price: '免费', extra: '颍川寄庐',
    baikeUrl: 'https://www.baidu.com/s?wd=%E4%BB%8A%E6%BD%AE8%E5%BC%84%E4%B8%8A%E6%B5%B7',
    celebrity: { name: '陈万运', shortBio: '宁波商人，公益坊旧主。', fullBio: '陈万运投资建造公益坊，今潮8弄重现其人文底蕴。', baikeUrl: 'https://www.baidu.com/s?wd=%E9%99%88%E4%B8%87%E8%BF%90%E4%B8%89%E5%AE%9D%E7%83%9F%E5%8F%B0' }
  },
  {
    id: 'hebin_building', name: '河滨大楼 & 河滨会客厅', district: 'hongkou', type: 'architecture',
    lng: 121.488, lat: 31.246,
    poem: '沙逊投资筑大楼，河滨九十载阅沧桑；共享客厅聚邻里，新艺咖啡引客来。',
    description: '河滨大楼由沙逊投资建设，是"一江一河"沿河重要历史建筑景观，与长春公寓"差不多年纪"，也是各大热门影视剧的取景点。近年来，河滨大楼内设了集合客厅、书房、展厅等多功能的共享空间——河滨会客厅，街角处的新艺花行推出"新艺花咖啡"空间，吸引年轻人走进老建筑，新时代的烟火气在此升腾。',
    address: '北苏州路340号', openTime: '外观全天', price: '免费', extra: '影视取景地',
    baikeUrl: 'https://baike.baidu.com/item/%E6%B2%B3%E6%BB%A8%E5%A4%A7%E6%A5%BC',
    celebrity: { name: '沙逊·维克多', shortBio: '犹太富商，河滨大楼投资者。', fullBio: '沙逊家族投资建设河滨大楼，成为苏州河畔标志性建筑，见证了上海近代房地产发展。', baikeUrl: 'https://baike.baidu.com/item/%E7%BB%B4%E5%85%8B%E5%A4%9A%C2%B7%E6%B2%99%E9%80%8A' }
  },
  {
    id: 'shanghai_tower_hotel', name: '上海大厦', district: 'hongkou', type: 'hotel',
    lng: 121.4883, lat: 31.2450,
    poem: '百老汇里听潮声，黄浦江畔第一楼；九十华诞今犹盛，浦江最佳览景台。',
    description: '上海大厦位于一江一河交汇处，昔称百老汇大厦，是一座充满摩登时代精神气质的建筑，是上海海派文化的缩影，也是黄浦江畔的一座灯塔。今年迎来建成90周年纪念，其观景平台被称为"浦江最佳观览点"，可将两岸美景尽收眼底。',
    address: '北苏州路20号', openTime: '外观全天', price: '免费', extra: '历史地标',
    baikeUrl: 'https://baike.baidu.com/item/%E7%99%BE%E8%80%81%E6%B1%87%E5%A4%A7%E5%8E%A6',
    celebrity: { name: '邬达克', shortBio: '传奇建筑师，上海大厦设计者之一。', fullBio: '邬达克为上海留下无数经典，上海大厦彰显其现代主义风格。', baikeUrl: 'https://www.baidu.com/s?wd=%E9%82%AC%E8%BE%BE%E5%85%8B%E5%BB%BA%E7%AD%91%E5%B8%88' }
  },
  {
    id: 'zhapu_road', name: '乍浦路风貌影视街 & 胜利电影院', district: 'hongkou', type: 'street',
    lng: 121.4895, lat: 31.2472,
    poem: '酱园弄里拍大片，乍浦路上复古风；民国建筑搭架立，现代大厦映时空。',
    description: '乍浦路风貌影视街保留了原有街区的海派文化底蕴、酱园弄影视文化"大IP"特色建筑风貌，是市中心新晋城市文旅热点。胜利电影院是电影《酱园弄》取景地之一，民国建筑与现代大厦同框，魔幻时空感拉满。九龙路、长治路、旅顺路一带则是拍摄陆家嘴三件套与街景同框的"神仙机位"。',
    address: '乍浦路（近海宁路）', openTime: '全天', price: '免费', extra: '影视打卡',
    baikeUrl: 'https://www.baidu.com/s?wd=%E4%B8%8A%E6%B5%B7%E8%83%9C%E5%88%A9%E7%94%B5%E5%BD%B1%E9%99%A2%E4%B9%8D%E6%B5%A6%E8%B7%AF',
    celebrity: { name: '陈可辛', shortBio: '导演，选景乍浦路。', fullBio: '著名导演陈可辛取景乍浦路拍摄《酱园弄》，让老街焕发新生。', baikeUrl: 'https://baike.baidu.com/item/%E9%99%88%E5%8F%AF%E8%BE%9B' }
  },
  {
    id: 'bajin_lib', name: '巴金图书馆（扆虹园）', district: 'hongkou', type: 'culture',
    lng: 121.4840, lat: 31.2615,
    poem: '扆虹园里留文脉，激流三部著华章；中山先生曾三顾，巴金故宅墨犹香。',
    description: '巴金图书馆原名为扆虹园，清末建造，中山先生曾三次莅临。后作为巴金先生的故居，他在这里写出了著名的"激流三部曲"。2024年，适逢巴金诞辰120周年之际，巴金图书馆正式开馆，馆内展陈巴金先生手稿、用品、书籍和事迹，是文学爱好者的朝圣之地。',
    address: '多伦路215号', openTime: '10:00-16:00', price: '免费', extra: '文学朝圣',
    baikeUrl: 'https://baike.baidu.com/item/%E5%B7%B4%E9%87%91%E5%9B%BE%E4%B9%A6%E9%A6%86',
    celebrity: { name: '巴金', shortBio: '人民作家，世纪良知。', fullBio: '巴金先生代表作《家》《春》《秋》，影响深远，是中国现代文学巨匠。', baikeUrl: 'https://baike.baidu.com/item/%E5%B7%B4%E9%87%91' }
  },
  {
    id: 'zuolian', name: '左联会址纪念馆（多伦路）', district: 'hongkou', type: 'memorial',
    lng: 121.4832, lat: 31.2629,
    poem: '英式新古典风骨，左联旧址证烽烟；以笔为刃唤民众，先辈呐喊犹在耳。',
    description: '左联会址纪念馆是一幢1924年建成的英式新古典主义风格建筑，三层清水墙砖木结构，沿街立面山墙呈优美的曲线，南立面横三段处理手法，比例构图严谨。这里是中国左翼作家联盟成立大会召开地，鲁迅、茅盾、郭沫若等文学巨匠均在此活动，能深切感受先辈们以笔为刃、为民族解放而呐喊的坚定信念。',
    address: '多伦路201弄2号', openTime: '09:00-16:00', price: '免费', extra: '左联历史',
    baikeUrl: 'https://baike.baidu.com/item/%E4%B8%AD%E5%9B%BD%E5%B7%A6%E7%BF%BC%E4%BD%9C%E5%AE%B6%E8%81%94%E7%9B%9F%E6%88%90%E7%AB%8B%E5%A4%A7%E4%BC%9A%E4%BC%9A%E5%9D%80%E7%BA%AA%E5%BF%B5%E9%A6%86',
    celebrity: { name: '柔石', shortBio: '左联五烈士之一，革命作家。', fullBio: '柔石积极投身左翼文学，牺牲时年仅29岁，其精神激励后人。', baikeUrl: 'https://baike.baidu.com/item/%E6%9F%94%E7%9F%B3' }
  },
  {
    id: 'deling_apartment', name: '德邻公寓', district: 'hongkou', type: 'architecture',
    lng: 121.483, lat: 31.262,
    poem: '文人客厅留佳话，德邻公寓聚群贤；张恨水曾挥墨笔，巴金旧居忆当年。',
    description: '德邻公寓建筑坐北朝南，立面采用水平划分设计，东南转角处褐色耐火砖与白色钢窗形成鲜明对比，五层顶部设红色仿石券装饰，是上海第四批优秀历史建筑。上世纪30年代，这里曾聚集张恨水、巴金、张友鸾、陈占元、刘白羽、姜亮夫等文化名人，被誉为上海"文人客厅"。',
    address: '四川北路71号', openTime: '外观全天', price: '免费', extra: '文人客厅',
    baikeUrl: 'https://baike.baidu.com/item/%E5%BE%B7%E9%82%BB%E5%85%AC%E5%AF%93',
    celebrity: { name: '张恨水', shortBio: '通俗文学大师，曾居德邻公寓。', fullBio: '张恨水，民国时期著名小说家，作品《金粉世家》等风行全国，曾在德邻公寓创作。', baikeUrl: 'https://baike.baidu.com/item/%E5%BC%A0%E6%81%A8%E6%B0%B4' }
  },
  {
    id: '1933', name: '1933老场坊', district: 'hongkou', type: 'art',
    lng: 121.4978, lat: 31.2583,
    poem: '光影迷宫老场坊，工业遗存变艺廊；廊桥盘旋疑无路，错落空间别有洞。',
    description: '1933老场坊原为工部局宰牲场，由英国建筑师设计，建筑风格独特，迷宫般的楼梯和廊道构成光影交错的魔幻空间，是工业风打卡圣地。下午3-5点是拍摄光影的最佳时段。从哈尔滨路二号桥可以拍到老场坊与东方明珠同框的绝佳画面。如今这里汇集了创意办公、艺术展览、时尚秀场、特色餐饮，是沪上文艺青年的聚集地。',
    address: '溧阳路611号', openTime: '09:00-21:00', price: '免费', extra: '工业风拍照',
    baikeUrl: 'https://baike.baidu.com/item/1933%E8%80%81%E5%9C%BA%E5%9D%8A',
    celebrity: { name: '巴尔弗斯', shortBio: '英国建筑设计师，奇诡空间缔造者。', fullBio: '巴尔弗斯将宰牲场设计成艺术化建筑，如今成为魔都文艺地标。', baikeUrl: 'https://www.baidu.com/s?wd=%E5%B7%B4%E5%B0%94%E5%BC%97%E6%96%AF1933%E8%80%81%E5%9C%BA%E5%9D%8A' }
  },
  {
    id: 'beiwaitan', name: '北外滩国客中心 & 世界会客厅', district: 'hongkou', type: 'view',
    lng: 121.5023, lat: 31.2489,
    poem: '一江一河交汇处，浦江两岸尽收眸；人少景美花正盛，雾里外滩韵更幽。',
    description: '北外滩位于虹口区滨江区域，与陆家嘴隔江相望，是观赏外滩和陆家嘴天际线的绝佳位置。这里人少景美，春天花开正盛，雾霾天气外滩建筑若隐若现，氛围感十足。世界会客厅是北外滩的地标建筑，也是上海承接国际级会议和文化活动的重要场所。从北外滩滨江步道可同时拍摄到外滩万国建筑群和陆家嘴摩天大楼，是摄影爱好者的宝藏机位。',
    address: '东大名路500号', openTime: '全天', price: '免费', extra: '摄影宝地',
    baikeUrl: 'https://www.baidu.com/s?wd=%E4%B8%8A%E6%B5%B7%E5%8C%97%E5%A4%96%E6%BB%A9%E5%9B%BD%E5%AE%A2%E4%B8%AD%E5%BF%83',
    celebrity: { name: '夏衍', shortBio: '左翼影剧大师，北外滩文化使者。', fullBio: '夏衍曾在此区域开展左翼电影运动，为中国电影事业作出不朽贡献。', baikeUrl: 'https://baike.baidu.com/item/%E5%A4%8F%E8%A1%8D' }
  },

  // ==================== 浦东新区 (7) ====================
  {
    id: 'dongfangmingzhu', name: '东方明珠广播电视塔', district: 'pudong', type: 'view',
    lng: 121.4998, lat: 31.2397,
    poem: '大小明珠落玉盘，浦江之畔耀东方；凌霄一览众楼小，不夜城中璀璨光。',
    description: '东方明珠广播电视塔高468米，是上海的标志性文化景观之一，也是国家首批AAAAA级旅游景区。塔内有太空舱、旋转餐厅、上海城市历史发展陈列馆等设施，登上主观光层可360度俯瞰浦江两岸美景，将外滩万国建筑群与陆家嘴摩天大楼尽收眼底。夜晚灯光璀璨，宛如明珠落玉盘，是"浦江十景"之"东方辉映"的核心所在。',
    address: '世纪大道1号', openTime: '08:30-21:30', price: '160元起', extra: '上海城市名片',
    baikeUrl: 'https://baike.baidu.com/item/%E4%B8%9C%E6%96%B9%E6%98%8E%E7%8F%A0%E5%B9%BF%E6%92%AD%E7%94%B5%E8%A7%86%E5%A1%94',
    celebrity: { name: '江欢成', shortBio: '中国工程院院士，东方明珠总设计师。', fullBio: '江欢成院士以"大珠小珠落玉盘"的诗意为灵感，将11个球体串联成塔，成为上海新时代的象征。', baikeUrl: 'https://baike.baidu.com/item/%E6%B1%9F%E6%AC%A2%E6%88%90' }
  },
  {
    id: 'shanghai_center', name: '上海中心大厦（上海之巅）', district: 'pudong', type: 'architecture',
    lng: 121.5044, lat: 31.2356,
    poem: '螺旋之躯冲云霄，龙脊盘旋入九天；凌空俯瞰金融谷，中国第一世界先。',
    description: '上海中心大厦高632米，是中国第一高楼、世界第三高楼，与金茂大厦、环球金融中心并称"陆家嘴三件套"。大厦设计理念源于中国传统文化中的"龙脊"意象，自下而上螺旋收分，极具动感。118-119层观光厅被誉为"上海之巅"，以每秒18米的极速电梯登顶，可在云端俯瞰上海全景，是城市建筑奇迹与都市旅游的完美结合。',
    address: '银城中路501号', openTime: '09:00-21:00', price: '180元', extra: '世界最高观景台之一',
    baikeUrl: 'https://baike.baidu.com/item/%E4%B8%8A%E6%B5%B7%E4%B8%AD%E5%BF%83%E5%A4%A7%E5%8E%A6',
    celebrity: { name: '马溯·斯特贝尔', shortBio: 'Gensler首席建筑师，上海中心主创设计师。', fullBio: '马溯·斯特贝尔（Marshall Strabala）以创新的螺旋式塔楼方案中标，将中国龙文化融入现代超高层建筑，成就世界级地标。', baikeUrl: 'https://baike.baidu.com/item/%E9%A9%AC%E6%BA%AF%C2%B7%E6%96%AF%E7%89%B9%E8%B4%9D%E5%B0%94' }
  },
  {
    id: 'disney', name: '上海迪士尼乐园', district: 'pudong', type: 'modern',
    lng: 121.6642, lat: 31.1443,
    poem: '神奇王国落申城，童话城堡入梦来；奇幻花园星光耀，欢声笑语乐开怀。',
    description: '上海迪士尼乐园是中国内地首座迪士尼主题乐园，占地1.16平方公里，拥有七大主题园区。奇幻童话城堡是世界最高、最大、最具互动性的迪士尼城堡，园内还有创极速光轮、加勒比海盗——沉落宝藏之战等全球首发项目。夜晚的"点亮奇梦——夜光幻影秀"以城堡为幕布，光影交织，是家庭出游和童话爱好者的终极目的地。',
    address: '川沙镇黄赵路310号', openTime: '09:00-20:30', price: '399元起', extra: '梦幻童话王国',
    baikeUrl: 'https://baike.baidu.com/item/%E4%B8%8A%E6%B5%B7%E8%BF%AA%E5%A3%AB%E5%B0%BC%E5%BA%A6%E5%81%87%E5%8C%BA',
    celebrity: { name: '华特·迪士尼', shortBio: '迪士尼创始人，梦想工程师。', fullBio: '华特·迪士尼以无限的创意和想象力，创造了米老鼠、唐老鸭等经典角色，迪士尼乐园是其"让世界充满欢乐"梦想的实体呈现。', baikeUrl: 'https://baike.baidu.com/item/%E5%8D%8E%E7%89%B9%C2%B7%E8%BF%AA%E5%A3%AB%E5%B0%BC' }
  },
  {
    id: 'kejiguan', name: '上海科技馆', district: 'pudong', type: 'museum',
    lng: 121.5468, lat: 31.2207,
    poem: '天地苍穹探奥秘，生命智慧启新知；动手动脑玩科学，寓教于乐趣无穷。',
    description: '上海科技馆是国家AAAAA级科普旅游景点，以"自然·人·科技"为主题，设有天地馆、生命馆、智慧馆等11个常设展厅。馆内拥有世界一流的科学影城（IMAX巨幕、球幕、四维、太空数码四大影院），拥有数百件互动展品，让观众在动手实践中探索科学奥秘，是亲子教育和科学启蒙的理想之地。',
    address: '世纪大道2000号', openTime: '09:00-17:15周一闭馆', price: '60元', extra: '科普教育殿堂',
    baikeUrl: 'https://baike.baidu.com/item/%E4%B8%8A%E6%B5%B7%E7%A7%91%E6%8A%80%E9%A6%86',
    celebrity: { name: '叶叔华', shortBio: '天文学家，上海科技馆建设推动者。', fullBio: '叶叔华院士毕生致力于天文科学事业，积极推动上海科技馆建设，为科普教育作出卓越贡献。', baikeUrl: 'https://baike.baidu.com/item/%E5%8F%B6%E5%8F%94%E5%8D%8E' }
  },
  {
    id: 'zhonghuayishugong', name: '中华艺术宫（原世博中国馆）', district: 'pudong', type: 'art',
    lng: 121.4906, lat: 31.1864,
    poem: '东方之冠巍然立，斗拱层叠中国红；清明上河动天下，艺术殿堂聚瑰宝。',
    description: '中华艺术宫由2010年上海世博会中国国家馆改造而成，其"东方之冠"的建筑造型以中国传统斗拱为灵感，通体中国红，气势恢宏。馆内常年展出多媒体版《清明上河图》，将北宋张择端的传世名作以动态影像呈现，人物、车马、流水栩栩如生。此外还收藏了大量近现代美术精品，是上海乃至全国最重要的美术展示平台之一。',
    address: '上南路205号', openTime: '10:00-18:00周一闭馆', price: '免费（特展除外）', extra: '动态清明上河图',
    baikeUrl: 'https://baike.baidu.com/item/%E4%B8%AD%E5%8D%8E%E8%89%BA%E6%9C%AF%E5%AE%AB',
    celebrity: { name: '张择端', shortBio: '北宋画家，《清明上河图》作者。', fullBio: '张择端（1085-1145），北宋徽宗朝画院待诏，所绘《清明上河图》为中国十大传世名画之首。', baikeUrl: 'https://baike.baidu.com/item/%E5%BC%A0%E6%8B%A9%E7%AB%AF' }
  },
  {
    id: 'dongwuyuan', name: '上海野生动物园', district: 'pudong', type: 'park',
    lng: 121.7354, lat: 31.0501,
    poem: '百兽之王威自在，熊猫憨态惹人怜；乘车观兽新奇趣，自然和谐共一方。',
    description: '上海野生动物园是集野生动物饲养、展览、繁育保护、科普教育为一体的主题公园，占地153公顷，放养着200余种、上万只珍稀动物。园内分为车入区和步入区两大参观区域，车入区可坐在车内近距离观察猛兽，步入区可与袋鼠、羊驼等温顺动物互动。大熊猫、金丝猴、华南虎等珍稀物种是园区的明星。',
    address: '南六公路178号', openTime: '08:00-17:00', price: '130元', extra: '与动物零距离',
    baikeUrl: 'https://baike.baidu.com/item/%E4%B8%8A%E6%B5%B7%E9%87%8E%E7%94%9F%E5%8A%A8%E7%89%A9%E5%9B%AD',
    celebrity: { name: '乔治·夏勒', shortBio: '世界著名野外动物学家。', fullBio: '乔治·夏勒博士毕生致力于野生动物保护，对上海野生动物园的建设理念产生了深远影响。', baikeUrl: 'https://baike.baidu.com/item/%E4%B9%94%E6%B2%BB%C2%B7%E5%A4%8F%E5%8B%92' }
  },
  {
    id: 'xinchang_guzhen', name: '新场古镇', district: 'pudong', type: 'historic',
    lng: 121.6492, lat: 31.0260,
    poem: '小小新场赛苏州，千年盐乡枕水居；洪桥月下听春雨，老街深巷觅旧痕。',
    description: '新场古镇始建于北宋，迄今已有近千年历史，是浦东地区保存最完整的水乡古镇，素有"十三牌楼九环龙，小小新场赛苏州"之美誉。古镇依水而建，白墙黑瓦、小桥流水，洪福桥、千秋桥等古桥横跨河面，第一楼茶园曾是多部影视剧的取景地。漫步于古镇老街，品尝新场烧卖、海棠糕等地方美食，感受远离都市喧嚣的江南韵味。',
    address: '新场镇海泉街128号', openTime: '全天', price: '免费', extra: '千年江南水乡',
    baikeUrl: 'https://baike.baidu.com/item/%E6%96%B0%E5%9C%BA%E5%8F%A4%E9%95%87',
    celebrity: { name: '吴昌硕', shortBio: '海派书画大师，曾在浦东一带创作。', fullBio: '吴昌硕（1844-1927），晚清民国著名书画篆刻家，其画风苍劲雄浑，曾在浦东留下创作足迹。', baikeUrl: 'https://baike.baidu.com/item/%E5%90%B4%E6%98%8C%E7%A1%95' }
  },

  // ==================== 徐汇区 (6) ====================
  {
    id: 'longhuasi', name: '龙华寺 & 龙华塔', district: 'xuhui', type: 'religious',
    lng: 121.4528, lat: 31.1754,
    poem: '千年古塔接云霓，龙华晚钟渡江来；梵音袅袅净尘虑，一柱心香许清平。',
    description: '龙华寺是上海历史最悠久、规模最大的佛教寺院，相传始建于三国东吴时期，距今已有一千七百多年历史。寺内龙华塔为上海保存最完整的古塔之一，七级八面，飞檐斗拱，气势雄伟。"龙华晚钟"为明清"沪城八景"之一，每年除夕夜吸引成千上万上海市民来此撞钟祈福。寺院周边每到元旦还有传统庙会，是上海最具年味的地方之一。',
    address: '龙华路2853号', openTime: '07:00-16:30', price: '10元', extra: '千年古刹·沪城八景',
    baikeUrl: 'https://baike.baidu.com/item/%E9%BE%99%E5%8D%8E%E5%AF%BA',
    celebrity: { name: '康僧会', shortBio: '三国高僧，传说为龙华寺开山祖师。', fullBio: '康僧会（？-280），三国时期西域高僧，于东吴赤乌年间来建业弘法，据传曾主持建造龙华寺。', baikeUrl: 'https://baike.baidu.com/item/%E5%BA%B7%E5%83%A7%E4%BC%9A' }
  },
  {
    id: 'xujiahui_tang', name: '徐家汇天主教堂', district: 'xuhui', type: 'religious',
    lng: 121.4372, lat: 31.1964,
    poem: '哥特双塔刺苍穹，彩玻光影映圣容；百年钟声传福音，远东第一大教堂。',
    description: '徐家汇天主教堂（圣依纳爵主教座堂）建于1910年，是上海最大的天主教堂，曾被誉为"远东第一大教堂"。教堂为法国哥特式建筑，双塔高57米，内部64根雕花立柱支撑拱顶，彩色玻璃窗描绘圣经故事，光影交错间尽显庄严肃穆。每年圣诞节期间，教堂周边灯光璀璨，是上海最具仪式感的节日地标之一。',
    address: '蒲西路158号', openTime: '09:00-16:00', price: '免费', extra: '远东第一教堂',
    baikeUrl: 'https://baike.baidu.com/item/%E5%BE%90%E5%AE%B6%E6%B1%87%E5%A4%A9%E4%B8%BB%E5%A0%82',
    celebrity: { name: '徐光启', shortBio: '明代科学家，中西文化交流先驱。', fullBio: '徐光启（1562-1633），明代著名科学家，与利玛窦合作翻译《几何原本》，是中国近代科学奠基人，徐家汇因他而得名。', baikeUrl: 'https://baike.baidu.com/item/%E5%BE%90%E5%85%89%E5%90%AF' }
  },
  {
    id: 'wukang_building', name: '武康大楼 & 武康路', district: 'xuhui', type: 'architecture',
    lng: 121.4376, lat: 31.2068,
    poem: '巨轮劈浪立街口，法式风韵阅百年；梧桐深处藏故事，一条武康半部史。',
    description: '武康大楼由传奇建筑师邬达克设计，1924年建成，形如巨轮停泊在武康路与淮海中路的交汇处，是上海最著名的地标公寓之一。武康路被誉为"浓缩了上海近代百年历史"的名人路，两侧法桐参天、洋房林立，沿线遍布巴金故居、张乐平故居等文化名人旧居，以及各具特色的咖啡馆与买手店。漫步于此，梧桐树叶间的光影斑驳，仿佛穿越回老上海的黄金时代。',
    address: '淮海中路1850号', openTime: '外观全天', price: '免费', extra: '上海网红第一楼',
    baikeUrl: 'https://baike.baidu.com/item/%E6%AD%A6%E5%BA%B7%E5%A4%A7%E6%A5%BC',
    celebrity: { name: '邬达克', shortBio: '传奇建筑师，武康大楼设计者。', fullBio: '邬达克（Laszlo Hudec），匈牙利籍建筑师，为上海留下了五十余座经典建筑，武康大楼为其代表作。', baikeUrl: 'https://www.baidu.com/s?wd=%E9%82%AC%E8%BE%BE%E5%85%8B%E5%BB%BA%E7%AD%91%E5%B8%88' }
  },
  {
    id: 'tushanwan', name: '土山湾博物馆', district: 'xuhui', type: 'museum',
    lng: 121.4398, lat: 31.1911,
    poem: '海派文化发源处，西洋技艺此间传；彩绘玻璃证辉煌，孤儿院里育大匠。',
    description: '土山湾博物馆位于土山湾孤儿院旧址，这里是中国近代艺术教育的摇篮之一，被誉为"中国西洋画的摇篮"。19世纪60年代起，土山湾孤儿工艺院培养了大批工艺美术人才，其彩色玻璃、油画、雕塑作品曾多次参加世界博览会并获奖。博物馆展陈了土山湾工艺院的历史文物，包括精美的彩绘玻璃、木雕圣像、绘画作品，是了解海派文化渊源的重要窗口。',
    address: '蒲汇塘路55号', openTime: '09:00-16:00周一闭馆', price: '免费', extra: '海派文化发源地',
    baikeUrl: 'https://baike.baidu.com/item/%E5%9C%9F%E5%B1%B1%E6%B9%BE%E5%8D%9A%E7%89%A9%E9%A6%86',
    celebrity: { name: '刘德斋', shortBio: '土山湾画馆创始人，中国西洋画先驱。', fullBio: '刘德斋（1843-1912），天主教传教士画家，创建土山湾画馆，培养了中国最早的西洋画人才。', baikeUrl: 'https://www.baidu.com/s?wd=%E5%88%98%E5%BE%B7%E6%96%8B%E5%9C%9F%E5%B1%B1%E6%B9%BE' }
  },
  {
    id: 'longmeishuguan', name: '龙美术馆西岸馆', district: 'xuhui', type: 'art',
    lng: 121.4631, lat: 31.1886,
    poem: '运煤码头换新装，伞拱空间纳万象；西岸艺廊连珠串，当代艺术聚浦江。',
    description: '龙美术馆西岸馆由运煤码头改造而成，建筑以"伞拱"悬挑结构为特色，清水混凝土与原有煤漏斗的工业遗存形成强烈对比，是西岸滨江艺术带的旗舰地标。馆内收藏了从古代到近现代的大量中国及国际艺术品，以红色经典、当代艺术为特色。西岸滨江一带已形成美术馆群落，包括余德耀美术馆、西岸艺术中心等，是上海乃至亚洲最重要的当代艺术走廊之一。',
    address: '龙腾大道3398号', openTime: '10:00-17:30周一闭馆', price: '视展览定价', extra: '工业风当代艺术殿堂',
    baikeUrl: 'https://baike.baidu.com/item/%E9%BE%99%E7%BE%8E%E6%9C%AF%E9%A6%86',
    celebrity: { name: '刘益谦', shortBio: '著名收藏家，龙美术馆创始人。', fullBio: '刘益谦与夫人王薇倾力打造龙美术馆，以私人收藏推动公众艺术教育，影响深远。', baikeUrl: 'https://baike.baidu.com/item/%E5%88%98%E7%9B%8A%E8%B0%A6' }
  },
  {
    id: 'baidai_xiaolou', name: '百代小楼（《义勇军进行曲》诞生地）', district: 'xuhui', type: 'culture',
    lng: 121.4415, lat: 31.2077,
    poem: '红砖小楼录国歌，时代强音此间鸣；百代风华留声处，一曲义勇振乾坤。',
    description: '百代小楼是百代唱片公司的旧址，一座极具法式风格的红砖小洋楼。1935年，聂耳在此录制了《义勇军进行曲》（即后来的国歌），冼星海、周璇等音乐大家也曾在此留下珍贵录音。如今这里已成为展示中国近现代音乐史的小型博物馆，保留着当年录音室的格局，让游客在百年建筑中聆听时代的最强音。',
    address: '衡山路811号', openTime: '09:30-16:00', price: '免费', extra: '国歌录制地',
    baikeUrl: 'https://baike.baidu.com/item/%E7%99%BE%E4%BB%A3%E5%B0%8F%E6%A5%BC',
    celebrity: { name: '聂耳', shortBio: '人民音乐家，国歌作曲者。', fullBio: '聂耳（1912-1935），生于云南昆明，创作了《义勇军进行曲》《毕业歌》等传世之作，年仅23岁不幸溺水身亡。', baikeUrl: 'https://baike.baidu.com/item/%E8%81%82%E8%80%B3' }
  },

  // ==================== 长宁区 (5) ====================
  {
    id: 'yuyuan_road', name: '愚园路历史风貌区', district: 'changning', type: 'street',
    lng: 121.4312, lat: 31.2211,
    poem: '百年马路梧桐深，宅院错落叙旧痕；名人踪迹何处觅，咖啡香里度晨昏。',
    description: '愚园路是上海64条永不拓宽的马路之一，建于1911年，沿线分布着上百处历史建筑与名人故居。汪公馆、涌泉坊、岐山村等经典里弄与新潮的买手店、咖啡馆、书店交织，形成了"老上海腔调"与"新文艺气息"并存的独特街景。近年来，愚园路通过"微更新"焕发新生，愚园公共市集、愚园百货公司等成为年轻人的打卡热点，被赞为"上海最有故事的马路之一"。',
    address: '愚园路（镇宁路至定西路段）', openTime: '全天', price: '免费', extra: '永不拓宽的百年马路',
    baikeUrl: 'https://baike.baidu.com/item/%E6%84%9A%E5%9B%AD%E8%B7%AF',
    celebrity: { name: '傅雷', shortBio: '翻译大家，曾居愚园路。', fullBio: '傅雷（1908-1966），著名翻译家，翻译了巴尔扎克、罗曼·罗兰等大量经典作品，曾居住在愚园路附近。', baikeUrl: 'https://baike.baidu.com/item/%E5%82%85%E9%9B%B7' }
  },
  {
    id: 'zhongshan_park', name: '中山公园', district: 'changning', type: 'park',
    lng: 121.4185, lat: 31.2228,
    poem: '百年园区绿意浓，繁花四季景不同；英式草坪衔湖水，城市绿洲闹中静。',
    description: '中山公园原名兆丰公园，1914年由英国园林师设计建造，是上海最著名的百年公园之一。园内法桐大道浓荫蔽日，英式大草坪四季常青，湖泊水榭相映成趣。公园门前的中山公园商圈被定位为"面向长三角的上海西部商业中心"，龙之梦购物公园、来福士广场等大型商业综合体汇集于此，是购物休闲的理想之地。',
    address: '长宁路780号', openTime: '全天', price: '免费', extra: '百年英式公园',
    baikeUrl: 'https://baike.baidu.com/item/%E4%B8%AD%E5%B1%B1%E5%85%AC%E5%9B%AD',
    celebrity: { name: '孙中山', shortBio: '中国民主革命先行者，公园以其命名。', fullBio: '孙中山（1866-1925），伟大的民族英雄，以"天下为公"为毕生信念，领导辛亥革命推翻了两千年封建帝制。', baikeUrl: 'https://baike.baidu.com/item/%E5%AD%99%E4%B8%AD%E5%B1%B1' }
  },
  {
    id: 'shanghai_zoo', name: '上海动物园', district: 'changning', type: 'park',
    lng: 121.3633, lat: 31.1961,
    poem: '金鱼廊里观鱼戏，熊猫馆外笑声多；珍禽异兽聚一园，自然课堂乐趣多。',
    description: '上海动物园原名西郊公园，始建1954年，是上海最大的城市动物园，饲养展出野生动物400余种。园内不仅有大熊猫、金丝猴、华南虎等国家重点保护动物，还有独具特色的金鱼廊、天鹅湖、鹦鹉馆等展区。动物园注重科普教育，常年举办动物知识讲座、喂养体验等互动活动，是上海几代人的童年记忆。',
    address: '虹桥路2381号', openTime: '08:00-17:00', price: '40元', extra: '几代上海人的童年记忆',
    baikeUrl: 'https://baike.baidu.com/item/%E4%B8%8A%E6%B5%B7%E5%8A%A8%E7%89%A9%E5%9B%AD',
    celebrity: { name: '谭邦杰', shortBio: '动物学家，上海动物园首任园长。', fullBio: '谭邦杰（1911-1995），中国动物园学奠基人之一，推动了中国动物保护与动物园事业的发展。', baikeUrl: 'https://www.baidu.com/s?wd=%E8%B0%AD%E9%82%A6%E6%9D%B0%E5%8A%A8%E7%89%A9%E5%9B%AD' }
  },
  {
    id: 'shangsheng_xinsuo', name: '上生新所（哥伦比亚乡村俱乐部）', district: 'changning', type: 'modern',
    lng: 121.4238, lat: 31.2143,
    poem: '哥伦比亚旧乡村，泳池水榭映红墙；摩登与古共一园，新所新生焕容光。',
    description: '上生新所前身是建于1920年代的哥伦比亚乡村俱乐部，由美国建筑师哈沙德设计，曾是美国侨民的社交中心。园区内最引人注目的是充满摩洛哥风情的"网红泳池"，拱形门廊与湛蓝水面构成绝美画面。茑屋书店上海旗舰店入驻百年历史的哥伦比亚乡村俱乐部老楼，文创空间与咖啡馆散布园中，是建筑美学与文艺生活完美融合的典范。',
    address: '延安西路1262号', openTime: '全天', price: '免费', extra: '摩洛哥风网红泳池',
    baikeUrl: 'https://www.baidu.com/s?wd=%E4%B8%8A%E7%94%9F%E6%96%B0%E6%89%80',
    celebrity: { name: '哈沙德', shortBio: '美国建筑师，俱乐部设计者。', fullBio: '艾略特·哈沙德（Elliott Hazzard），20世纪初活跃在上海的美国建筑师，设计了许多知名建筑。', baikeUrl: 'https://www.baidu.com/s?wd=%E5%93%88%E6%B2%99%E5%BE%B7%E5%BB%BA%E7%AD%91%E5%B8%88' }
  },
  {
    id: 'xinhua_road', name: '新华路历史文化风貌区', district: 'changning', type: 'street',
    lng: 121.4266, lat: 31.2103,
    poem: '国宾道上梧桐影，花园洋房掩重门；低调优雅百年韵，一步一景入画来。',
    description: '新华路素有"上海第一花园马路"之称，沿线分布着二百多幢风格各异的花园洋房和老公寓，英式、西班牙式、德式等建筑风格兼容并蓄。新华路外国弄堂是上海优秀历史保护建筑最为密集的街区之一，陈纳德、陈香梅夫妇等历史名人都曾在此居住。在这里可以找到冯玉祥旧居、梅泉别墅等历史建筑，体验上海最优雅低调的生活方式。',
    address: '新华路（淮海西路至凯旋路段）', openTime: '全天', price: '免费', extra: '第一花园马路',
    baikeUrl: 'https://www.baidu.com/s?wd=%E4%B8%8A%E6%B5%B7%E6%96%B0%E5%8D%8E%E8%B7%AF%E5%8E%86%E5%8F%B2%E9%A3%8E%E8%B2%8C%E5%8C%BA',
    celebrity: { name: '陈香梅', shortBio: '中美外交传奇女性，曾居新华路。', fullBio: '陈香梅（1925-2018），飞虎队将军陈纳德之妻，政治活动家，为中美关系作出重要贡献。', baikeUrl: 'https://baike.baidu.com/item/%E9%99%88%E9%A6%99%E6%A2%85' }
  },

  // ==================== 普陀区 (5) ====================
  {
    id: 'yufochansi', name: '玉佛禅寺', district: 'putuo', type: 'religious',
    lng: 121.4411, lat: 31.2424,
    poem: '白玉佛光照凡尘，禅音袅袅净心魂；闹市净土藏古意，一枝香火渡众生。',
    description: '玉佛禅寺因供奉两尊缅甸玉佛而得名，一尊坐佛一尊卧佛，均为清末普陀山僧人慧根从缅甸请来上海。寺院始建于1882年，后迁至现址安远路，是上海最著名的佛教寺院之一。寺庙建筑古朴典雅，大雄宝殿、玉佛楼、卧佛堂等建筑布局严谨，每逢农历初一、十五，大批香客前来祈福。寺内素斋也别具特色，深受香客和游客喜爱。',
    address: '安远路170号', openTime: '08:00-16:30', price: '20元', extra: '缅甸白玉大佛',
    baikeUrl: 'https://baike.baidu.com/item/%E7%8E%89%E4%BD%9B%E7%A6%85%E5%AF%BA',
    celebrity: { name: '慧根法师', shortBio: '清末高僧，从缅甸迎请玉佛。', fullBio: '慧根法师（？-1909），普陀山僧人，光绪年间远赴缅甸迎请玉佛来沪，创建玉佛禅寺。', baikeUrl: 'https://www.baidu.com/s?wd=%E6%85%A7%E6%A0%B9%E6%B3%95%E5%B8%88%E7%8E%89%E4%BD%9B' }
  },
  {
    id: 'm50', name: 'M50创意园', district: 'putuo', type: 'art',
    lng: 121.4423, lat: 31.2499,
    poem: '纺织机杼今静默，画廊涂鸦满墙生；当代艺术聚一园，苏州河畔创意兴。',
    description: 'M50创意园是上海最具影响力的当代艺术园区之一，前身为信和纱厂，2000年以来逐步发展为创意产业聚集地。园区内保留了工业时代的锯齿形厂房和大型纺织机械，现已成为百余家画廊、艺术家工作室和设计公司的所在地。香格纳画廊、长征空间等国内外知名画廊入驻其中，涂鸦墙和装置艺术品遍布园区各处，是当代艺术爱好者必访之地。',
    address: '莫干山路50号', openTime: '10:00-18:00', price: '免费', extra: '上海798艺术区',
    baikeUrl: 'https://baike.baidu.com/item/M50%E5%88%9B%E6%84%8F%E5%9B%AD',
    celebrity: { name: '薛松', shortBio: '当代艺术家，M50最早入驻艺术家之一。', fullBio: '薛松是最早入驻M50的当代艺术家之一，以独特的"烧纸"拼贴技法闻名，其创作推动了园区艺术生态的形成。', baikeUrl: 'https://www.baidu.com/s?wd=%E8%96%9B%E6%9D%BE%E5%BD%93%E4%BB%A3%E8%89%BA%E6%9C%AF%E5%AE%B6' }
  },
  {
    id: 'tianan_qianshu', name: '天安千树（大洋晶典）', district: 'putuo', type: 'modern',
    lng: 121.4386, lat: 31.2511,
    poem: '千树万树空中立，苏河之畔一奇观；绿意攀上水泥柱，生态商业谱新章。',
    description: '天安千树（大洋晶典·天安千树）由英国建筑大师托马斯·赫斯维克设计，因建筑外墙上种植了上千棵树木和数万株灌木而得名，被誉为"会呼吸的建筑"和"城市中的森林"。建筑呈现出不规则的山峰形态，绿植从每一层的露台伸展而出，成为苏州河畔最独特的天际线。商场内部汇集众多首店与概念店，从M50二楼天桥可直接俯瞰千树的壮观全貌。',
    address: '莫干山路600号', openTime: '10:00-22:00', price: '免费', extra: '悬浮森林建筑奇观',
    baikeUrl: 'https://www.baidu.com/s?wd=%E5%A4%A9%E5%AE%89%E5%8D%83%E6%A0%91%E4%B8%8A%E6%B5%B7',
    celebrity: { name: '托马斯·赫斯维克', shortBio: '英国设计鬼才，天安千树建筑师。', fullBio: '托马斯·赫斯维克以天马行空的创意著称，其代表作包括上海世博英国馆"种子圣殿"和纽约Vessel。', baikeUrl: 'https://baike.baidu.com/item/%E6%89%98%E9%A9%AC%E6%96%AF%C2%B7%E8%B5%AB%E6%96%AF%E7%BB%B4%E5%85%8B' }
  },
  {
    id: 'changfeng_park', name: '长风公园 & 长风海洋世界', district: 'putuo', type: 'park',
    lng: 121.3935, lat: 31.2260,
    poem: '碧波银锄映铁臂，游船点点画图中；海底隧道探奇妙，童年欢乐此间留。',
    description: '长风公园始建于1957年，以园内银锄湖和铁臂山闻名，取意"银锄落处金谷丰，铁臂摇时银锄起"。银锄湖是市中心最大的人工湖之一，湖畔绿柳成荫、亭台错落，是划船赏景的好去处。长风海洋世界坐落于园内，拥有中国第一条海底观光隧道，白鲸表演馆和海马王国深受小朋友喜爱，是几代上海人春游秋游的共同记忆。',
    address: '大渡河路189号', openTime: '05:00-21:00', price: '公园免费/海洋世界160元', extra: '海底隧道·童年记忆',
    baikeUrl: 'https://baike.baidu.com/item/%E9%95%BF%E9%A3%8E%E5%85%AC%E5%9B%AD',
    celebrity: { name: '陈从周', shortBio: '园林大师，参与长风公园规划设计。', fullBio: '陈从周（1918-2000），著名古建筑园林专家，其"虽由人作 宛自天开"的理念深刻影响了长风公园的设计。', baikeUrl: 'https://baike.baidu.com/item/%E9%99%88%E4%BB%8E%E5%91%A8' }
  },
  {
    id: 'zhenru_si', name: '真如寺', district: 'putuo', type: 'religious',
    lng: 121.3936, lat: 31.2497,
    poem: '元代古刹隐真如，楠木大殿历沧桑；钟声佛号传千载，一瓣心香许安宁。',
    description: '真如寺始建于元代延佑七年（1320年），是上海现存最古老的元代木结构建筑之一。大雄宝殿采用元代建筑风格的楠木结构，单檐歇山顶，古朴雄伟，是全国重点文物保护单位。寺内古银杏树龄逾700年，与古刹相映成趣。真如寺虽不如静安寺、龙华寺那般游人如织，却以其静谧清幽的氛围吸引着真正懂得品味古迹的访客。',
    address: '兰溪路399号', openTime: '08:00-16:00', price: '10元', extra: '元代楠木大殿',
    baikeUrl: 'https://baike.baidu.com/item/%E7%9C%9F%E5%A6%82%E5%AF%BA',
    celebrity: { name: '赵孟頫', shortBio: '元代书画大家，有碑刻存真如寺。', fullBio: '赵孟頫（1254-1322），元代著名书法家、画家，其书法被誉为"赵体"，真如寺内曾有其所书碑刻。', baikeUrl: 'https://baike.baidu.com/item/%E8%B5%B5%E5%AD%9F%E9%A0%AB' }
  },

  // ==================== 杨浦区 (5) ====================
  {
    id: 'yangpu_lib', name: '杨浦区图书馆（旧上海市图书馆）', district: 'yangpu', type: 'architecture',
    lng: 121.5154, lat: 31.2795,
    poem: '大上海计划留此迹，琉璃瓦顶阅沧桑；钟楼高耸望江月，书海泛舟度流光。',
    description: '杨浦区图书馆原为旧上海市图书馆，是1930年代"大上海计划"的重要建筑遗存，由著名建筑师董大酉设计。建筑外观采用中式复兴风格，黄色琉璃瓦覆顶，红色立柱撑起门廊，钟楼耸立，气势恢宏。2018年修缮开放后被誉为"小故宫"，内部保留了孔雀门、雕花彩绘等精致细节，将古今阅读之美融于一身，是上海最美图书馆之一。',
    address: '长海路366号', openTime: '09:00-21:00', price: '免费', extra: '上海小故宫',
    baikeUrl: 'https://baike.baidu.com/item/%E6%9D%A8%E6%B5%A6%E5%8C%BA%E5%9B%BE%E4%B9%A6%E9%A6%86',
    celebrity: { name: '董大酉', shortBio: '中国近代建筑大师，大上海计划执笔人。', fullBio: '董大酉（1899-1973），留学美国归来，主持"大上海计划"多项建筑设计，为中国近代建筑奠基人。', baikeUrl: 'https://baike.baidu.com/item/%E8%91%A3%E5%A4%A7%E9%85%89' }
  },
  {
    id: 'gongqing_park', name: '共青国家森林公园', district: 'yangpu', type: 'park',
    lng: 121.5543, lat: 31.3242,
    poem: '森林深处觅清幽，花海四季景不同；骑马射箭皆可试，城中难得自然风。',
    description: '共青国家森林公园是上海市区最大的国家级森林公园，占地近2000亩，拥有大面积的森林、湿地和草甸景观。园内四季花海不断——春有樱花、夏有荷花、秋有菊花、冬有梅花，森林小火车穿梭于林间。公园还提供骑马、射箭、烧烤、皮划艇等丰富的户外活动项目，是上海市民周末踏青郊游的首选目的地。',
    address: '军工路2000号', openTime: '06:00-17:00', price: '15元', extra: '都市森林氧吧',
    baikeUrl: 'https://baike.baidu.com/item/%E5%85%B1%E9%9D%92%E5%9B%BD%E5%AE%B6%E6%A3%AE%E6%9E%97%E5%85%AC%E5%9B%AD',
    celebrity: { name: '陈植', shortBio: '林学家，中国现代林业开拓者。', fullBio: '陈植（1899-1989），中国现代林学奠基人之一，推动了城市森林公园理念在中国的实践。', baikeUrl: 'https://baike.baidu.com/item/%E9%99%88%E6%A4%8D' }
  },
  {
    id: 'lvzhiqiu', name: '绿之丘 & 杨浦滨江', district: 'yangpu', type: 'view',
    lng: 121.5177, lat: 31.2606,
    poem: '工业锈带换新装，生活秀带聚民心；绿丘盘旋观江景，塔吊留痕忆故年。',
    description: '绿之丘由原烟草仓库改造而成，是一座盘旋而上的立体绿化建筑，已成为杨浦滨江的标志性景观。这里被同济大学建筑与城市规划学院教授章明称为"这个世界的奇迹"，旋梯的设计令人称奇。杨浦滨江沿线保留了数十处工业遗存——塔吊、老厂房、系缆桩，这些"工业锈带"经过精心设计已变为"生活秀带"，成为市民跑步、骑行、拍照的热门去处。',
    address: '杨树浦路2086号', openTime: '全天', price: '免费', extra: '最美工业遗址滨江',
    baikeUrl: 'https://www.baidu.com/s?wd=%E7%BB%BF%E4%B9%8B%E4%B8%98%E6%9D%A8%E6%B5%A6%E6%BB%A8%E6%B1%9F',
    celebrity: { name: '章明', shortBio: '同济大学教授，杨浦滨江总设计师。', fullBio: '章明教授以"有限介入"的设计理念，将工业遗址转化为亲民的城市公共空间，获多项国际大奖。', baikeUrl: 'https://www.baidu.com/s?wd=%E7%AB%A0%E6%98%8E%E5%90%8C%E6%B5%8E%E5%A4%A7%E5%AD%A6%E6%9D%A8%E6%B5%A6%E6%BB%A8%E6%B1%9F' }
  },
  {
    id: 'guoge_zhan', name: '国歌展示馆', district: 'yangpu', type: 'memorial',
    lng: 121.5058, lat: 31.2588,
    poem: '国歌激荡振民心，旋律昂扬唤国魂；一馆珍藏峥嵘史，千秋传唱最强音。',
    description: '国歌展示馆坐落于原上海电通影片公司旧址，这里是电影《风云儿女》的拍摄地——而该片的主题曲正是后来成为国歌的《义勇军进行曲》。展馆以"国歌从这里唱响"为主题，通过实物、场景复原、多媒体互动等多种方式，生动展示了国歌的诞生历程和时代意义。馆中展出了聂耳的手稿、老唱片、电影海报等珍贵文物，是爱国主义教育的生动课堂。',
    address: '荆州路151号', openTime: '09:00-16:30', price: '免费', extra: '国歌诞生地',
    baikeUrl: 'https://baike.baidu.com/item/%E5%9B%BD%E6%AD%8C%E5%B1%95%E7%A4%BA%E9%A6%86',
    celebrity: { name: '田汉', shortBio: '国歌词作者，中国现代戏剧奠基人。', fullBio: '田汉（1898-1968），著名剧作家，创作《义勇军进行曲》歌词，与聂耳合作创作了这首激励亿万中国人的不朽之歌。', baikeUrl: 'https://baike.baidu.com/item/%E7%94%B0%E6%B1%89' }
  },
  {
    id: 'daxue_road', name: '大学路 & 创智天地', district: 'yangpu', type: 'street',
    lng: 121.5129, lat: 31.3029,
    poem: '梧桐树下青春路，书店咖啡日日新；创智天地聚才俊，知识经济在此兴。',
    description: '大学路是上海最具青春活力的特色街区之一，毗邻复旦大学和上海财经大学，被誉为"上海最美校园路"。整条马路栽满法桐，两侧遍布独立书店、精品咖啡馆、创意餐厅和手作工坊。创智天地是杨浦区打造"知识杨浦"的核心项目，由瑞安集团开发，汇集了众多科技创新企业和孵化器。每逢周末，大学路露天市集汇聚手工艺人，充满蓬勃朝气。',
    address: '大学路（淞沪路至国定路段）', openTime: '全天', price: '免费', extra: '上海最美校园路',
    baikeUrl: 'https://www.baidu.com/s?wd=%E4%B8%8A%E6%B5%B7%E5%A4%A7%E5%AD%A6%E8%B7%AF%E5%88%9B%E6%99%BA%E5%A4%A9%E5%9C%B0',
    celebrity: { name: '马相伯', shortBio: '复旦公学创始人，近代教育先驱。', fullBio: '马相伯（1840-1939），倾尽家产创办复旦公学（复旦大学前身），一生致力于教育救国。', baikeUrl: 'https://www.baidu.com/s?wd=%E9%A9%AC%E7%9B%B8%E4%BC%AF%E5%A4%8D%E6%97%A6%E5%85%AC%E5%AD%A6' }
  },

  // ==================== 松江区 (7) ====================
  {
    id: 'guangfulin', name: '广富林文化遗址', district: 'songjiang', type: 'historic',
    lng: 121.1910, lat: 31.0594,
    poem: '水下殿堂浮古韵，千年文脉此间眠；崧泽良渚续薪火，上海之根广富林。',
    description: '广富林文化遗址被誉为"上海之根"，其发现将上海人类活动历史推至约4000年前，涵盖崧泽文化、良渚文化和广富林文化等多个时期。遗址公园的核心建筑群"漂浮"于水面之上，三角形的屋顶仅露在水面上，主体建筑深入水下，营造出极具未来感的视觉效果。园内有文化展示馆、考古遗址展示馆等多座展馆，生动再现远古先民的生活场景，是了解上海文明起源的最佳去处。',
    address: '广富林路3260弄', openTime: '09:00-17:00', price: '30元', extra: '水下博物馆·上海之根',
    baikeUrl: 'https://baike.baidu.com/item/%E5%B9%BF%E5%AF%8C%E6%9E%97%E6%96%87%E5%8C%96%E9%81%97%E5%9D%80',
    celebrity: { name: '黄宣佩', shortBio: '考古学家，广富林遗址发掘主持者。', fullBio: '黄宣佩（1918-2012），上海考古事业奠基人之一，主持广富林文化遗址的考古发掘工作，揭开上海远古面纱。', baikeUrl: 'https://www.baidu.com/s?wd=%E9%BB%84%E5%AE%A3%E4%BD%A9%E8%80%83%E5%8F%A4' }
  },
  {
    id: 'sheshan', name: '佘山国家旅游度假区', district: 'songjiang', type: 'view',
    lng: 121.1873, lat: 31.0964,
    poem: '九峰叠翠入云霄，圣母大殿立山巅；天文台里窥宇宙，森林氧吧洗尘嚣。',
    description: '佘山是上海唯一的自然山林景观，由九座山峰组成，最高峰海拔100.8米（上海陆上最高点）。西佘山顶矗立着远东第一座天主教堂——佘山圣母大殿，融合罗马式与哥特式风格，庄严肃穆。佘山天文台建于1900年，是中国近代天文学的发源地之一，拥有中国第一台大型天文望远镜。佘山国家森林公园林木葱郁、空气清新，是上海市民登山健行、亲近自然的不二之选。',
    address: '佘山镇外青松公路9258号', openTime: '08:00-17:00', price: '免费（部分场馆收费）', extra: '上海唯一自然山林',
    baikeUrl: 'https://baike.baidu.com/item/%E4%BD%98%E5%B1%B1%E5%9B%BD%E5%AE%B6%E6%A3%AE%E6%9E%97%E5%85%AC%E5%9B%AD',
    celebrity: { name: '蔡尚质', shortBio: '法国传教士，佘山天文台创始人。', fullBio: '蔡尚质（Stanislas Chevalier）神父于1900年创建佘山天文台，开启了中国现代天文观测的新纪元。', baikeUrl: 'https://www.baidu.com/s?wd=%E8%94%A1%E5%B0%9A%E8%B4%A8%E4%BD%98%E5%B1%B1%E5%A4%A9%E6%96%87%E5%8F%B0' }
  },
  {
    id: 'chenshan', name: '辰山植物园', district: 'songjiang', type: 'garden',
    lng: 121.1791, lat: 31.0769,
    poem: '矿坑花园化神奇，温室巨塔映朝霞；四季繁花看不尽，植物王国任君游。',
    description: '辰山植物园由辰山采石矿坑改造而成，是华东地区最大的植物园。园内的矿坑花园被国际权威园艺组织评为"世界十大最美花园"之一，保留了工业遗址的壮观岩壁与人工瀑布。三大展览温室如水晶巨塔屹立园中，分别展示热带雨林、沙漠植物和珍奇花卉，收集了来自世界各地的数万种植物。每年春季的樱花大道和秋季的粉黛乱子草花海吸引无数游客。',
    address: '辰花公路3888号', openTime: '08:00-17:30', price: '60元', extra: '世界最美矿坑花园',
    baikeUrl: 'https://baike.baidu.com/item/%E8%BE%B0%E5%B1%B1%E6%A4%8D%E7%89%A9%E5%9B%AD',
    celebrity: { name: '朱育帆', shortBio: '清华大学教授，矿坑花园设计师。', fullBio: '朱育帆教授以生态修复理念对废弃矿坑进行改造，将伤痕转化为景观，创造了世界级的园林作品。', baikeUrl: 'https://baike.baidu.com/item/%E6%9C%B1%E8%82%B2%E5%B8%86' }
  },
  {
    id: 'fangtayuan', name: '方塔园', district: 'songjiang', type: 'historic',
    lng: 121.2440, lat: 31.0077,
    poem: '宋代方塔立千年，照壁砖雕绝代工；望仙桥下水如镜，松江府城韵悠悠。',
    description: '方塔园以园内兴圣教寺塔（俗称"方塔"）命名，该塔建于北宋熙宁年间（1068年），高42.5米，九级方形，是上海地区现存最古老、最完整的古塔之一。园内还有上海最古老的地面建筑——宋代望仙桥，以及被誉为"中国最精美砖雕"的明代砖刻照壁。方塔园曾获"上海市规划设计一等奖""全国优秀工程设计奖"等多项殊荣，是松江历史文化名城的核心地标。',
    address: '中山东路235号', openTime: '08:00-17:00', price: '12元', extra: '千年宋塔·全国文保',
    baikeUrl: 'https://baike.baidu.com/item/%E6%96%B9%E5%A1%94%E5%9B%AD',
    celebrity: { name: '冯纪忠', shortBio: '建筑大师，方塔园景观总设计师。', fullBio: '冯纪忠（1915-2009），中国现代建筑先驱，以"与古为新"理念设计方塔园，成就中国园林史上经典之作。', baikeUrl: 'https://baike.baidu.com/item/%E5%86%AF%E7%BA%AA%E5%BF%A0' }
  },
  {
    id: 'zuibaichi', name: '醉白池', district: 'songjiang', type: 'garden',
    lng: 121.2279, lat: 31.0053,
    poem: '乐天诗魂筑园林，池上草堂醉清风；曲廊幽径通何处，一池碧水映丹枫。',
    description: '醉白池始建于清顺治年间（1644年），是上海五大古典园林之一，以"醉白"为名，取自白居易《池上篇》之意。园林布局师法自然，以水池为中心，亭台楼阁环池而建，曲廊蜿蜒、小桥流水，典型的江南园林意境。园内"池上草堂"最负盛名，匾额由郑板桥题写。醉白池历史悠久、文脉深厚，董其昌、张祥河等历代文人都曾在此读书赏景、泼墨挥毫。',
    address: '人民南路64号', openTime: '08:00-17:00', price: '12元', extra: '上海五大古典园林',
    baikeUrl: 'https://baike.baidu.com/item/%E9%86%89%E7%99%BD%E6%B1%A0',
    celebrity: { name: '董其昌', shortBio: '明代书画宗师，松江画派领袖。', fullBio: '董其昌（1555-1636），官至礼部尚书，其书画理论与创作影响中国艺术数百年，曾在醉白池筑园居住。', baikeUrl: 'https://baike.baidu.com/item/%E8%91%A3%E5%85%B6%E6%98%8C' }
  },
  {
    id: 'huanlegu', name: '上海欢乐谷', district: 'songjiang', type: 'modern',
    lng: 121.1710, lat: 31.1011,
    poem: '绝顶雄风冲云霄，激流勇进水花溅；七大主题一日游，欢声笑语不停歇。',
    description: '上海欢乐谷是华侨城集团打造的大型主题乐园，拥有阳光港、欢乐时光、飓风湾、金矿镇等七大主题园区。园内有全木质过山车"谷木游龙"、65米高空垂直下落的"绝顶雄风"等世界级游乐设施，还有大型实景特技秀《上海滩》和《天幕水极》水秀表演。这里不仅有年轻人追逐的刺激，还有适合亲子的魔幻剧场和蚂蚁王国，是一家老少共享欢乐的好去处。',
    address: '林湖路888号', openTime: '09:30-18:00', price: '230元', extra: '七大主题·刺激乐园',
    baikeUrl: 'https://baike.baidu.com/item/%E4%B8%8A%E6%B5%B7%E6%AC%A2%E4%B9%90%E8%B0%B7',
    celebrity: { name: '任克雷', shortBio: '华侨城集团原总裁，欢乐谷系列创始人。', fullBio: '任克雷首创"旅游+地产"模式，带领华侨城打造全国多个欢乐谷主题乐园，引领中国文旅产业发展。', baikeUrl: 'https://www.baidu.com/s?wd=%E4%BB%BB%E5%85%8B%E9%9B%B7%E6%AC%A2%E4%B9%90%E8%B0%B7' }
  },
  {
    id: 'shenkeng', name: '上海佘山世茂洲际酒店（深坑酒店）', district: 'songjiang', type: 'hotel',
    lng: 121.1582, lat: 31.0608,
    poem: '废石坑中起琼楼，负海拔下十八洲；夜来灯光如瀑布，人间奇境落佘丘。',
    description: '上海佘山世茂洲际酒店是世界首个建造在废弃采石坑内的自然生态酒店，由迪拜帆船酒店设计师马丁·约克曼操刀。酒店"悬挂"在深约88米的巨大石坑内，地上两层、地面以下16层，其中两层位于水下，被称为"世界建筑奇迹"之一。酒店内设有水下餐厅、观景平台和每晚的奇幻水幕秀，是建筑奇观与顶级度假体验的完美结合。',
    address: '辰花路5888号', openTime: '外观全天', price: '3000元起/晚', extra: '世界建筑奇迹',
    baikeUrl: 'https://baike.baidu.com/item/%E4%B8%8A%E6%B5%B7%E4%BD%98%E5%B1%B1%E4%B8%96%E8%8C%82%E6%B4%B2%E9%99%85%E9%85%92%E5%BA%97',
    celebrity: { name: '马丁·约克曼', shortBio: '英国建筑大师，深坑酒店总设计师。', fullBio: '马丁·约克曼（Martin Jochman）以迪拜帆船酒店闻名于世，其设计的深坑酒店再次挑战了建筑工程的极限。', baikeUrl: 'https://www.baidu.com/s?wd=%E9%A9%AC%E4%B8%81%E7%BA%A6%E5%85%8B%E6%9B%BC%E5%BB%BA%E7%AD%91%E5%B8%88' }
  },

  // ==================== 嘉定区 (5) ====================
  {
    id: 'guyiyuan', name: '古猗园', district: 'jiading', type: 'garden',
    lng: 121.3097, lat: 31.2929,
    poem: '绿竹猗猗出诗经，明代园林雅韵存；戏鹅池畔观鱼乐，南翔小笼佐茶香。',
    description: '古猗园始建于明嘉靖年间，取《诗经》"绿竹猗猗"之意命名，是上海五大古典园林之一，也是上海最古老的名园之一。园内以竹为主题，植有方竹、紫竹、佛肚竹等数十种竹类，青竹掩映间点缀着逸野堂、戏鹅池、不系舟等精致景点。古猗园与南翔小笼齐名，逛完园林后到门口的老街品尝一笼正宗南翔小笼，是最地道的文化之旅。',
    address: '沪宜公路218号', openTime: '07:00-18:00', price: '12元', extra: '明代竹园·南翔小笼',
    baikeUrl: 'https://baike.baidu.com/item/%E5%8F%A4%E7%8C%97%E5%9B%AD',
    celebrity: { name: '闵士籍', shortBio: '明代官员，古猗园始建者。', fullBio: '闵士籍为明嘉靖年间河南府通判，因爱竹而在南翔购地筑园，取诗经之意命名为古猗园。', baikeUrl: 'https://www.baidu.com/s?wd=%E9%97%B5%E5%A3%AB%E7%B1%8D%E5%8F%A4%E7%8C%97%E5%9B%AD' }
  },
  {
    id: 'qiuxiapu', name: '秋霞圃', district: 'jiading', type: 'garden',
    lng: 121.2475, lat: 31.3879,
    poem: '明代园林秋色佳，池上草堂醉落霞；桃花潭水深千尺，红叶题诗寄年华。',
    description: '秋霞圃是上海五大古典园林之一，始建于明弘治年间（1502年），由龚氏园、沈氏园、金氏园和城隍庙合并而成。园内布局以桃花潭为中心，池上草堂、丛桂轩、舟而不游轩等亭台楼阁错落有致。秋霞圃以秋景闻名于沪上，每逢深秋，园中枫叶似火、银杏金黄，配以碧水曲桥，满园秋色令人陶醉，是品味明代园林艺术的绝佳之处。',
    address: '嘉定镇东大街314号', openTime: '08:00-17:00', price: '10元', extra: '上海五大古典园林',
    baikeUrl: 'https://www.baidu.com/s?wd=%E7%A7%8B%E9%9C%9E%E5%9C%83%E5%98%89%E5%AE%9A',
    celebrity: { name: '龚弘', shortBio: '明代官员，秋霞圃龚氏园始建者。', fullBio: '龚弘，明弘治年间工部尚书，始建龚氏园（秋霞圃前身），为嘉定留下宝贵的园林遗产。', baikeUrl: 'https://www.baidu.com/s?wd=%E9%BE%9A%E5%BC%98%E7%A7%8B%E9%9C%9E%E5%9C%83' }
  },
  {
    id: 'nanxiang_laojie', name: '南翔老街 & 双塔', district: 'jiading', type: 'street',
    lng: 121.3120, lat: 31.2966,
    poem: '双塔玲珑映古街，南翔小笼天下闻；青石板路寻旧梦，一屉鲜香醉人心。',
    description: '南翔老街拥有1500多年历史，是上海最古老的历史文化名镇之一。街口的南翔双塔（五代砖塔）距今已有千年，是目前上海唯一保存完好的五代古塔，为全国重点文物保护单位。南翔因小笼包而闻名天下，老街上的小笼馆从清晨到黄昏座无虚席。老街还有檀园（明代文人李流芳的私家园林）、云翔寺等古迹，青石板路两侧明清风格建筑林立，充满江南水乡韵味。',
    address: '南翔镇人民街', openTime: '全天', price: '免费', extra: '南翔小笼发源地',
    baikeUrl: 'https://baike.baidu.com/item/%E5%8D%97%E7%BF%94%E8%80%81%E8%A1%97',
    celebrity: { name: '李流芳', shortBio: '明代文人，"嘉定四先生"之一。', fullBio: '李流芳（1575-1629），明末著名诗人、书画家，建有檀园于南翔，与程嘉燧等并称"嘉定四先生"。', baikeUrl: 'https://www.baidu.com/s?wd=%E6%9D%8E%E6%B5%81%E8%8A%B3%E5%98%89%E5%AE%9A%E5%9B%9B%E5%85%88%E7%94%9F' }
  },
  {
    id: 'zhouqiao_laojie', name: '州桥老街 & 法华塔', district: 'jiading', type: 'street',
    lng: 121.2499, lat: 31.3868,
    poem: '法华塔影入河心，州桥石板印古今；嘉定老城文脉厚，一水一桥总关情。',
    description: '州桥老街是嘉定老城厢的核心所在，以法华塔为中心，横沥河水穿街而过。法华塔始建于南宋开禧年间（1205年），七级砖木结构，登塔可俯瞰嘉定城全景。州桥为单孔石拱桥，横跨横沥河数百年来见证了嘉定的繁华。老街沿线汇集了嘉定竹刻博物馆、陆俨少艺术院等文化场所，河畔茶馆、小吃店林立，是体验嘉定八百余年历史文化的第一站。',
    address: '嘉定镇城中街', openTime: '全天', price: '免费', extra: '南宋法华塔',
    baikeUrl: 'https://baike.baidu.com/item/%E6%B3%95%E5%8D%8E%E5%A1%94',
    celebrity: { name: '陆俨少', shortBio: '现代山水画大师，嘉定人。', fullBio: '陆俨少（1909-1993），浙江嘉定人，现代山水画代表人物之一，画风雄秀兼备，嘉定设有陆俨少艺术院。', baikeUrl: 'https://www.baidu.com/s?wd=%E9%99%86%E4%BF%8F%E5%B0%91%E5%98%89%E5%AE%9A%E7%94%BB%E5%AE%B6' }
  },
  {
    id: 'jiading_kongmiao', name: '嘉定孔庙 & 中国科举博物馆', district: 'jiading', type: 'historic',
    lng: 121.2505, lat: 31.3843,
    poem: '吴中第一冠江南，千年文庙育才贤；科举遗存今犹在，状元桥下流水潺。',
    description: '嘉定孔庙始建于南宋嘉定十二年（1219年），有"吴中第一"之称，是上海乃至整个江南地区规模最大、保存最完好的孔庙建筑群。内设中国科举博物馆，全面展示了中国科举制度的历史沿革、考试流程及著名状元举人的故事。庙前仰高坊、泮池、状元桥规制严谨，大成殿庄严肃穆，古银杏参天蔽日，是了解中国古代教育制度与儒家文化的绝佳场所。',
    address: '嘉定镇南大街183号', openTime: '08:30-16:30', price: '20元', extra: '吴中第一·科举博物馆',
    baikeUrl: 'https://baike.baidu.com/item/%E5%98%89%E5%AE%9A%E5%AD%94%E5%BA%99',
    celebrity: { name: '钱大昕', shortBio: '清代史学巨匠，嘉定人。', fullBio: '钱大昕（1728-1804），清代著名史学家、汉学家，乾嘉学派代表人物，曾在嘉定孔庙授徒讲学。', baikeUrl: 'https://baike.baidu.com/item/%E9%92%B1%E5%A4%A7%E6%98%95' }
  },

  // ==================== 宝山区 (6) ====================
  {
    id: 'baoshan_si', name: '宝山寺', district: 'baoshan', type: 'religious',
    lng: 121.4322, lat: 31.4080,
    poem: '晚唐遗韵落宝山，纯木大殿冠华东；梵音悠悠渡尘世，一花一木皆禅意。',
    description: '宝山寺始建于明正德年间，原址已毁，2005年易地重建。新建的宝山寺是全国唯一全部采用非洲红花梨纯木建造的唐代风格寺庙，大雄宝殿气势恢宏，斗拱层叠、飞檐深远，完美再现了晚唐宫廷建筑的神韵。寺内祇园以江南园林手法呈现禅意空间，获"中国建设工程鲁班奖"。寻一日清净，在此品素斋、听晚钟、赏祇园，是远离城市喧嚣的禅修之旅。',
    address: '罗店镇罗溪路518号', openTime: '08:00-16:30', price: '20元', extra: '华东最大纯木唐风殿堂',
    baikeUrl: 'https://www.baidu.com/s?wd=%E4%B8%8A%E6%B5%B7%E5%AE%9D%E5%B1%B1%E5%AF%BA%E7%BD%97%E5%BA%97',
    celebrity: { name: '梁思成', shortBio: '古建筑学泰斗，唐代建筑风格研究奠基人。', fullBio: '梁思成毕生致力于中国古代建筑研究，宝山寺晚唐风格设计的背后凝聚着梁思成对唐构的学术传承。', baikeUrl: 'https://baike.baidu.com/item/%E6%A2%81%E6%80%9D%E6%88%90' }
  },
  {
    id: 'wusong_paotai', name: '吴淞炮台湾国家湿地公园', district: 'baoshan', type: 'park',
    lng: 121.5080, lat: 31.3947,
    poem: '炮台遗址证海防，湿地生态聚鸟群；长江黄浦此交汇，一望无际水连天。',
    description: '吴淞炮台湾国家湿地公园位于长江与黄浦江交汇处，因清代在此建造炮台而得名。这里曾是鸦片战争、淞沪抗战的战场，古炮台遗址依然可见。作为上海最重要的湿地生态系统之一，公园内芦苇荡漾、水鸟成群，贝壳剧场、矿坑花园等人工景观与自然生态和谐共生。站在江边栈道远眺，长江入海口的壮阔景象令人心潮澎湃。',
    address: '塘后路206号', openTime: '06:00-18:00', price: '10元', extra: '两江交汇·湿地生态',
    baikeUrl: 'https://baike.baidu.com/item/%E5%90%B4%E6%B7%9E%E7%82%AE%E5%8F%B0%E6%B9%BE%E5%9B%BD%E5%AE%B6%E6%B9%BF%E5%9C%B0%E5%85%AC%E5%9B%AD',
    celebrity: { name: '陈化成', shortBio: '鸦片战争民族英雄，吴淞炮台殉国。', fullBio: '陈化成（1776-1842），江南提督，在吴淞口抗击英军入侵，壮烈殉国，是近代史上影响深远的爱国将领。', baikeUrl: 'https://baike.baidu.com/item/%E9%99%88%E5%8C%96%E6%88%90' }
  },
  {
    id: 'gucun_park', name: '顾村公园', district: 'baoshan', type: 'park',
    lng: 121.3651, lat: 31.3466,
    poem: '樱花如雪漫天飞，沪上赏樱第一处；春光不负顾村约，十里绯云待君来。',
    description: '顾村公园是上海最大的郊野公园之一，以樱花闻名沪上，是"上海市民最喜爱的赏樱地"。园内种植樱花逾万株、60多个品种，每年三月中旬至四月中旬举办的"上海樱花节"吸引数十万游客。除了樱花，园内还有荷花池、森林大草坪、儿童乐园等区域。春赏樱、夏观荷、秋赏菊、冬探梅，一年四季都有不同花景。',
    address: '沪太路4788号', openTime: '06:00-18:00', price: '20元', extra: '上海最美赏樱地',
    baikeUrl: 'https://baike.baidu.com/item/%E9%A1%BE%E6%9D%91%E5%85%AC%E5%9B%AD',
    celebrity: { name: '周瘦鹃', shortBio: '现代文学翻译家，园林文化推广者。', fullBio: '周瘦鹃（1895-1968），著名作家、翻译家，热爱花木园艺，对上海赏花文化的普及有重要贡献。', baikeUrl: 'https://baike.baidu.com/item/%E5%91%A8%E7%98%A6%E9%B9%83' }
  },
  {
    id: 'songhu_kangzhan', name: '上海淞沪抗战纪念馆', district: 'baoshan', type: 'memorial',
    lng: 121.4976, lat: 31.4223,
    poem: '塔高望远铭国耻，弹痕犹在警后人；淞沪硝烟虽已逝，民族精神万古存。',
    description: '上海淞沪抗战纪念馆位于长江入海口，是为铭记两次淞沪抗战（1932年"一·二八"和1937年"八·一三"）中英勇牺牲的将士而建。纪念馆主体建筑为一座高53.6米的纪念塔，塔顶可眺望长江口。馆内运用大量历史照片、文物、场景复原和多媒体手段，全景式展现了淞沪抗战的悲壮历程。每年抗战纪念日，众多市民和退伍老兵来此祭奠先烈。',
    address: '淞宝路200号', openTime: '09:00-16:30', price: '免费', extra: '爱国主义教育基地',
    baikeUrl: 'https://baike.baidu.com/item/%E4%B8%8A%E6%B5%B7%E6%B7%9E%E6%B2%AA%E6%8A%97%E6%88%98%E7%BA%AA%E5%BF%B5%E9%A6%86',
    celebrity: { name: '张治中', shortBio: '淞沪抗战指挥官，爱国将领。', fullBio: '张治中（1890-1969），国民党高级将领，在淞沪抗战中指挥第十九路军英勇抗敌，被国人誉为"和平将军"。', baikeUrl: 'https://baike.baidu.com/item/%E5%BC%A0%E6%B2%BB%E4%B8%AD' }
  },
  {
    id: 'boli_bowuguan', name: '上海玻璃博物馆', district: 'baoshan', type: 'museum',
    lng: 121.4940, lat: 31.3674,
    poem: '火中淬炼千般态，晶莹剔透万种形；玻璃迷宫寻出路，艺术殿堂启新思。',
    description: '上海玻璃博物馆前身为上海玻璃仪器一厂，2011年改造开放，是中国首家以玻璃为主题的专题博物馆。馆内分为主展厅、儿童玻璃博物馆、玻璃迷宫等多个区域，展示了从古玻璃文物到当代玻璃艺术的完整发展脉络。热玻璃表演秀让观众亲眼目睹玻璃从熔融到成型的奇妙过程，互动体验区可以亲手制作玻璃饰品，是中国最具体验感的博物馆之一。',
    address: '长江西路685号', openTime: '09:30-17:00周一闭馆', price: '80元', extra: '热玻璃表演秀',
    baikeUrl: 'https://baike.baidu.com/item/%E4%B8%8A%E6%B5%B7%E7%8E%BB%E7%92%83%E5%8D%9A%E7%89%A9%E9%A6%86',
    celebrity: { name: '张琳', shortBio: '玻璃博物馆创始人，文化创意产业推动者。', fullBio: '张琳将废弃玻璃工厂改造为国际级的玻璃艺术殿堂，开创了上海工业遗产成功转型的经典案例。', baikeUrl: 'https://www.baidu.com/s?wd=%E5%BC%A0%E7%90%B3%E7%8E%BB%E7%92%83%E5%8D%9A%E7%89%A9%E9%A6%86' }
  },
  {
    id: 'bandao1919', name: '半岛1919创意产业园', district: 'baoshan', type: 'art',
    lng: 121.5023, lat: 31.3745,
    poem: '百年纱厂焕新颜，红砖厂房聚创意；工业遗存化艺术，半岛新风拂面来。',
    description: '半岛1919前身是创建于1919年的大中华纱厂，是上海最早的民族纺织企业之一，由聂云台先生创办。园区保留了完整的工业建筑群——锯齿形厂房、水塔、烟囱等历史遗存，红砖墙面与玻璃幕墙形成新旧对话。如今这里已成为集艺术展览、创意办公、设计工坊于一体的文创产业园，众多艺术家工作室、设计公司和特色咖啡馆入驻其中，是宝山最具文艺气息的打卡地。',
    address: '淞兴西路258号', openTime: '全天', price: '免费', extra: '百年纱厂·文创园区',
    baikeUrl: 'https://www.baidu.com/s?wd=%E5%8D%8A%E5%B2%9B1919%E5%88%9B%E6%84%8F%E4%BA%A7%E4%B8%9A%E5%9B%AD',
    celebrity: { name: '聂云台', shortBio: '近代实业家，大中华纱厂创办者。', fullBio: '聂云台（1880-1953），曾国藩外孙，著名民族实业家，创办大中华纱厂，推动了中国民族工业的发展。', baikeUrl: 'https://baike.baidu.com/item/%E8%81%82%E4%BA%91%E5%8F%B0' }
  },

  // ==================== 闵行区 (5) ====================
  {
    id: 'qibao_guzhen', name: '七宝古镇', district: 'minhang', type: 'historic',
    lng: 121.3487, lat: 31.1580,
    poem: '七件宝物传奇久，蒲汇塘桥阅千秋；老街汤团滋味美，千年古镇客如流。',
    description: '七宝古镇因传说有七件宝物（飞来佛、氽来钟、金字莲花经、神树、金鸡、玉斧、玉筷）而闻名，建镇逾千年。蒲汇塘河穿镇而过，横跨河面的蒲汇塘桥（明正德年间建）是古镇的灵魂所在。南北大街两侧青砖黑瓦的明清风格建筑中，汇集了七宝方糕、七宝羊肉等地道小吃，老街的汤团尤为经典。七宝教寺和七宝皮影戏馆为古镇增添了浓厚的文化色彩。',
    address: '七宝镇南大街', openTime: '全天', price: '免费', extra: '千年古镇·七宝美食',
    baikeUrl: 'https://baike.baidu.com/item/%E4%B8%83%E5%AE%9D%E5%8F%A4%E9%95%87',
    celebrity: { name: '张充仁', shortBio: '现代雕塑家，七宝人。', fullBio: '张充仁（1907-1998），著名雕塑家、画家，与埃尔热合作创作《丁丁历险记·蓝莲花》，是七宝的骄傲。', baikeUrl: 'https://baike.baidu.com/item/%E5%BC%A0%E5%85%85%E4%BB%81' }
  },
  {
    id: 'zhaojialou', name: '召稼楼古镇', district: 'minhang', type: 'historic',
    lng: 121.5219, lat: 31.0716,
    poem: '召公垦荒留故迹，礼耕堂里话农桑；白墙黛瓦枕流水，沪谚声声传古韵。',
    description: '召稼楼古镇始建于元末明初，是上海农耕文化的发祥地之一，因"召公"招募村民在此垦荒耕种而得名。古镇内有上海保存最完整的清代大型民居群——礼耕堂，雕梁画栋、庭院深深。"沪谚"（上海谚语）于2011年被列入国家非物质文化遗产名录，上海首座沪谚文化展示馆即开设于此。召稼楼的特色小吃——草头塌饼、下沙烧卖远近闻名。',
    address: '浦江镇沈杜公路2059号', openTime: '全天', price: '免费', extra: '上海农耕文化起源地',
    baikeUrl: 'https://baike.baidu.com/item/%E5%8F%AC%E7%A8%BC%E6%A5%BC%E5%8F%A4%E9%95%87',
    celebrity: { name: '黄道婆', shortBio: '元代纺织革新家，在上海传播棉纺技术。', fullBio: '黄道婆（约1245-1330），从海南带回先进的棉纺织技术并改良革新，推动了江南纺织经济的繁荣。', baikeUrl: 'https://baike.baidu.com/item/%E9%BB%84%E9%81%93%E5%A9%86' }
  },
  {
    id: 'hanxiang_shuiboyuan', name: '韩湘水博园', district: 'minhang', type: 'garden',
    lng: 121.4612, lat: 31.0910,
    poem: '古桥五十跨清流，碧波万顷映亭台；水博园里藏天地，桥文化中阅千年。',
    description: '韩湘水博园以"水"和"古桥"为主题，是上海唯一的江南水乡园林式博物馆。园内从江南各地迁建了五十余座明清古石桥，石拱桥、平桥、廊桥形态各异，宛如"古桥博物馆"。园中湖面开阔、古树掩映，亭台楼阁依水而建，四季花木繁盛。这里不仅是自然风光的宝地，更是了解中国桥梁文化和水利文明的重要场所。',
    address: '江川西路3805号', openTime: '08:00-16:30', price: '30元', extra: '五十座古桥·江南水韵',
    baikeUrl: 'https://www.baidu.com/s?wd=%E9%9F%A9%E6%B9%98%E6%B0%B4%E5%8D%9A%E5%9B%AD',
    celebrity: { name: '茅以升', shortBio: '中国桥梁工程泰斗。', fullBio: '茅以升（1896-1989），著名桥梁专家，设计建造钱塘江大桥，对中国古桥研究和保护有开创性贡献。', baikeUrl: 'https://baike.baidu.com/item/%E8%8C%85%E4%BB%A5%E5%8D%87' }
  },
  {
    id: 'pujiang_jiaye', name: '浦江郊野公园', district: 'minhang', type: 'park',
    lng: 121.5171, lat: 31.0855,
    poem: '奇迹花园色斑斓，花毯连绵映蓝天；滨江漫步夕阳好，森林氧吧醉人心。',
    description: '浦江郊野公园是上海首批七个郊野公园之一，以"奇迹花园"闻名沪上。奇迹花园由国际著名园艺大师设计，数万平方米的花卉四季轮换，从高处俯瞰宛如巨大的彩色地毯铺展在大地上。公园沿黄浦江而建，有长达数公里的滨江步道，夕阳时分，金色的阳光洒在江面上，与花园的缤纷色彩交相辉映，是摄影爱好者的天堂。',
    address: '浦星公路2578弄', openTime: '06:00-18:00', price: '免费（奇迹花园30元）', extra: '奇迹花园·滨江步道',
    baikeUrl: 'https://baike.baidu.com/item/%E6%B5%A6%E6%B1%9F%E9%83%8A%E9%87%8E%E5%85%AC%E5%9B%AD',
    celebrity: { name: '钟律', shortBio: '园林设计师，浦江郊野公园主创设计。', fullBio: '钟律主持设计了浦江郊野公园的"奇迹花园"，将世界园艺潮流融入上海乡土景观。', baikeUrl: 'https://www.baidu.com/s?wd=%E9%92%9F%E5%BE%8B%E6%B5%A6%E6%B1%9F%E9%83%8A%E9%87%8E%E5%85%AC%E5%9B%AD' }
  },
  {
    id: 'minhang_bowuguan', name: '闵行博物馆', district: 'minhang', type: 'museum',
    lng: 121.3672, lat: 31.1532,
    poem: '马桥文化窥远古，海派非遗聚一厅；小小方寸藏天地，闵行历史此间寻。',
    description: '闵行博物馆以展示"马桥文化"（距今约4000年的太湖流域青铜时代文化）为最大特色，是了解上海远古文明的重要窗口。馆内常设《马桥文化》展、《上海县七百年》展、《中国民族乐器文化展》三个基本陈列，展品丰富，以考古出土文物为主。这里有上海出土最古老的青铜器、精美的良渚玉器，搭配现代化多媒体展示手段，让沉睡千年的文物"活"起来。',
    address: '新镇路1538号', openTime: '09:00-16:30周一闭馆', price: '免费', extra: '马桥文化·上海远古史',
    baikeUrl: 'https://baike.baidu.com/item/%E9%97%B5%E8%A1%8C%E5%8D%9A%E7%89%A9%E9%A6%86',
    celebrity: { name: '苏秉琦', shortBio: '考古学泰斗，马桥文化研究奠基者。', fullBio: '苏秉琦（1909-1997），中国考古学主要奠基人之一，最早对马桥文化进行系统科学的研究和命名。', baikeUrl: 'https://baike.baidu.com/item/%E8%8B%8F%E7%A7%89%E7%90%A6' }
  },

  // ==================== 青浦区 (4) ====================
  {
    id: 'zhujiajiao', name: '朱家角古镇', district: 'qingpu', type: 'historic',
    lng: 121.0536, lat: 31.1078,
    poem: '淀山湖畔千年镇，放生桥上望云烟；课植园里书声远，桨声灯影入画船。',
    description: '朱家角古镇是上海保存最完整、规模最大的江南水乡古镇，被誉为"上海的威尼斯"。镇内有放生桥（明代五孔石拱桥）、课植园（江南最大私家园林之一）、大清邮局等众多古迹。北大街被誉为"上海第一明清街"，古色古香的店铺售卖朱家角扎肉、阿婆粽等地方美食。乘一叶乌篷船穿过古镇河道，两旁白墙黑瓦倒映水中，桨声欵乃，古韵悠长。',
    address: '朱家角镇', openTime: '全天', price: '免费（部分景点收费）', extra: '上海最大水乡古镇',
    baikeUrl: 'https://baike.baidu.com/item/%E6%9C%B1%E5%AE%B6%E8%A7%92%E5%8F%A4%E9%95%87',
    celebrity: { name: '陆士谔', shortBio: '晚清小说家，朱家角人。', fullBio: '陆士谔（1878-1944），晚清著名小说家，著有《新中国》等百余部小说，他的奇幻想象与朱家角水乡文化一脉相承。', baikeUrl: 'https://baike.baidu.com/item/%E9%99%86%E5%A3%AB%E8%B0%94' }
  },
  {
    id: 'dianshanhu', name: '淀山湖（彩虹桥 & 大观园）', district: 'qingpu', type: 'view',
    lng: 120.9946, lat: 31.1184,
    poem: '碧波万顷接蓝天，彩虹长桥跨水间；大观园里红楼梦，湖光山色醉流年。',
    description: '淀山湖是上海最大的天然淡水湖，跨越青浦区与江苏省昆山市，水面面积62平方公里，被誉为"东方日内瓦湖"。青浦彩虹桥全长1.47公里，横跨湖面，夜幕降临后灯光璀璨如彩虹卧波。湖畔的上海大观园是按《红楼梦》意境建造的大型仿古园林，再现了大观园的亭台楼阁，是电视剧87版《红楼梦》的取景地。',
    address: '青浦区淀山湖大道', openTime: '全天', price: '免费（大观园55元）', extra: '上海最大湖泊',
    baikeUrl: 'https://baike.baidu.com/item/%E6%B7%80%E5%B1%B1%E6%B9%96',
    celebrity: { name: '曹雪芹', shortBio: '《红楼梦》作者，中国古代文学巅峰人物。', fullBio: '曹雪芹（约1715-1763），清代文学巨匠，所著《红楼梦》为中国古典小说最高成就，大观园即取其意境而建。', baikeUrl: 'https://baike.baidu.com/item/%E6%9B%B9%E9%9B%AA%E8%8A%B9' }
  },
  {
    id: 'qingpu_bowuguan', name: '青浦博物馆（崧泽文化）', district: 'qingpu', type: 'museum',
    lng: 121.1113, lat: 31.1480,
    poem: '崧泽遗存记先民，六千年前此定居；蝴蝶厅里观万象，青龙镇上话沧桑。',
    description: '青浦博物馆以崧泽文化（距今约6000年）为核心展示内容，崧泽遗址的发现证明了上海地区新石器时代已有人类繁衍生息。博物馆外形为独特的蝴蝶式建筑，由著名建筑师邢同和设计。馆藏文物丰富，以崧泽文化陶器、良渚文化玉器最具代表性。这里还有对青龙镇（唐宋时期上海最早的对外贸易港口）的专题展示，讲述上海从渔村到都市的传奇历史。',
    address: '华青南路1000号', openTime: '09:00-16:30', price: '免费', extra: '六千年崧泽文化',
    baikeUrl: 'https://baike.baidu.com/item/%E9%9D%92%E6%B5%A6%E5%8D%9A%E7%89%A9%E9%A6%86',
    celebrity: { name: '邢同和', shortBio: '建筑大师，青浦博物馆设计师。', fullBio: '邢同和，上海现代建筑设计院总建筑师，设计了上海博物馆、青浦博物馆等众多文化地标。', baikeUrl: 'https://baike.baidu.com/item/%E9%82%A2%E5%90%8C%E5%92%8C' }
  },
  {
    id: 'liantang', name: '练塘古镇（陈云故里）', district: 'qingpu', type: 'historic',
    lng: 121.0432, lat: 30.9925,
    poem: '练溪河畔古村静，三里长街枕水眠；陈云故里寻足迹，革命家风代代传。',
    description: '练塘古镇是一座保存完好的江南水乡古镇，距朱家角仅十余公里却游客稀少，更显原生态。镇中以三里长的练溪老街最具特色，青石板路两旁是粉墙黛瓦的明清民居，小河潺潺穿镇而过。练塘是中国老一辈无产阶级革命家陈云的故乡，陈云纪念馆（国家AAAA级）详尽展示了这位"共和国掌柜"的光辉一生。练塘茭白和袜底酥是当地名产。',
    address: '练塘镇', openTime: '全天', price: '免费（陈云纪念馆免费）', extra: '原生态水乡·陈云故里',
    baikeUrl: 'https://baike.baidu.com/item/%E7%BB%83%E5%A1%98%E5%8F%A4%E9%95%87',
    celebrity: { name: '陈云', shortBio: '无产阶级革命家，中国社会主义经济建设奠基人之一。', fullBio: '陈云（1905-1995），青浦练塘人，党和国家主要领导人之一，被誉为"共和国掌柜"，对中国经济体系建立有重大贡献。', baikeUrl: 'https://baike.baidu.com/item/%E9%99%88%E4%BA%91' }
  },

  // ==================== 奉贤区 (5) ====================
  {
    id: 'haiwang_park', name: '海湾国家森林公园', district: 'fengxian', type: 'park',
    lng: 121.6875, lat: 30.8629,
    poem: '万亩梅园香雪海，千米水杉列翠屏；海湾深处藏幽境，森林氧吧洗尘心。',
    description: '海湾国家森林公园是上海最大的人工森林，拥有上海规模最大的梅花园——世纪梅园，种植梅花数万株。园内千米长的落羽杉林荫道是网红打卡地，秋季红叶如火。公园紧邻杭州湾海岸，可以体验森林、湖泊、海岸三重景观。骑马、皮划艇、帐篷露营等丰富户外项目，是周末远离都市喧嚣、亲近自然的理想目的地。',
    address: '随塘河路1677号', openTime: '08:30-16:30', price: '80元', extra: '上海最大梅花园',
    baikeUrl: 'https://www.baidu.com/s?wd=%E4%B8%8A%E6%B5%B7%E6%B5%B7%E6%B9%BE%E5%9B%BD%E5%AE%B6%E6%A3%AE%E6%9E%97%E5%85%AC%E5%9B%AD',
    celebrity: { name: '竺可桢', shortBio: '气象地理学家，推动中国森林生态保护。', fullBio: '竺可桢（1890-1974），著名气象学家、地理学家，倡导植树造林改善生态环境，对新中国森林保护事业有开创性贡献。', baikeUrl: 'https://baike.baidu.com/item/%E7%AB%BA%E5%8F%AF%E6%A1%A2' }
  },
  {
    id: 'guhuayuan', name: '古华园', district: 'fengxian', type: 'garden',
    lng: 121.4698, lat: 30.9178,
    poem: '亭台倒映西湖波，奉贤古韵此园藏；曲桥流水画中意，一草一木总关乡。',
    description: '古华园取"古之华亭"之意，将奉贤两千余年的历史典故融入园林设计之中，是一座以"史"入画的现代仿古园林。园内仿照杭州西湖格局，设有三潭映月的"品亭曲桥"等二十二处景点，有"沪郊四古园"之一的美誉。园中讲述言子（孔子弟子言偃）传教奉贤的故事，"奉贤"之名即出自"敬奉贤人"的典故。',
    address: '解放中路220号', openTime: '08:00-17:00', price: '免费', extra: '以典故造园·沪郊名园',
    baikeUrl: 'https://baike.baidu.com/item/%E5%8F%A4%E5%8D%8E%E5%9B%AD',
    celebrity: { name: '言偃', shortBio: '孔子弟子，到奉贤传播儒学。', fullBio: '言偃（前506-前443），字子游，孔子七十二贤之一，曾至江南传播儒学，奉贤因"敬奉贤人"而得名。', baikeUrl: 'https://baike.baidu.com/item/%E8%A8%80%E5%81%83' }
  },
  {
    id: 'fengxian_bowuguan', name: '奉贤博物馆', district: 'fengxian', type: 'museum',
    lng: 121.4789, lat: 30.9208,
    poem: '三馆合一定新篇，修竹清风伴古珍；海塘文化说抗潮，敬奉贤人溯本源。',
    description: '奉贤博物馆新馆由日本建筑大师藤本壮介设计，与奉贤区规划馆、奉贤区文化馆"三馆合一"，坐落在上海之鱼金海湖畔。建筑以竹林环绕的院落式布局营造幽静氛围，白色墙体与玻璃的对比干净利落。馆内常设展以奉贤海塘文化（千年抗潮筑塘史）和"敬奉贤人"的言子文化为主线，是了解奉贤历史的第一站。',
    address: '湖畔路333号', openTime: '09:00-16:30周一闭馆', price: '免费', extra: '湖上三馆·建筑之美',
    baikeUrl: 'https://baike.baidu.com/item/%E5%A5%89%E8%B4%A4%E5%8D%9A%E7%89%A9%E9%A6%86',
    celebrity: { name: '藤本壮介', shortBio: '日本建筑大师，奉贤博物馆设计师。', fullBio: '藤本壮介（Sou Fujimoto），以"人与自然之间"的设计理念闻名，代表作包括蛇形画廊展馆等。', baikeUrl: 'https://baike.baidu.com/item/%E8%97%A4%E6%9C%AC%E5%A3%AE%E4%BB%8B' }
  },
  {
    id: 'qingxi_laojie', name: '青溪老街', district: 'fengxian', type: 'street',
    lng: 121.5733, lat: 30.9205,
    poem: '隋末成陆唐初村，千年古街石板深；望海楼前观沧海，青溪渔火夜归人。',
    description: '青溪老街拥有1400多年历史，青村（青溪）在隋末唐初成陆、宋初有村，是奉贤境内历史最悠久的古镇。老街保留了大量清朝到民国时期的民居建筑，其中南虹桥（清代单孔石拱桥）、望海楼最值得一看。相比朱家角和七宝，青溪老街游客较少，更显清幽原味。当地特产青村方糕、海棠糕让游客在老街漫步中品尝时光的味道。',
    address: '青村镇青村老街', openTime: '全天', price: '免费', extra: '千年清静古街',
    baikeUrl: 'https://www.baidu.com/s?wd=%E5%A5%89%E8%B4%A4%E9%9D%92%E6%BA%AA%E8%80%81%E8%A1%97',
    celebrity: { name: '张弼', shortBio: '明代书法家，"吴中草圣"。', fullBio: '张弼（1425-1487），华亭（今上海奉贤）人，明代著名书法家，尤擅草书，时称"吴中草圣"。', baikeUrl: 'https://baike.baidu.com/item/%E5%BC%A0%E5%BC%BC' }
  },
  {
    id: 'shanghai_zhiyu', name: '上海之鱼（金海湖）', district: 'fengxian', type: 'view',
    lng: 121.4818, lat: 30.9141,
    poem: '金鱼嬉水化新城，花海环湖四季春；水清岸绿白鹭飞，奉贤新貌展芳华。',
    description: '上海之鱼是奉贤新城的核心景观，由迪拜棕榈岛的设计师拉里·希姆松以"金鱼"为造型规划的人工湖及湖泊绿地系统。湖周边环绕花海、湿地、森林小岛和雕塑公园，奉贤博物馆、规划展示馆等文化设施坐落于湖畔。每年花开时节，大片花海（粉黛乱子草、格桑花等）映衬湖面，是网红拍照打卡的必到之地。',
    address: '奉贤区金海湖', openTime: '全天', price: '免费', extra: '网红花海·城市新地标',
    baikeUrl: 'https://www.baidu.com/s?wd=%E4%B8%8A%E6%B5%B7%E4%B9%8B%E9%B1%BC%E5%A5%89%E8%B4%A4',
    celebrity: { name: '拉里·希姆松', shortBio: '国际景观大师，上海之鱼总规划师。', fullBio: '拉里·希姆松（Larry Ziebarth）主持设计了上海之鱼的总体规划，以金鱼造型打造奉贤新城标志性景观。', baikeUrl: 'https://www.baidu.com/s?wd=%E6%8B%89%E9%87%8C%C2%B7%E5%B8%8C%E5%A7%86%E6%9D%BE%E6%99%AF%E8%A7%82%E5%B8%88' }
  },

  // ==================== 金山区 (5) ====================
  {
    id: 'fengjing', name: '枫泾古镇', district: 'jinshan', type: 'historic',
    lng: 121.0123, lat: 30.8869,
    poem: '三步两桥连水巷，一望十条港纵横；吴越交界千年镇，农民画里看风土。',
    description: '枫泾古镇位于吴越交界处，建镇逾1500年，是上海通往西南各省的重要门户。镇内水网密布，有"三步两座桥、一望十条港"之说，致和桥、泰平桥等52座古桥横跨在小河之上。枫泾还是中国农民画的重要发源地之一，金山农民画村展示着色彩鲜艳、风格质朴的民间艺术。枫泾丁蹄、黄酒、豆腐干是当地三大特产。',
    address: '枫泾镇', openTime: '全天', price: '免费（部分景点收费）', extra: '千年吴越名镇·农民画乡',
    baikeUrl: 'https://baike.baidu.com/item/%E6%9E%AB%E6%B3%BE%E5%8F%A4%E9%95%87',
    celebrity: { name: '丁聪', shortBio: '著名漫画家，枫泾人。', fullBio: '丁聪（1916-2009），中国现代漫画泰斗，以"小丁"笔名发表大量针砭时弊的社会讽刺漫画，枫泾设有丁聪漫画馆。', baikeUrl: 'https://baike.baidu.com/item/%E4%B8%81%E8%81%AA' }
  },
  {
    id: 'jinshan_shatan', name: '金山城市沙滩', district: 'jinshan', type: 'view',
    lng: 121.3455, lat: 30.7160,
    poem: '碧海金沙映蓝天，夏日欢歌逐浪来；沙排赛事惊四座，海上烟花绽夜空。',
    description: '金山城市沙滩是长三角地区最著名的人工沙滩之一，拥有数公里长的金色沙滩和清澈海水。这里不仅是上海市民夏日消暑的首选，更承办过国际排联沙滩排球巡回赛等重大赛事。每年夏季的金山音乐节和海上烟花节吸引了无数年轻人。沙滩旁的海上浮动舞台、水上乐园和海鲜大排档为游客提供丰富的休闲娱乐选择。',
    address: '山阳镇沪杭公路', openTime: '08:30-20:30', price: '30元（夏季）/10元（非夏季）', extra: '上海最大人工沙滩',
    baikeUrl: 'https://baike.baidu.com/item/%E9%87%91%E5%B1%B1%E5%9F%8E%E5%B8%82%E6%B2%99%E6%BB%A9',
    celebrity: { name: '李宁', shortBio: '体操王子，曾为城市沙滩运动项目助力。', fullBio: '李宁（1963-），中国体操传奇人物，退役后成功转型企业家，多次为上海沙滩体育赛事和全民健身活动助力。', baikeUrl: 'https://baike.baidu.com/item/%E6%9D%8E%E5%AE%81' }
  },
  {
    id: 'jinshanzui_yucun', name: '金山嘴渔村', district: 'jinshan', type: 'culture',
    lng: 121.3715, lat: 30.7313,
    poem: '沪上最后渔村在，千年海渔续新篇；妈祖庙前祈平安，海鲜街上品新鲜。',
    description: '金山嘴渔村是上海沿海地区保存最完整的渔村，也是"上海最后一个渔村"，拥有千年海渔文化。村内有妈祖文化馆（供奉海神妈祖）、渔民老宅、渔具馆等特色景点，展示了从木船时代到现代的铁船变迁史。金山嘴海鲜一条街常年供应刚从杭州湾捕捞上来的新鲜海产，梭子蟹、白虾、带鱼最受欢迎，是老饕们驱车而来品尝"上海第一鲜"的好去处。',
    address: '山阳镇金山嘴渔村', openTime: '全天', price: '免费', extra: '上海最后一个渔村',
    baikeUrl: 'https://baike.baidu.com/item/%E9%87%91%E5%B1%B1%E5%98%B4%E6%B8%94%E6%9D%91',
    celebrity: { name: '妈祖', shortBio: '海神，渔村妈祖文化守护神。', fullBio: '妈祖（960-987），中国东南沿海最受尊崇的海神，保佑航海平安，金山嘴渔村建有妈祖文化馆传承渔家信仰。', baikeUrl: 'https://baike.baidu.com/item/%E5%A6%88%E7%A5%96' }
  },
  {
    id: 'donglin_si', name: '东林寺', district: 'jinshan', type: 'religious',
    lng: 121.2853, lat: 30.8933,
    poem: '三项大世界基尼，山体奇观冠佛门；千手观音金光耀，东林禅寺渡迷津。',
    description: '东林寺始建于元至大三年（1310年），近年经历大规模扩建后，拥有三项大世界基尼斯纪录——世界最高的室内观音像（高34.101米千手千眼观音）、世界最高的铜门（高20.08米千佛门）、世界最高的景泰蓝佛像（善财童子像），被誉为"山体奇观、佛门奇观"。寺内建筑依山而建，千佛门、大雄宝殿、观音阁层层递进，金碧辉煌。',
    address: '朱泾镇东林街150号', openTime: '08:00-16:30', price: '30元', extra: '三项基尼斯纪录',
    baikeUrl: 'https://www.baidu.com/s?wd=%E4%B8%9C%E6%9E%97%E5%AF%BA%E4%B8%8A%E6%B5%B7%E9%87%91%E5%B1%B1',
    celebrity: { name: '妙灵法师', shortBio: '东林寺方丈，发愿重建古刹。', fullBio: '妙灵法师主持东林寺重建工程，以宏大的愿力将一座元代古刹建设为拥有国际影响力的佛教圣地。', baikeUrl: 'https://www.baidu.com/s?wd=%E5%A6%99%E7%81%B5%E6%B3%95%E5%B8%88%E4%B8%9C%E6%9E%97%E5%AF%BA' }
  },
  {
    id: 'huakaihaishang', name: '花开海上生态园', district: 'jinshan', type: 'garden',
    lng: 121.2578, lat: 30.8596,
    poem: '梅花傲雪花正盛，樱花落处春意浓；四季花海看不尽，满园芬芳入画中。',
    description: '花开海上生态园是上海最大的花海主题生态园之一，占地600亩，以"春有梅樱、夏有莲荷、秋有地肤、冬有蜡梅"的四季花海而著称。园内最具特色的是秋季的"地肤草海"，数万株地肤从绿变红再变金黄，连绵如彩色地毯，航拍景观极为震撼。樱花大道、梅花园、向日葵田等主题区域在不同季节轮番登场，花海亲子乐园和星空营地适合全家出游。',
    address: '朱泾镇秀泾村', openTime: '08:00-17:00', price: '30元', extra: '四季花海·地肤草海',
    baikeUrl: 'https://www.baidu.com/s?wd=%E8%8A%B1%E5%BC%80%E6%B5%B7%E4%B8%8A%E7%94%9F%E6%80%81%E5%9B%AD%E4%B8%8A%E6%B5%B7',
    celebrity: { name: '丰子恺', shortBio: '漫画家、散文家，对花木有深情。', fullBio: '丰子恺（1898-1975），以随笔漫画描绘日常之美，其"护生"理念和花木小品与花海生态园的自然之美一脉相通。', baikeUrl: 'https://baike.baidu.com/item/%E4%B8%B0%E5%AD%90%E6%81%BA' }
  },

  // ==================== 崇明区 (4) ====================
  {
    id: 'dongping_park', name: '东平国家森林公园', district: 'chongming', type: 'park',
    lng: 121.4740, lat: 31.6894,
    poem: '万木葱茏接天际，森林深处闻鸟啼；骑行林间风拂面，氧吧洗肺最相宜。',
    description: '东平国家森林公园是华东地区最大的平原人工森林，森林覆盖率达90%以上，被誉为"东海瀛洲"上的绿色明珠。园内树木参天、绿草如茵，荷兰风车、森林小火车、紫藤长廊等景观散布其间。这里提供房车露营地、森林骑行道、烧烤区等丰富设施，是上海市民周末"洗肺"的首选之地。每年秋季的森林音乐节和夏季的星空露营是最受欢迎的活动。',
    address: '东平镇北沿公路2188号', openTime: '08:30-16:30', price: '70元', extra: '华东最大平原森林',
    baikeUrl: 'https://baike.baidu.com/item/%E4%B8%9C%E5%B9%B3%E5%9B%BD%E5%AE%B6%E6%A3%AE%E6%9E%97%E5%85%AC%E5%9B%AD',
    celebrity: { name: '梁希', shortBio: '新中国第一任林业部部长，森林保护先驱。', fullBio: '梁希（1883-1958），著名林学家，推动了中国大规模人工造林事业，其"让青山永续利用"理念影响深远。', baikeUrl: 'https://baike.baidu.com/item/%E6%A2%81%E5%B8%8C' }
  },
  {
    id: 'xisha_mingzhu', name: '西沙明珠湖景区', district: 'chongming', type: 'view',
    lng: 121.2483, lat: 31.7250,
    poem: '明珠碧水映蓝天，芦苇荡里白鹭眠；潮沟蜿蜒如画图，西沙落日最迷人。',
    description: '西沙明珠湖景区由明珠湖和西沙湿地两大区域组成，拥有上海最完好的内陆湖泊和滩涂湿地生态系统。明珠湖水面面积达3000亩，湖水清澈、鱼类丰富，是垂钓和水上运动的好去处。西沙湿地是上海唯一具有自然潮汐现象的淡水湿地，蜿蜒的潮沟形成独特的"大地之树"景观。日落时分，夕阳洒在芦苇荡和湖面上，水鸟归巢，景致令人沉醉。',
    address: '三华公路333号', openTime: '08:30-16:30', price: '30元', extra: '最美湿地落日',
    baikeUrl: 'https://baike.baidu.com/item/%E8%A5%BF%E6%B2%99%E6%98%8E%E7%8F%A0%E6%B9%96',
    celebrity: { name: '秉志', shortBio: '中国近代生物学奠基人，崇明生态考察先驱。', fullBio: '秉志（1886-1965），著名动物学家，中国近代生物学主要奠基人，曾在崇明进行多次生态调查。', baikeUrl: 'https://baike.baidu.com/item/%E7%A7%89%E5%BF%97' }
  },
  {
    id: 'dongtan_shidi', name: '东滩湿地公园', district: 'chongming', type: 'park',
    lng: 121.9525, lat: 31.5156,
    poem: '候鸟天堂栖湿地，芦苇无垠接海天；望台极目长江口，自然课堂在眼前。',
    description: '崇明东滩湿地是国际重要湿地和国家级自然保护区，地处长江入海口，是东亚—澳大利西亚候鸟迁徙路线上的关键中转站，每年有逾百万只候鸟在此停歇觅食。湿地公园内设置了观鸟台、木栈道和科普展馆，可以在不惊扰鸟类的距离观赏白头鹤、黑脸琵鹭等珍稀水鸟。春天的芦苇新绿、秋天的芦苇金黄，四季变化中更添自然之美。',
    address: '东滩湿地', openTime: '09:00-17:00', price: '50元', extra: '国际重要湿地·候鸟天堂',
    baikeUrl: 'https://baike.baidu.com/item/%E5%B4%87%E6%98%8E%E4%B8%9C%E6%BB%A9%E6%B9%BF%E5%9C%B0',
    celebrity: { name: '郑作新', shortBio: '中国鸟类学泰斗，推动湿地候鸟保护。', fullBio: '郑作新（1906-1998），世界著名鸟类学家，中国鸟类学研究奠基人，对中国湿地候鸟保护作出开创性贡献。', baikeUrl: 'https://baike.baidu.com/item/%E9%83%91%E4%BD%9C%E6%96%B0' }
  },
  {
    id: 'changxingdao', name: '长兴岛郊野公园', district: 'chongming', type: 'park',
    lng: 121.7143, lat: 31.3823,
    poem: '橘香十里醉秋风，郊野田园乐融融；采摘垂钓皆可试，岛上休闲慢时光。',
    description: '长兴岛郊野公园是上海首批七个郊野公园中面积最大的一个，以"自然、生态、野趣"为设计理念。公园毗邻长江，拥有大片水杉林、花海和果园，其中最具特色的是橘园——长兴岛素有"橘乡"之称，每年秋天举办柑橘采摘节。园内还有生态垂钓区、马术俱乐部和儿童探险乐园。从上海市区乘轮渡至长兴岛仅40分钟，是岛上慢生活的最佳体验地。',
    address: '长兴岛秋柑路199号', openTime: '08:30-16:30', price: '免费', extra: '橘乡采摘·岛上慢生活',
    baikeUrl: 'https://baike.baidu.com/item/%E9%95%BF%E5%85%B4%E5%B2%9B%E9%83%8A%E9%87%8E%E5%85%AC%E5%9B%AD',
    celebrity: { name: '钟扬', shortBio: '植物学家，生态保护践行者。', fullBio: '钟扬（1964-2017），复旦大学教授，毕生致力于生物多样性研究和保护，为崇明生态岛建设提供重要学术支撑。', baikeUrl: 'https://baike.baidu.com/item/%E9%92%9F%E6%89%AC' }
  }
]

const DISTRICT_NAMES = {
  huangpu: '黄浦区', jingan: '静安区', hongkou: '虹口区',
  xuhui: '徐汇区', changning: '长宁区', putuo: '普陀区',
  yangpu: '杨浦区', pudong: '浦东新区', songjiang: '松江区',
  jiading: '嘉定区', baoshan: '宝山区', minhang: '闵行区',
  qingpu: '青浦区', fengxian: '奉贤区', jinshan: '金山区',
  chongming: '崇明区'
}

module.exports = {
  spotsData,
  TYPE_ICONS,
  TYPE_NAMES,
  DISTRICT_NAMES
}
