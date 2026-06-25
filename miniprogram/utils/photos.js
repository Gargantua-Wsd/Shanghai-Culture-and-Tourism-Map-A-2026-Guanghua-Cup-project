/**
 * Photo URLs for each spot, sourced from Baidu Baike (bkimg.cdn.bcebos.com).
 * These are directly accessible CDN URLs — no API key required.
 *
 * 5 spots have no Baidu Baike photos and need manual sourcing:
 *   sanshan (三山会馆), immersive_theater (沉浸式剧场),
 *   suhewan (苏河湾万象天地), fotografiska (Fotografiska影像艺术中心),
 *   shanghai_tower_hotel (上海大厦)
 */

const spotPhotos = {
  // ==================== 黄浦区 (10) ====================
  yuyuan: [
    'https://bkimg.cdn.bcebos.com/pic/6609c93d70cf3bc79f3d82edfc58ada1cd11728bfc20',
    'https://bkimg.cdn.bcebos.com/pic/a044ad345982b2b7d0a223e616ffdcef76094b362dcd',
    'https://bkimg.cdn.bcebos.com/pic/203fb80e7bec54e736d115c894608c504fc2d4623c97',
    'https://bkimg.cdn.bcebos.com/pic/80cb39dbb6fd5266d0169f178640802bd40735fa9822',
    'https://bkimg.cdn.bcebos.com/pic/aa18972bd40735fae6cde7bab30918b30f2442a7a222',
    'https://bkimg.cdn.bcebos.com/pic/b2de9c82d158ccbf6c81e3393480ab3eb13533faeb22',
    'https://bkimg.cdn.bcebos.com/pic/bd3eb13533fa828ba61ec2e0d0475634970a304eec22',
    'https://bkimg.cdn.bcebos.com/pic/eac4b74543a98226cffcf1aa7dd9ae014a90f703bdb0'
  ],

  bund: [
    'https://bkimg.cdn.bcebos.com/pic/29381f30e924b8998e90a69065061d950b7bf6ee',
    'https://bkimg.cdn.bcebos.com/pic/3801213fb80e7bec54e7481bc777ae389b504ec23d8d',
    'https://bkimg.cdn.bcebos.com/pic/bf096b63f6246b605cd7743beef81a4c500fa2a0',
    'https://bkimg.cdn.bcebos.com/pic/d000baa1cd11728b8a8954eec4fcc3cec2fd2c52',
    'https://bkimg.cdn.bcebos.com/pic/3bf33a87e950352a37ea76a15b43fbf2b3118b94',
    'https://bkimg.cdn.bcebos.com/pic/9825bc315c6034a85edfb2d18f495e540923dd54d813',
    'https://bkimg.cdn.bcebos.com/pic/279759ee3d6d55fb38fcdceb61224f4a21a4ddc1',
    'https://bkimg.cdn.bcebos.com/pic/d53f8794a4c27d1ed039cdea16d5ad6eddc43884'
  ],

  dajingge: [
    'https://bkimg.cdn.bcebos.com/pic/0bd162d9f2d3572c11df3d01f059742762d0f6036591',
    'https://bkimg.cdn.bcebos.com/pic/91ef76c6a7efce1b9d160f1b2d08e4deb48f8d54cf92',
    'https://bkimg.cdn.bcebos.com/pic/8d5494eef01f3a294fcad4869925bc315c607c73'
  ],

  sanshan: [],

  shangchuan: [
    'https://bkimg.cdn.bcebos.com/pic/e7cd7b899e510fb30f240c87a67fdf95d143ad4ba6c5',
    'https://bkimg.cdn.bcebos.com/pic/9e3df8dcd100baa1cd11e76b514cae12c8fcc2ce8095',
    'https://bkimg.cdn.bcebos.com/pic/9345d688d43f8794a4c2dcfec44719f41bd5ac6e8c95',
    'https://bkimg.cdn.bcebos.com/pic/1e30e924b899a9014c0880e60bc91d7b02087af45f94',
    'https://bkimg.cdn.bcebos.com/pic/0e2442a7d933c895d14316abc74f64f082025bafaa95',
    'https://bkimg.cdn.bcebos.com/pic/a50f4bfbfbedab64034fbd10e16ab8c379310b55b095'
  ],

  gucheng_park: [
    'https://bkimg.cdn.bcebos.com/pic/a54e55fb4df1833f034f56dc',
    'https://bkimg.cdn.bcebos.com/pic/4bac30735fe49b478701b0a9',
    'https://bkimg.cdn.bcebos.com/pic/3bf33a87e950352a88cf1e815043fbf2b3118b88',
    'https://bkimg.cdn.bcebos.com/pic/aa251d4fe1a1bf7bafc3ab84',
    'https://bkimg.cdn.bcebos.com/pic/b7fd5266d01609243f3fd098d70735fae6cd341e',
    'https://bkimg.cdn.bcebos.com/pic/86d6277f9e2f0708e6b45883ea24b899a801f284',
    'https://bkimg.cdn.bcebos.com/pic/48540923dd54564e01b7dcb0b0de9c82d0584f6c',
    'https://bkimg.cdn.bcebos.com/pic/3bf33a87e950352adbca52f35343fbf2b3118ba5',
    'https://bkimg.cdn.bcebos.com/pic/faedab64034f78f0d03760bb79310a55b3191cbd'
  ],

  huangpu_park: [
    'https://bkimg.cdn.bcebos.com/pic/ea85a945d214da7dcefca33e',
    'https://bkimg.cdn.bcebos.com/pic/9304c888b6f3dfcfa5c2720c',
    'https://bkimg.cdn.bcebos.com/pic/e61190ef76c6a7ef396b08dcfdfaaf51f2de66ff',
    'https://bkimg.cdn.bcebos.com/pic/3bc6f750c8e28b671138c221',
    'https://bkimg.cdn.bcebos.com/pic/808a27dbabbafb2bd0164eb1',
    'https://bkimg.cdn.bcebos.com/pic/a0ca99d68ea6c67406088b12',
    'https://bkimg.cdn.bcebos.com/pic/fd039245d688d43f290e85117d1ed21b0ff43ba9',
    'https://bkimg.cdn.bcebos.com/pic/0ff41bd5ad6eddc48c1a7bbc39dbb6fd536633fc'
  ],

  shaoxing_park: [
    'https://bkimg.cdn.bcebos.com/pic/77c6a7efce1b9d163538171cfddeb48f8d5464d4',
    'https://bkimg.cdn.bcebos.com/pic/7a8a1446747717446b63e593',
    'https://bkimg.cdn.bcebos.com/pic/55e736d12f2eb9389b50c4dd0a3b9235e5dde711c1d0'
  ],

  shanghai_museum: [
    'https://bkimg.cdn.bcebos.com/pic/8326cffc1e178a82b9018f9bd25b648da977391242cd',
    'https://bkimg.cdn.bcebos.com/pic/d0c8a786c9177f3e67095ede7c9a2cc79f3df9dcf891',
    'https://bkimg.cdn.bcebos.com/pic/562c11dfa9ec8a1363278fdbd35b868fa0ec08fa6acd',
    'https://bkimg.cdn.bcebos.com/pic/7c1ed21b0ef41bd5ad6e48e0768396cb39dbb6fd97d4',
    'https://bkimg.cdn.bcebos.com/pic/0df3d7ca7bcb0a46f21fbd2d4c3ae1246b600c3301d4',
    'https://bkimg.cdn.bcebos.com/pic/5fdf8db1cb1349548676d6b8504e9258d0094a85',
    'https://bkimg.cdn.bcebos.com/pic/d1a20cf431adcbef7609c3247ef739dda3cc7cd931c2',
    'https://bkimg.cdn.bcebos.com/pic/7a899e510fb30f2497a2d5dfce95d143ad4b0335'
  ],

  immersive_theater: [],

  // ==================== 静安区 (9) ====================
  jingansi: [
    'https://bkimg.cdn.bcebos.com/pic/30adcbef76094b36acaf853d129d6bd98d1000e9379b',
    'https://bkimg.cdn.bcebos.com/pic/5bafa40f4bfbfbed05f4344676f0f736afc31f5d',
    'https://bkimg.cdn.bcebos.com/pic/3bf33a87e950352ad17751e15443fbf2b3118bc0',
    'https://bkimg.cdn.bcebos.com/pic/6159252dd42a28343ecb41e25cb5c9ea14cebfed',
    'https://bkimg.cdn.bcebos.com/pic/5243fbf2b21193130f5f6f2164380cd791238d07',
    'https://bkimg.cdn.bcebos.com/pic/7a899e510fb30f24034a7c92c995d143ac4b034a',
    'https://bkimg.cdn.bcebos.com/pic/ac345982b2b7d0a22a7c7274ccef76094a369aa5',
    'https://bkimg.cdn.bcebos.com/pic/94cad1c8a786c9177f3ed25a246667cf3bc79f3df906'
  ],

  hudie_wan: [
    'https://bkimg.cdn.bcebos.com/pic/f7246b600c338744e9bf5a21590fd9f9d72aa070',
    'https://bkimg.cdn.bcebos.com/pic/42166d224f4a20a4770e01e291529822720ed086',
    'https://bkimg.cdn.bcebos.com/pic/562c11dfa9ec8a1342366ac5f603918fa0ecc0e2',
    'https://bkimg.cdn.bcebos.com/pic/d1a20cf431adcbeff70db9fcacaf2edda3cc9f0b'
  ],

  zhangyuan: [
    'https://bkimg.cdn.bcebos.com/pic/64380cd7912397dda144c789b1d7a5b7d0a20df429ba',
    'https://bkimg.cdn.bcebos.com/pic/342ac65c10385343fbf20e831e4ba77eca8065382242',
    'https://bkimg.cdn.bcebos.com/pic/8cb1cb1349540923dd54ee594204c609b3de9c82e3dd',
    'https://bkimg.cdn.bcebos.com/pic/1e30e924b899a9014c085a18cdc91d7b02087bf45fd2'
  ],

  sihang: [
    'https://bkimg.cdn.bcebos.com/pic/267f9e2f070828381f30b66319cfbe014c086e065b37',
    'https://bkimg.cdn.bcebos.com/pic/d0c8a786c9177f3e67095ede7c9a2cc79f3df9dcf891',
    'https://bkimg.cdn.bcebos.com/pic/908fa0ec08fa513d26971931e53e42fbb2fb4216739a',
    'https://bkimg.cdn.bcebos.com/pic/2e2eb9389b504fc2d56211de3d8ef01190ef77c6c796',
    'https://bkimg.cdn.bcebos.com/pic/32fa828ba61ea8d3fd1f80df4f59274e251f94caf296',
    'https://bkimg.cdn.bcebos.com/pic/279759ee3d6d55fbb2fb07fab571584a20a4472377e9',
    'https://bkimg.cdn.bcebos.com/pic/77094b36acaf2edda3ccfa35554316e93901203f35e9',
    'https://bkimg.cdn.bcebos.com/pic/5d6034a85edf8db1cb13e4b8d170ca54564e9358dee9'
  ],

  exhibition_center: [
    'https://bkimg.cdn.bcebos.com/pic/dcc451da81cb39dbb6fd39a6864e1e24ab18962b9ab1',
    'https://bkimg.cdn.bcebos.com/pic/d53f8794a4c27d1ed21b537a478cba6eddc451da924e',
    'https://bkimg.cdn.bcebos.com/pic/4afbfbedab64034f78f077b8f39a6e310a55b319b74e',
    'https://bkimg.cdn.bcebos.com/pic/ac6eddc451da81cb39dbdc4c043ec7160924aa189ba0',
    'https://bkimg.cdn.bcebos.com/pic/203fb80e7bec54e736d13e9fef608c504fc2d4623ca0',
    'https://bkimg.cdn.bcebos.com/pic/0b7b02087bf40ad162d94762017406dfa9ec8b1360a3',
    'https://bkimg.cdn.bcebos.com/pic/f703738da9773912b31b300a97409118367adab4441c',
    'https://bkimg.cdn.bcebos.com/pic/9345d688d43f8794a4c21ca3844319f41bd5ac6e8cbc'
  ],

  moller_villa: [
    'https://bkimg.cdn.bcebos.com/pic/ac6eddc451da81cb39dbc5731f3ec7160924ab189b4f',
    'https://bkimg.cdn.bcebos.com/pic/6609c93d70cf3bc79f3da2709c58ada1cd11738bfcad',
    'https://bkimg.cdn.bcebos.com/pic/7a899e510fb30f2442a7589f85cdc643ad4bd013a5ad',
    'https://bkimg.cdn.bcebos.com/pic/4ec2d5628535e5dde711b2543b9eb0efce1b9c16c4ba',
    'https://bkimg.cdn.bcebos.com/pic/dcc451da81cb39dbb6fd26dd9d4e1e24ab18962b9aba',
    'https://bkimg.cdn.bcebos.com/pic/fd039245d688d43f8794cd623046c51b0ef41bd58d51',
    'https://bkimg.cdn.bcebos.com/pic/d53f8794a4c27d1ed21b6240568dba6eddc450da92a5',
    'https://bkimg.cdn.bcebos.com/pic/d833c895d143ad4bd113f544cf5a4dafa40f4afba8a5'
  ],

  ershida: [
    'https://bkimg.cdn.bcebos.com/pic/6609c93d70cf3bc79f3d004b7e51ada1cd11728bfc40',
    'https://bkimg.cdn.bcebos.com/pic/9d82d158ccbf6c81800afb4e136fa63533fa828bea41',
    'https://bkimg.cdn.bcebos.com/pic/d009b3de9c82d158ccbf8c0c2f5b0ed8bc3eb135e476',
    'https://bkimg.cdn.bcebos.com/pic/d043ad4bd11373f082027c3e0b5e5cfbfbedab64ae4b'
  ],

  suhewan: [],

  fotografiska: [],

  // ==================== 虹口区 (13) ====================
  duolun: [
    'https://bkimg.cdn.bcebos.com/pic/d62a6059252dd42a84f4abfc043b5bb5c8eab8ec',
    'https://bkimg.cdn.bcebos.com/pic/b3f6cea27e36db9ecaefd053',
    'https://bkimg.cdn.bcebos.com/pic/a1ad16fa63fccca458ee9052',
    'https://bkimg.cdn.bcebos.com/pic/7ab514d1441918e0562c8451',
    'https://bkimg.cdn.bcebos.com/pic/ae10edde274f666795ee3751',
    'https://bkimg.cdn.bcebos.com/pic/54baacfb7bd487114e4aea53'
  ],

  luxun_park: [
    'https://bkimg.cdn.bcebos.com/pic/9213b07eca80653866547e6498dda144ad34820f',
    'https://bkimg.cdn.bcebos.com/pic/bba1cd11728b4710b9120cee2996d4fdfc03924585c2',
    'https://bkimg.cdn.bcebos.com/pic/a6efce1b9d16fdfaaf51d9b7f8d79b5494eef01fcd68',
    'https://bkimg.cdn.bcebos.com/pic/dc54564e9258d109b3dedceb9d00dbbf6c81800ae768',
    'https://bkimg.cdn.bcebos.com/pic/8694a4c27d1ed21b0ef4cbc74736cac451da81cb91c2'
  ],

  jewish: [
    'https://bkimg.cdn.bcebos.com/pic/3b292df5e0fe9925bc3107b611f349df8db1ca13db98',
    'https://bkimg.cdn.bcebos.com/pic/728da9773912b31bb05134c8a243217adab44bed4b84',
    'https://bkimg.cdn.bcebos.com/pic/fd039245d688d43f8794350c5845c51b0ef41ad58d80',
    'https://bkimg.cdn.bcebos.com/pic/adaf2edda3cc7cd98d103d3a1d5a363fb80e7aec3b87',
    'https://bkimg.cdn.bcebos.com/pic/960a304e251f95cad1c82f12de4b683e6709c93df459',
    'https://bkimg.cdn.bcebos.com/pic/908fa0ec08fa513d2697aa29183642fbb2fb4216738a',
    'https://bkimg.cdn.bcebos.com/pic/d53f8794a4c27d1ed21b9a3c3e8eba6eddc450da928a',
    'https://bkimg.cdn.bcebos.com/pic/267f9e2f070828381f3032ec9dc2be014c086f065b8d'
  ],

  post_museum: [
    'https://bkimg.cdn.bcebos.com/pic/f3d3572c11dfa9ec8a13e30ef281e003918fa0ec6bd2',
    'https://bkimg.cdn.bcebos.com/pic/377adab44aed2e738bd4730db058b68b87d6277f4cc2',
    'https://bkimg.cdn.bcebos.com/pic/64380cd7912397dda144b6206edba5b7d0a20cf429c4',
    'https://bkimg.cdn.bcebos.com/pic/e824b899a9014c086e06d3873d2215087bf40ad15ec5',
    'https://bkimg.cdn.bcebos.com/pic/9358d109b3de9c82d1587b69bbd0970a19d8bd3ee581',
    'https://bkimg.cdn.bcebos.com/pic/0d338744ebf81a4c510f25e8e0737759252dd42a08c2',
    'https://bkimg.cdn.bcebos.com/pic/b3119313b07eca8065381bc5a67a80dda144ad3425c2',
    'https://bkimg.cdn.bcebos.com/pic/cdbf6c81800a19d8bc3eed2604a3958ba61ea8d3e8c5'
  ],

  jinchaonong: [
    'https://bkimg.cdn.bcebos.com/pic/d009b3de9c82d158ccbf1f479c580ed8bc3eb035e4b1',
    'https://bkimg.cdn.bcebos.com/pic/cc11728b4710b912c8fcbf30f0a1eb039245d78884f3'
  ],

  hebin_building: [
    'https://bkimg.cdn.bcebos.com/pic/d439b6003af33a87e950a4b7750c07385343fbf21f47',
    'https://bkimg.cdn.bcebos.com/pic/377adab44aed2e738bd40226c158b68b87d6277f4c3d',
    'https://bkimg.cdn.bcebos.com/pic/37d3d539b6003af33a87146a7373d15c10385343183d',
    'https://bkimg.cdn.bcebos.com/pic/64380cd7912397dda144a1081fdba5b7d0a20cf4293c'
  ],

  shanghai_tower_hotel: [],

  zhapu_road: [
    'https://bkimg.cdn.bcebos.com/pic/faedab64034f78f062aff59a7e310a55b3191c36',
    'https://bkimg.cdn.bcebos.com/pic/a992e31fff507639304e15bd',
    'https://bkimg.cdn.bcebos.com/pic/00a82701ad89645d7aec2c2f',
    'https://bkimg.cdn.bcebos.com/pic/e6508eefe38c46dcce1b3edb',
    'https://bkimg.cdn.bcebos.com/pic/77094b36acaf2edd2b609a08841001e9380193ba',
    'https://bkimg.cdn.bcebos.com/pic/35e940df25e52a20495403ad',
    'https://bkimg.cdn.bcebos.com/pic/fd428c450ef1350c8794738a'
  ],

  bajin_lib: [
    'https://bkimg.cdn.bcebos.com/pic/a686c9177f3e6709c93d007e0f9d883df8dcd000ffa2',
    'https://bkimg.cdn.bcebos.com/pic/2cf5e0fe9925bc315c6079576a859ab1cb134854daf0'
  ],

  zuolian: [
    'https://bkimg.cdn.bcebos.com/pic/8c1001e93901213fb80ed5c8e2ab21d12f2eb9383fd8',
    'https://bkimg.cdn.bcebos.com/pic/adaf2edda3cc7cd9bf29448b3b01213fb80e915f',
    'https://bkimg.cdn.bcebos.com/pic/7c1ed21b0ef41bd5c88eb3a553da81cb38db3d85',
    'https://bkimg.cdn.bcebos.com/pic/902397dda144ad34eb1303dddaa20cf431ad8538',
    'https://bkimg.cdn.bcebos.com/pic/fd039245d688d43f879412b67d44c51b0ef41bd58d67',
    'https://bkimg.cdn.bcebos.com/pic/63d0f703918fa0ec08fa474826cd4eee3d6d55fb6d66',
    'https://bkimg.cdn.bcebos.com/pic/34fae6cd7b899e510fb3c35042fdce33c895d143a767',
    'https://bkimg.cdn.bcebos.com/pic/b21bb051f8198618367a29c04ab739738bd4b31c4866'
  ],

  deling_apartment: [
    'https://bkimg.cdn.bcebos.com/pic/a8ec8a13632762d0f703f69c0cb51ffa513d269768c4',
    'https://bkimg.cdn.bcebos.com/pic/7af40ad162d9f2d3572c70cc05b59d13632762d066c4',
    'https://bkimg.cdn.bcebos.com/pic/96dda144ad345982b2b779b1a0ad26adcbef76092ec4'
  ],

  '1933': [
    'https://bkimg.cdn.bcebos.com/pic/91ef76c6a7efce1b9d1602bcda07e4deb48f8c54cf34',
    'https://bkimg.cdn.bcebos.com/pic/f6428f8f34818ecc513d9281',
    'https://bkimg.cdn.bcebos.com/pic/0ff41bd5ad6eddc47b84250130dbb6fd536633ec',
    'https://bkimg.cdn.bcebos.com/pic/54baacfbd47ae6174f4aea87',
    'https://bkimg.cdn.bcebos.com/pic/4e0b3ea4dd4c82c29052ee82',
    'https://bkimg.cdn.bcebos.com/pic/eab9044cfc7552ccd72afc95',
    'https://bkimg.cdn.bcebos.com/pic/d019d2bf654f0c3f18d81f20',
    'https://bkimg.cdn.bcebos.com/pic/ae10edde4486016194ee37e4'
  ],

  beiwaitan: [
    'https://bkimg.cdn.bcebos.com/pic/267f9e2f070828381f301ba6b6c0be014c086e065b75',
    'https://bkimg.cdn.bcebos.com/pic/e7cd7b899e510fb313928b36d833c895d0430c83',
    'https://bkimg.cdn.bcebos.com/pic/09fa513d269759ee9e3eda66b3fb43166d22df35',
    'https://bkimg.cdn.bcebos.com/pic/aec379310a55b31980a638d842a98226cffc173b'
  ],

  // ==================== 浦东新区 (7) ====================
  dongfangmingzhu: [
    'https://bkimg.cdn.bcebos.com/pic/0df431adcbef7609c9825db22fdda3cc7cd99e16',
    'https://bkimg.cdn.bcebos.com/pic/d52a2834349b033bee1c5a4018ce36d3d439bd90',
    'https://bkimg.cdn.bcebos.com/pic/4afbfbedab64034f2d30649ca2c379310b551dae',
    'https://bkimg.cdn.bcebos.com/pic/ac345982b2b7d0a2c3eba507c6ef76094b369a0e',
    'https://bkimg.cdn.bcebos.com/pic/a8014c086e061d95752596a276f40ad163d9cacd',
    'https://bkimg.cdn.bcebos.com/pic/4bed2e738bd4b31cf63735218ad6277f9e2ff825',
    'https://bkimg.cdn.bcebos.com/pic/d1a20cf431adcbefa416df9ca1af2edda3cc9f0e',
    'https://bkimg.cdn.bcebos.com/pic/6f061d950a7b0208faaa9e7b6fd9f2d3562cc8cd',
    'https://bkimg.cdn.bcebos.com/pic/2e2eb9389b504fc230ea169fe8dde71191ef6df7'
  ],
  shanghai_center: [
    'https://bkimg.cdn.bcebos.com/pic/d1a20cf431adcbef7609e2c31dfc39dda3cc7dd931e0',
    'https://bkimg.cdn.bcebos.com/pic/7aec54e736d12f2eb9383439f591c2628535e5ddc214',
    'https://bkimg.cdn.bcebos.com/pic/4e4a20a4462309f79052cf16be5a1bf3d7ca7bcb7820',
    'https://bkimg.cdn.bcebos.com/pic/a2cc7cd98d1001e93901b70b745a6cec54e736d13920',
    'https://bkimg.cdn.bcebos.com/pic/9a504fc2d5628535e5dd45245cbb61c6a7efce1bc523',
    'https://bkimg.cdn.bcebos.com/pic/342ac65c10385343fbf2fc976848a77eca806538224b',
    'https://bkimg.cdn.bcebos.com/pic/9825bc315c6034a85edf053730485e540923dd54d84b',
    'https://bkimg.cdn.bcebos.com/pic/faf2b2119313b07eca80e402c083862397dda1442626',
    'https://bkimg.cdn.bcebos.com/pic/86d6277f9e2f0708283851825877af99a9014d0854af'
  ],
  disney: [
    'https://bkimg.cdn.bcebos.com/pic/d01373f082025aafa40fa8720fb5bc64034f78f0ac4b',
    'https://bkimg.cdn.bcebos.com/pic/d6ca7bcb0a46f21fbe097223e47d7c600c3387440030',
    'https://bkimg.cdn.bcebos.com/pic/1b4c510fd9f9d72a605911ded6733f34349b023b0de5'
  ],
  kejiguan: [
    'https://bkimg.cdn.bcebos.com/pic/b7003af33a87e950352a8189ee644443fbf2b3111e9b'
  ],
  zhonghuayishugong: [
    'https://bkimg.cdn.bcebos.com/pic/d1a20cf431adcbef76094b3611a5b084b4cc7cd98d1030cd',
    'https://bkimg.cdn.bcebos.com/pic/5366d0160924ab18972b1a11cda1f1cd7b899e519ddb',
    'https://bkimg.cdn.bcebos.com/pic/b21bb051f8198618367a21a2b2b639738bd4b31c48da',
    'https://bkimg.cdn.bcebos.com/pic/b151f8198618367adab4b6fbd6289cd4b31c87014fda',
    'https://bkimg.cdn.bcebos.com/pic/728da9773912b31bb051000f7e43217adab44aed4bda',
    'https://bkimg.cdn.bcebos.com/pic/f2deb48f8c5494eef01ff98695a4f7fe9925bd31d0a8',
    'https://bkimg.cdn.bcebos.com/pic/8d5494eef01f3a292df525512174ab315c6035a8d6a8',
    'https://bkimg.cdn.bcebos.com/pic/95eef01f3a292df5e0fe5f8a04604b6034a85fdfd5a8'
  ],
  dongwuyuan: [
    'https://bkimg.cdn.bcebos.com/pic/060828381f30e924b89946ac5f5379061d950b7b59a0',
    'https://bkimg.cdn.bcebos.com/pic/8435e5dde71190ef76c6f941dd408a16fdfaae51caa0',
    'https://bkimg.cdn.bcebos.com/pic/9f2f070828381f30e9245634ba5a5b086e061c955aa0',
    'https://bkimg.cdn.bcebos.com/pic/7af40ad162d9f2d3572ceb72bab79d13632763d066a0',
    'https://bkimg.cdn.bcebos.com/pic/267f9e2f070828381f300489abc2be014c086f065ba0',
    'https://bkimg.cdn.bcebos.com/pic/86d6277f9e2f07082838f39dfa7faf99a9014d0854a0',
    'https://bkimg.cdn.bcebos.com/pic/908fa0ec08fa513d26975c402e3642fbb2fb421673a0',
    'https://bkimg.cdn.bcebos.com/pic/e824b899a9014c086e06ef38192015087bf40bd15ea0'
  ],
  xinchang_guzhen: [
    'https://bkimg.cdn.bcebos.com/pic/b8389b504fc2d5628535cab3d94b87ef76c6a7efc661',
    'https://bkimg.cdn.bcebos.com/pic/8c1001e93901213fb80e5d826abd21d12f2eb9383f61',
    'https://bkimg.cdn.bcebos.com/pic/2e2eb9389b504fc2d562ab5bdb87f01190ef76c6c761',
    'https://bkimg.cdn.bcebos.com/pic/91ef76c6a7efce1b9d16cb94910be4deb48f8c54cf61',
    'https://bkimg.cdn.bcebos.com/pic/48540923dd54564e92589d678d848b82d158ccbfe161',
    'https://bkimg.cdn.bcebos.com/pic/ca1349540923dd54564ed936ef53a4de9c82d158e261',
    'https://bkimg.cdn.bcebos.com/pic/d872d695e9433302d1135eee',
    'https://bkimg.cdn.bcebos.com/pic/834344af9a0fd5b2fbed50ee'
  ],

  // ==================== 徐汇区 (6) ====================
  longhuasi: [
    'https://bkimg.cdn.bcebos.com/pic/b3119313b07eca80ca0ebdcf962397dda144838b',
    'https://bkimg.cdn.bcebos.com/pic/e1fe9925bc315c60d8bbf6c78ab1cb13495477e8',
    'https://bkimg.cdn.bcebos.com/pic/9213b07eca8065380651c63890dda144ad348265',
    'https://bkimg.cdn.bcebos.com/pic/8c1001e93901213fb80e57306cbe21d12f2eb8383f9c',
    'https://bkimg.cdn.bcebos.com/pic/b58f8c5494eef01f3a296929d8a78e25bc315d60d79c',
    'https://bkimg.cdn.bcebos.com/pic/71cf3bc79f3df8dcd100cb7df548658b4710b812829c',
    'https://bkimg.cdn.bcebos.com/pic/a8773912b31bb051f81901ea5c23cdb44aed2f734ae5',
    'https://bkimg.cdn.bcebos.com/pic/267f9e2f070828381f307fd6d2c0be014c086f065be5'
  ],
  xujiahui_tang: [
    'https://bkimg.cdn.bcebos.com/pic/b58f8c5494eef01f3a29405defa28e25bc315d60d7ad',
    'https://bkimg.cdn.bcebos.com/pic/8601a18b87d6277f9e2fe9af27640830e924b99956ad',
    'https://bkimg.cdn.bcebos.com/pic/9a504fc2d5628535e5ddbc3983b361c6a7efce1bc52d',
    'https://bkimg.cdn.bcebos.com/pic/aec379310a55b319ebc4651453f29526cffc1e17b905',
    'https://bkimg.cdn.bcebos.com/pic/5bafa40f4bfbfbedab64c91e68abe036afc37931b105',
    'https://bkimg.cdn.bcebos.com/pic/a50f4bfbfbedab64034fb3a1e76db8c379310a55b005',
    'https://bkimg.cdn.bcebos.com/pic/faedab64034f78f0f7366292696a1d55b319ebc4b605',
    'https://bkimg.cdn.bcebos.com/pic/4afbfbedab64034f78f03b67bf986e310a55b319b705'
  ],
  wukang_building: [
    'https://bkimg.cdn.bcebos.com/pic/fd039245d688d43fa456037b781ed21b0ff43bbf',
    'https://bkimg.cdn.bcebos.com/pic/8694a4c27d1ed21b2928bc6ca86eddc450da3f51',
    'https://bkimg.cdn.bcebos.com/pic/faf2b2119313b07e73adcd8109d7912397dd8c23',
    'https://bkimg.cdn.bcebos.com/pic/f603918fa0ec08fad2138e2e5cee3d6d55fbda2c',
    'https://bkimg.cdn.bcebos.com/pic/29381f30e924b899d9f9ebb16b061d950b7bf676',
    'https://bkimg.cdn.bcebos.com/pic/ca1349540923dd54a08435e1d409b3de9d824840',
    'https://bkimg.cdn.bcebos.com/pic/3bf33a87e950352a745ab8815643fbf2b2118b04',
    'https://bkimg.cdn.bcebos.com/pic/7aec54e736d12f2e63f938e94ac2d562843568bf'
  ],
  tushanwan: [
    'https://bkimg.cdn.bcebos.com/pic/267f9e2f070828381f302fdb82c0be014c086f065bf0',
    'https://bkimg.cdn.bcebos.com/pic/279759ee3d6d55fbb2fba1e9577b584a20a4472377f0',
    'https://bkimg.cdn.bcebos.com/pic/caef76094b36acaf2edd81cd47809a1001e9390136f3',
    'https://bkimg.cdn.bcebos.com/pic/77094b36acaf2edda3cc5fd8b64916e93901213f35f3',
    'https://bkimg.cdn.bcebos.com/pic/2fdda3cc7cd98d1001e91f001a66af0e7bec54e73af3',
    'https://bkimg.cdn.bcebos.com/pic/a2cc7cd98d1001e93901063e83576cec54e736d139f3',
    'https://bkimg.cdn.bcebos.com/pic/7af40ad162d9f2d3572c78580da59d13632762d06678',
    'https://bkimg.cdn.bcebos.com/pic/377adab44aed2e738bd40ee3bd58b68b87d6267f4cf0'
  ],
  longmeishuguan: [
    'https://bkimg.cdn.bcebos.com/pic/b7003af33a87e950352a525ca1684443fbf2b2111ef8'
  ],
  baidai_xiaolou: [
    'https://bkimg.cdn.bcebos.com/pic/aa64034f78f0f736afc37e5cdd0ca419ebc4b745b56f',
    'https://bkimg.cdn.bcebos.com/pic/8b13632762d0f703918f9d80dfa3463d269759ee6f6f',
    'https://bkimg.cdn.bcebos.com/pic/42166d224f4a20a44623439b470b8f22720e0cf37a6f',
    'https://bkimg.cdn.bcebos.com/pic/7acb0a46f21fbe096b63a348bc391b338744ebf8076f',
    'https://bkimg.cdn.bcebos.com/pic/6a600c338744ebf81a4c0a630ea0c02a6059252d096f'
  ],

  // ==================== 长宁区 (5) ====================
  yuyuan_road: [],
  zhongshan_park: [
    'https://bkimg.cdn.bcebos.com/pic/09bb4f3dc4e162a33c6d9761',
    'https://bkimg.cdn.bcebos.com/pic/27d647eed91b6eb6b3fb9561',
    'https://bkimg.cdn.bcebos.com/pic/3c2c4bfb548d785b6c22eb61',
    'https://bkimg.cdn.bcebos.com/pic/b3ba5d168554740721a4e961',
    'https://bkimg.cdn.bcebos.com/pic/08b68e52765449430df3e361',
    'https://bkimg.cdn.bcebos.com/pic/99636c0efc85ec877acbe161',
    'https://bkimg.cdn.bcebos.com/pic/0db2c9ca89bd310bf31fe761',
    'https://bkimg.cdn.bcebos.com/pic/f35ea0099d15cd696a60fb61'
  ],
  shanghai_zoo: [
    'https://bkimg.cdn.bcebos.com/pic/6a63f6246b600c33874435eb481b460fd9f9d72a0bc2',
    'https://bkimg.cdn.bcebos.com/pic/e4dde71190ef76c6a7efee31cf41eafaaf51f3dec928',
    'https://bkimg.cdn.bcebos.com/pic/91ef76c6a7efce1b9d16dfd0fd06e4deb48f8c54cf28',
    'https://bkimg.cdn.bcebos.com/pic/77c6a7efce1b9d16fdfa8c7ba189a38f8c5494eece28',
    'https://bkimg.cdn.bcebos.com/pic/5366d0160924ab18972ba03567adf1cd7b899e519d20',
    'https://bkimg.cdn.bcebos.com/pic/aa18972bd40735fae6cd0cbbcc0618b30f2442a7a220',
    'https://bkimg.cdn.bcebos.com/pic/d1160924ab18972bd40740c8b49a6c899e510fb39c20',
    'https://bkimg.cdn.bcebos.com/pic/962bd40735fae6cd7b89e6635de4182442a7d933a120'
  ],
  shangsheng_xinsuo: [],
  xinhua_road: [],

  // ==================== 普陀区 (5) ====================
  yufochansi: [
    'https://bkimg.cdn.bcebos.com/pic/48540923dd54564eb066a86cbbde9c82d1584f67',
    'https://bkimg.cdn.bcebos.com/pic/4ec2d5628535e5dd3a86338a7ec6a7efce1b6239',
    'https://bkimg.cdn.bcebos.com/pic/738b4710b912c8fcde236798f4039245d7882196',
    'https://bkimg.cdn.bcebos.com/pic/574e9258d109b3de03f12e08c4bf6c81800a4c00',
    'https://bkimg.cdn.bcebos.com/pic/574e9258d109b3de95b043a6c7bf6c81810a4cf4',
    'https://bkimg.cdn.bcebos.com/pic/a71ea8d3fd1f4134886cba6f2e1f95cad1c85e43'
  ],
  m50: [
    'https://bkimg.cdn.bcebos.com/pic/a044ad345982b2b77b48b2ad37adcbef77099b80'
  ],
  tianan_qianshu: [
    'https://bkimg.cdn.bcebos.com/pic/f2deb48f8c5494eef01f1a9c76acf7fe9925bd31d0a7',
    'https://bkimg.cdn.bcebos.com/pic/e1fe9925bc315c6034a8796ad6e8dc1349540823d9a7',
    'https://bkimg.cdn.bcebos.com/pic/ae51f3deb48f8c5494eeefaa61703af5e0fe9825d1a7',
    'https://bkimg.cdn.bcebos.com/pic/9c16fdfaaf51f3deb48f91e1cfb7e71f3a292cf5d3a7',
    'https://bkimg.cdn.bcebos.com/pic/fcfaaf51f3deb48f8c548a5bab462d292df5e1fed2a7',
    'https://bkimg.cdn.bcebos.com/pic/8d5494eef01f3a292df5c24bc27cab315c6035a8d6a7',
    'https://bkimg.cdn.bcebos.com/pic/b58f8c5494eef01f3a290c40bba78e25bc315d60d7a7'
  ],
  changfeng_park: [
    'https://bkimg.cdn.bcebos.com/pic/5d212aa8b27811f8ca130c56',
    'https://bkimg.cdn.bcebos.com/pic/5f9e93b125b4d51d08230256',
    'https://bkimg.cdn.bcebos.com/pic/ca525754f984411d574e0056',
    'https://bkimg.cdn.bcebos.com/pic/a08b87d6277f9e2f8570bdb31f30e924b999f3c0',
    'https://bkimg.cdn.bcebos.com/pic/b90e7bec54e736d12f2e106f241c58c2d5628535c30d',
    'https://bkimg.cdn.bcebos.com/pic/37d12f2eb9389b504fc279353a79f2dde71190efc00d',
    'https://bkimg.cdn.bcebos.com/pic/203fb80e7bec54e736d1877906748c504fc2d5623c0d',
    'https://bkimg.cdn.bcebos.com/pic/d4628535e5dde71190efc79118a3d91b9d16fdfacb0d'
  ],
  zhenru_si: [
    'https://bkimg.cdn.bcebos.com/pic/a9d3fd1f4134970ac011e40b91cad1c8a7865db0',
    'https://bkimg.cdn.bcebos.com/pic/b999a9014c086e06479bcb6f06087bf40ad1cbe7',
    'https://bkimg.cdn.bcebos.com/pic/7a899e510fb30f2461021927cc95d143ad4b037d',
    'https://bkimg.cdn.bcebos.com/pic/2fdda3cc7cd98d10b756f915253fb80e7bec9010',
    'https://bkimg.cdn.bcebos.com/pic/0bd162d9f2d3572c3229541b8d13632763d0c32a',
    'https://bkimg.cdn.bcebos.com/pic/ae51f3deb48f8c545a85310b3e292df5e0fe7f44'
  ],

  // ==================== 杨浦区 (5) ====================
  yangpu_lib: [
    'https://bkimg.cdn.bcebos.com/pic/8326cffc1e178a82b9019772fa5f648da97738124296',
    'https://bkimg.cdn.bcebos.com/pic/0e2442a7d933c895d1436a02db4f64f082025aafaa0c',
    'https://bkimg.cdn.bcebos.com/pic/ac4bd11373f082025aaf6eec47a7ecedab64024fad96',
    'https://bkimg.cdn.bcebos.com/pic/8b13632762d0f703918fa80804a6463d269758ee6fe9',
    'https://bkimg.cdn.bcebos.com/pic/d833c895d143ad4bd113b4118e5e4dafa40f4afba894',
    'https://bkimg.cdn.bcebos.com/pic/359b033b5bb5c9ea15ce0437d965a1003af33b8715e9',
    'https://bkimg.cdn.bcebos.com/pic/0b7b02087bf40ad162d90d335b7006dfa9ec8b136094',
    'https://bkimg.cdn.bcebos.com/pic/902397dda144ad345982fa57dcfe1bf431adcaef2f95'
  ],
  gongqing_park: [
    'https://bkimg.cdn.bcebos.com/pic/a1ec08fa513d2697bd5f73ab55fbb2fb4216d8bc',
    'https://bkimg.cdn.bcebos.com/pic/060828381f30e92475fce7c74c086e061c95f7e8',
    'https://bkimg.cdn.bcebos.com/pic/08f790529822720efd96990c7bcb0a46f31fabe8',
    'https://bkimg.cdn.bcebos.com/pic/500fd9f9d72a6059274b9aec2834349b023bbae8'
  ],
  lvzhiqiu: [],
  guoge_zhan: [
    'https://bkimg.cdn.bcebos.com/pic/5fdf8db1cb13495409234ca3a0178558d109b2dedcf8',
    'https://bkimg.cdn.bcebos.com/pic/8cb1cb1349540923dd54c4b96401c609b3de9d82e3f8',
    'https://bkimg.cdn.bcebos.com/pic/48540923dd54564e925845fe45878b82d158cdbfe1f8',
    'https://bkimg.cdn.bcebos.com/pic/bd315c6034a85edf8db145e4bf0d1e23dd54574edff8',
    'https://bkimg.cdn.bcebos.com/pic/574e9258d109b3de9c8246af3ae67b81800a18d8e6f8',
    'https://bkimg.cdn.bcebos.com/pic/5d6034a85edf8db1cb13c6a3ff7aca54564e9358def8',
    'https://bkimg.cdn.bcebos.com/pic/ca1349540923dd54564e01af2750a4de9c82d058e2f8',
    'https://bkimg.cdn.bcebos.com/pic/9825bc315c6034a85edf00463d4a5e540923dc54d8f8'
  ],
  daxue_road: [],

  // ==================== 松江区 (7) ====================
  guangfulin: [
    'https://bkimg.cdn.bcebos.com/pic/cdbf6c81800a19d8bc3e781ff9a1958ba61ea8d3e82f',
    'https://bkimg.cdn.bcebos.com/pic/241f95cad1c8a786c917a814ad52de3d70cf3bc7fa2f',
    'https://bkimg.cdn.bcebos.com/pic/b90e7bec54e736d12f2e2715510b58c2d5628535c320',
    'https://bkimg.cdn.bcebos.com/pic/a08b87d6277f9e2f07081c16d56bfe24b899a9015523',
    'https://bkimg.cdn.bcebos.com/pic/9c16fdfaaf51f3deb48fbdced3b4e71f3a292df5d35d',
    'https://bkimg.cdn.bcebos.com/pic/a6efce1b9d16fdfaaf51dc44f3d59b5494eef01fcd5d',
    'https://bkimg.cdn.bcebos.com/pic/18d8bc3eb13533fa828b6d066388ea1f4134970aeddd',
    'https://bkimg.cdn.bcebos.com/pic/810a19d8bc3eb13533fa48936d45bfd3fd1f4134eedd'
  ],
  sheshan: [
    'https://bkimg.cdn.bcebos.com/pic/2e2eb9389b504fc2937bbd39e2dde71190ef6de1',
    'https://bkimg.cdn.bcebos.com/pic/574e9258d109b3defb9be954cbbf6c81800a4ce1',
    'https://bkimg.cdn.bcebos.com/pic/d043ad4bd11373f02d4562a3a30f4bfbfbed0497',
    'https://bkimg.cdn.bcebos.com/pic/a1ec08fa513d2697282e876752fbb2fb4316d80f',
    'https://bkimg.cdn.bcebos.com/pic/7aec54e736d12f2e78f8215a48c2d5628535680f',
    'https://bkimg.cdn.bcebos.com/pic/d1a20cf431adcbefc748f03cabaf2edda3cc9f88',
    'https://bkimg.cdn.bcebos.com/pic/267f9e2f0708283847c0532ebf99a9014c08f13f'
  ],
  chenshan: [
    'https://bkimg.cdn.bcebos.com/pic/91529822720e0cf3d7ca2062c616e51fbe096b637c53',
    'https://bkimg.cdn.bcebos.com/pic/730e0cf3d7ca7bcb0a46afb672597c63f6246b600253',
    'https://bkimg.cdn.bcebos.com/pic/e61190ef76c6a7efce1b3abf31aab851f3deb48fc853',
    'https://bkimg.cdn.bcebos.com/pic/77094b36acaf2edda3ccee42414016e93901213f3545',
    'https://bkimg.cdn.bcebos.com/pic/dc54564e9258d109b3de5c191d08dbbf6c81800ae745',
    'https://bkimg.cdn.bcebos.com/pic/dbb44aed2e738bd4b31c93a545de90d6277f9e2f5353'
  ],
  fangtayuan: [
    'https://bkimg.cdn.bcebos.com/pic/1ad5ad6eddc451da81cbc5c675a54566d016092494df',
    'https://bkimg.cdn.bcebos.com/pic/aa64034f78f0f736afc3622fc90da419ebc4b745b5df',
    'https://bkimg.cdn.bcebos.com/pic/7c1ed21b0ef41bd56c94c90f51da81cb38db3d01',
    'https://bkimg.cdn.bcebos.com/pic/7dd98d1001e9390149c0acc57bec54e737d1960e',
    'https://bkimg.cdn.bcebos.com/pic/a686c9177f3e6709c93d91d1f89f883df8dcd100ffde',
    'https://bkimg.cdn.bcebos.com/pic/6609c93d70cf3bc79f3d1cc21258ada1cd11728bfcde',
    'https://bkimg.cdn.bcebos.com/pic/aec379310a55b319ebc4a85a80f19526cffc1e17b9de',
    'https://bkimg.cdn.bcebos.com/pic/11385343fbf2b2119313386009d872380cd7912320de'
  ],
  zuibaichi: [
    'https://bkimg.cdn.bcebos.com/pic/cc11728b4710b912c8fc45d5eaa7eb039245d68884dc',
    'https://bkimg.cdn.bcebos.com/pic/a8773912b31bb051f8194e191f20cdb44aed2e734af5',
    'https://bkimg.cdn.bcebos.com/pic/3c6d55fbb2fb43166d22ba4b09fe512309f7905275f5',
    'https://bkimg.cdn.bcebos.com/pic/00e93901213fb80e7bec68e61f8b382eb9389b503ef2',
    'https://bkimg.cdn.bcebos.com/pic/d058ccbf6c81800a19d8a9dccc6c24fa828ba71ee992',
    'https://bkimg.cdn.bcebos.com/pic/b03533fa828ba61ea8d3e6fd3c6d800a304e241ff392',
    'https://bkimg.cdn.bcebos.com/pic/1ad5ad6eddc451da81cb7b39cba44566d01608249492',
    'https://bkimg.cdn.bcebos.com/pic/83025aafa40f4bfbfbedf7867e166ff0f736aec3b292'
  ],
  huanlegu: [
    'https://bkimg.cdn.bcebos.com/pic/0bd162d9f2d3572ca78dcc1b8613632763d0c38e',
    'https://bkimg.cdn.bcebos.com/pic/b90e7bec54e736d12f2e8a48ae0958c2d5628535c360',
    'https://bkimg.cdn.bcebos.com/pic/2fdda3cc7cd98d1031d8054d2f3fb80e7bec90b9',
    'https://bkimg.cdn.bcebos.com/pic/fd039245d688d43f020f988e731ed21b0ef43b23',
    'https://bkimg.cdn.bcebos.com/pic/f11f3a292df5e0fed7a8807d526034a85edf721d',
    'https://bkimg.cdn.bcebos.com/pic/9e3df8dcd100baa1b7824ec74910b912c8fc2e1b',
    'https://bkimg.cdn.bcebos.com/pic/79f0f736afc37931a5a88f55e5c4b74542a9118d',
    'https://bkimg.cdn.bcebos.com/pic/08f790529822720ef8e9ea8675cb0a46f21faba3'
  ],
  shenkeng: [
    'https://bkimg.cdn.bcebos.com/pic/35a85edf8db1cb13db49f602d354564e92584bfb',
    'https://bkimg.cdn.bcebos.com/pic/1e30e924b899a9015dee902713950a7b0308f5cc',
    'https://bkimg.cdn.bcebos.com/pic/03087bf40ad162d9eaa2a80d1fdfa9ec8a13cd57',
    'https://bkimg.cdn.bcebos.com/pic/5243fbf2b2119313e8db35a16b380cd791238d03',
    'https://bkimg.cdn.bcebos.com/pic/ac4bd11373f08202b8d35b2e45fbfbedab641b5a',
    'https://bkimg.cdn.bcebos.com/pic/eaf81a4c510fd9f9965b9f782b2dd42a2834a457',
    'https://bkimg.cdn.bcebos.com/pic/7e3e6709c93d70cf3bc7087ff787c600baa1cd11fd34',
    'https://bkimg.cdn.bcebos.com/pic/c8177f3e6709c93d70cfad859066efdcd100baa1fe34'
  ],

  // ==================== 嘉定区 (5) ====================
  guyiyuan: [
    'https://bkimg.cdn.bcebos.com/pic/a8773912b31bb051f81962663b21cdb44aed2e734a73',
    'https://bkimg.cdn.bcebos.com/pic/f9dcd100baa1cd11728bd86fb449dffcc3cec3fd8773',
    'https://bkimg.cdn.bcebos.com/pic/b7fd5266d0160924ab182f55d95c22fae6cd7b899e70',
    'https://bkimg.cdn.bcebos.com/pic/0dd7912397dda144ad341ffdbfecc7a20cf431ad2873',
    'https://bkimg.cdn.bcebos.com/pic/d000baa1cd11728b4710196bc5a7d4cec3fdfc03867d',
    'https://bkimg.cdn.bcebos.com/pic/b7003af33a87e950352afe251d634443fbf2b2111e7d',
    'https://bkimg.cdn.bcebos.com/pic/11385343fbf2b21193138e04c7db72380cd79123207c'
  ],
  qiuxiapu: [],
  nanxiang_laojie: [
    'https://bkimg.cdn.bcebos.com/pic/9358d109b3de9c82d15880772ed8970a19d8bd3ee588',
    'https://bkimg.cdn.bcebos.com/pic/d31b0ef41bd5ad6eddc42a12c3922edbb6fd53669688',
    'https://bkimg.cdn.bcebos.com/pic/b21c8701a18b87d6277f24e745513f381f30e824578b',
    'https://bkimg.cdn.bcebos.com/pic/203fb80e7bec54e736d12262e3618c504fc2d5623c0c'
  ],
  zhouqiao_laojie: [
    'https://bkimg.cdn.bcebos.com/pic/9e3df8dcd100baa1cd11dc28ba49ae12c8fcc3ce8054',
    'https://bkimg.cdn.bcebos.com/pic/bba1cd11728b4710b912795f3e97d4fdfc0392458554',
    'https://bkimg.cdn.bcebos.com/pic/5366d0160924ab18972b1da4c8a3f1cd7b899e519d54',
    'https://bkimg.cdn.bcebos.com/pic/80cb39dbb6fd5266d016cf875641802bd40735fa9854',
    'https://bkimg.cdn.bcebos.com/pic/0824ab18972bd40735fa2d6e86d089510fb30f24a354',
    'https://bkimg.cdn.bcebos.com/pic/9345d688d43f8794a4c2c7bd2f4219f41bd5ad6e8c54',
    'https://bkimg.cdn.bcebos.com/pic/c9fcc3cec3fdfc039245602b29669094a4c27d1e8854',
    'https://bkimg.cdn.bcebos.com/pic/c2cec3fdfc039245d688639c7acdb3c27d1ed21b8f54'
  ],
  jiading_kongmiao: [
    'https://bkimg.cdn.bcebos.com/pic/b7fd5266d0160924ab18b0fe4a5e22fae6cd7a899e87',
    'https://bkimg.cdn.bcebos.com/pic/b151f8198618367adab41c37b02a9cd4b31c86014f9d',
    'https://bkimg.cdn.bcebos.com/pic/0df3d7ca7bcb0a46f21f32daf53ae1246b600d330184',
    'https://bkimg.cdn.bcebos.com/pic/2f738bd4b31c8701a18bdb03b926892f070829385186'
  ],

  // ==================== 宝山区 (6) ====================
  baoshan_si: [
    'https://bkimg.cdn.bcebos.com/pic/1899a23eceb929c7838b136e',
    'https://bkimg.cdn.bcebos.com/pic/060828381f30e92473b1ea2341086e061d95f78f',
    'https://bkimg.cdn.bcebos.com/pic/58af236d5370a8c64216946d',
    'https://bkimg.cdn.bcebos.com/pic/0862c35435a0b979d0090634'
  ],
  wusong_paotai: [
    'https://bkimg.cdn.bcebos.com/pic/3b292df5e0fe9925bc31b87ea8e749df8db1cb13dbc7',
    'https://bkimg.cdn.bcebos.com/pic/4afbfbedab64034f78f0d302178c6e310a55b319b72a',
    'https://bkimg.cdn.bcebos.com/pic/c9fcc3cec3fdfc039245c19748709094a4c27d1e88c7',
    'https://bkimg.cdn.bcebos.com/pic/b3119313b07eca806538bef70d6c80dda144ad3425d9',
    'https://bkimg.cdn.bcebos.com/pic/d439b6003af33a87e9509add531507385343faf21fe8'
  ],
  gucun_park: [
    'https://bkimg.cdn.bcebos.com/pic/2cf5e0fe9925bc315c60f4e89f869ab1cb134954da33',
    'https://bkimg.cdn.bcebos.com/pic/f11f3a292df5e0fe992502719d3923a85edf8db1d433',
    'https://bkimg.cdn.bcebos.com/pic/b58f8c5494eef01f3a2996b521a78e25bc315c60d733',
    'https://bkimg.cdn.bcebos.com/pic/e7cd7b899e510fb30f246c494660df95d143ac4ba6e8',
    'https://bkimg.cdn.bcebos.com/pic/cb8065380cd7912397dd139c32674e82b2b7d1a22a85',
    'https://bkimg.cdn.bcebos.com/pic/9213b07eca8065380cd721fb088eb644ad3458822485',
    'https://bkimg.cdn.bcebos.com/pic/64380cd7912397dda1441eecc6d1a5b7d0a20df42985',
    'https://bkimg.cdn.bcebos.com/pic/0dd7912397dda144ad34ed5a2de4c7a20cf430ad2885'
  ],
  songhu_kangzhan: [
    'https://bkimg.cdn.bcebos.com/pic/024f78f0f736afc3793145fc2353fcc4b74543a9b45a',
    'https://bkimg.cdn.bcebos.com/pic/79f0f736afc379310a55e3b07b8ea04543a98226bb5a',
    'https://bkimg.cdn.bcebos.com/pic/f603918fa0ec08fa513da13dc9a42a6d55fbb2fb6c5c',
    'https://bkimg.cdn.bcebos.com/pic/503d269759ee3d6d55fb3951d35c7a224f4a20a4705c',
    'https://bkimg.cdn.bcebos.com/pic/060828381f30e924b899dbabdc4279061d950a7b595c',
    'https://bkimg.cdn.bcebos.com/pic/472309f790529822720e995947806ccb0a46f21f7e5c',
    'https://bkimg.cdn.bcebos.com/pic/902397dda144ad345982760040e81bf431adcaef2fab',
    'https://bkimg.cdn.bcebos.com/pic/a6efce1b9d16fdfa9598a675b48f8c5495ee7bb0'
  ],
  boli_bowuguan: [
    'https://bkimg.cdn.bcebos.com/pic/7acb0a46f21fbe096b63070a50391b338744ebf80721',
    'https://bkimg.cdn.bcebos.com/pic/0d338744ebf81a4c510f21d7ec737759252dd42a0821',
    'https://bkimg.cdn.bcebos.com/pic/b7003af33a87e950352acc732b614443fbf2b2111e21',
    'https://bkimg.cdn.bcebos.com/pic/f2deb48f8c5494eef01f7a0616acf7fe9925bc31d021',
    'https://bkimg.cdn.bcebos.com/pic/9358d109b3de9c82d1589f9157d8970a19d8bc3ee52e'
  ],
  bandao1919: [
    'https://bkimg.cdn.bcebos.com/pic/902397dda144ad347c32fa14d0a20cf430ad8597'
  ],

  // ==================== 闵行区 (5) ====================
  qibao_guzhen: [
    'https://bkimg.cdn.bcebos.com/pic/dcc451da81cb39dbb6fd4c88734e1e24ab18962b9aef',
    'https://bkimg.cdn.bcebos.com/pic/09fa513d269759ee3d6d3f6102a354166d224f4a715a',
    'https://bkimg.cdn.bcebos.com/pic/09fa513d269759ee3d6d221511a354166d224e4a71ee',
    'https://bkimg.cdn.bcebos.com/pic/2e2eb9389b504fc2d5624cdb4685f01190ef77c6c7ee',
    'https://bkimg.cdn.bcebos.com/pic/500fd9f9d72a6059252da627ed6c239b033b5bb50ccf',
    'https://bkimg.cdn.bcebos.com/pic/b8389b504fc2d56285352f30444987ef76c6a6efc6ef',
    'https://bkimg.cdn.bcebos.com/pic/8644ebf81a4c510fd9f9b8a4a501322dd42a28340f4e',
    'https://bkimg.cdn.bcebos.com/pic/a2cc7cd98d1001e93901e1231a566cec54e736d139dc'
  ],
  zhaojialou: [
    'https://bkimg.cdn.bcebos.com/pic/03087bf40ad162d9f2d336a5ba8abeec8a1363276776',
    'https://bkimg.cdn.bcebos.com/pic/b7fd5266d0160924ab18c4f4a65222fae6cd7a899e9d',
    'https://bkimg.cdn.bcebos.com/pic/d01373f082025aafa40f2e2489b8bc64034f79f0ac9d',
    'https://bkimg.cdn.bcebos.com/pic/8c1001e93901213fb80e8b5320b221d12f2eb8383fbc',
    'https://bkimg.cdn.bcebos.com/pic/d043ad4bd11373f08202646b335a5cfbfbedaa64aeb0',
    'https://bkimg.cdn.bcebos.com/pic/5ab5c9ea15ce36d3d5397abe4ea62d87e950342a1bbd',
    'https://bkimg.cdn.bcebos.com/pic/cdbf6c81800a19d8bc3e4df6a4af958ba61ea9d3e8b0'
  ],
  hanxiang_shuiboyuan: [
    'https://bkimg.cdn.bcebos.com/pic/f603918fa0ec08fa513d60f788b92a6d55fbb2fb6c11',
    'https://bkimg.cdn.bcebos.com/pic/6c224f4a20a4462309f7c1324975650e0cf3d7ca7911',
    'https://bkimg.cdn.bcebos.com/pic/0b46f21fbe096b63f6243700dd649044ebf81a4c0611',
    'https://bkimg.cdn.bcebos.com/pic/7dd98d1001e93901213f2a6eaabb43e736d12f2e3811',
    'https://bkimg.cdn.bcebos.com/pic/55e736d12f2eb9389b50d6a204359235e5dde711c111',
    'https://bkimg.cdn.bcebos.com/pic/91ef76c6a7efce1b9d165e9a7e06e4deb48f8c54cf11',
    'https://bkimg.cdn.bcebos.com/pic/3b87e950352ac65c103825232aa5a5119313b07e1c11',
    'https://bkimg.cdn.bcebos.com/pic/dbb44aed2e738bd4b31ca21672dc90d6277f9e2f53c6'
  ],
  pujiang_jiaye: [
    'https://bkimg.cdn.bcebos.com/pic/d52a2834349b033b4284e7d81bce36d3d539bda7',
    'https://bkimg.cdn.bcebos.com/pic/8435e5dde71190ef39a28addc01b9d16fdfa6052',
    'https://bkimg.cdn.bcebos.com/pic/b812c8fcc3cec3fdfc0332f5c4dfc33f8794a5c289ae',
    'https://bkimg.cdn.bcebos.com/pic/728da9773912b31b7e3ad52b8818367adab4e15a'
  ],
  minhang_bowuguan: [
    'https://bkimg.cdn.bcebos.com/pic/96dda144ad345982532bae9603f431adcbef8415',
    'https://bkimg.cdn.bcebos.com/pic/9213b07eca8065380cd76c5dc584b644ad3459822471',
    'https://bkimg.cdn.bcebos.com/pic/cb8065380cd7912397dd5e3aff6d4e82b2b7d0a22a71',
    'https://bkimg.cdn.bcebos.com/pic/b17eca8065380cd7912369a3f31dba345982b2b72b71',
    'https://bkimg.cdn.bcebos.com/pic/cf1b9d16fdfaaf51f3de910dde0d83eef01f3a29cc72',
    'https://bkimg.cdn.bcebos.com/pic/203fb80e7bec54e736d1924913698c504fc2d5623c10',
    'https://bkimg.cdn.bcebos.com/pic/55e736d12f2eb9389b508faf7f339235e5dde711c116'
  ],

  // ==================== 青浦区 (4) ====================
  zhujiajiao: [
    'https://bkimg.cdn.bcebos.com/pic/63d0f703918fa0ec08fab36012cd4eee3d6d55fb6d11',
    'https://bkimg.cdn.bcebos.com/pic/574e9258d109b3de9c82195309e57b81800a19d8e6cf',
    'https://bkimg.cdn.bcebos.com/pic/37d3d539b6003af33a87e60e0170d15c103853431811',
    'https://bkimg.cdn.bcebos.com/pic/faedab64034f78f0f736069e4d6b1d55b319ebc4b61e',
    'https://bkimg.cdn.bcebos.com/pic/4bed2e738bd4b31c870164c0b38c307f9e2f0708520f',
    'https://bkimg.cdn.bcebos.com/pic/b219ebc4b74543a98226eff5db4d9d82b9014a90beca',
    'https://bkimg.cdn.bcebos.com/pic/91ef76c6a7efce1b9d16d1f8e708e4deb48f8c54cff2'
  ],
  dianshanhu: [
    'https://bkimg.cdn.bcebos.com/pic/1f178a82b9014a90f6c48510a7773912b21beea1',
    'https://bkimg.cdn.bcebos.com/pic/0b55b319ebc4b7458d0aa3a3c1fc1e178b8215ec',
    'https://bkimg.cdn.bcebos.com/pic/11385343fbf2b211bc6897fbc48065380dd78ec4',
    'https://bkimg.cdn.bcebos.com/pic/9213b07eca806538e1a8fca099dda144ac3482c7',
    'https://bkimg.cdn.bcebos.com/pic/730e0cf3d7ca7bcbfcf6cc9ab0096b63f724a8f2',
    'https://bkimg.cdn.bcebos.com/pic/8326cffc1e178a8223401013f803738da977e801',
    'https://bkimg.cdn.bcebos.com/pic/37d3d539b6003af33fd4a0d53b2ac65c1038b61c',
    'https://bkimg.cdn.bcebos.com/pic/0e2442a7d933c8954e3d90cedf1373f0830200c7'
  ],
  qingpu_bowuguan: [
    'https://bkimg.cdn.bcebos.com/pic/63d9f2d3572c11dfa9ec5a625c7e75d0f703918f6462',
    'https://bkimg.cdn.bcebos.com/pic/7af40ad162d9f2d3572cdfae96b59d13632762d06662',
    'https://bkimg.cdn.bcebos.com/pic/63d0f703918fa0ec08fa864c19ce4eee3d6d55fb6d62',
    'https://bkimg.cdn.bcebos.com/pic/908fa0ec08fa513d2697809f023442fbb2fb43167362',
    'https://bkimg.cdn.bcebos.com/pic/a1ec08fa513d269759eee71c6aa2a5fb43166d227262',
    'https://bkimg.cdn.bcebos.com/pic/54fbb2fb43166d224f4ac0d5797a1ef7905298227462',
    'https://bkimg.cdn.bcebos.com/pic/9d82d158ccbf6c81800ae2062a64a63533fa838bea90',
    'https://bkimg.cdn.bcebos.com/pic/d009b3de9c82d158ccbf955f16500ed8bc3eb035e490'
  ],
  liantang: [
    'https://bkimg.cdn.bcebos.com/pic/d53f8794a4c27d1e6db6034a1dd5ad6edcc438af',
    'https://bkimg.cdn.bcebos.com/pic/060828381f30e92437ae25b44c086e061d95f729',
    'https://bkimg.cdn.bcebos.com/pic/38dbb6fd5266d016ccd5b9a6912bd40734fa356b',
    'https://bkimg.cdn.bcebos.com/pic/5d6034a85edf8db1d93dc5e10923dd54564e7427',
    'https://bkimg.cdn.bcebos.com/pic/2f738bd4b31c87017bdcbe60277f9e2f0608ffca',
    'https://bkimg.cdn.bcebos.com/pic/c8ea15ce36d3d539977803453a87e950342ab0ea',
    'https://bkimg.cdn.bcebos.com/pic/d6ca7bcb0a46f21fc6b2a7aaf6246b600d33ae41'
  ],

  // ==================== 奉贤区 (5) ====================
  haiwang_park: [
    'https://bkimg.cdn.bcebos.com/pic/023b5bb5c9ea15ce36d3328cee5b2df33a87e85014b8',
    'https://bkimg.cdn.bcebos.com/pic/4ec2d5628535e5dde71187592e9db0efce1b9c16c4b8',
    'https://bkimg.cdn.bcebos.com/pic/d439b6003af33a87e950d99f9e0707385343faf21fb8',
    'https://bkimg.cdn.bcebos.com/pic/adaf2edda3cc7cd98d10095f615a363fb80e7aec3bb8',
    'https://bkimg.cdn.bcebos.com/pic/6d81800a19d8bc3e9309b851828ba61ea8d34523',
    'https://bkimg.cdn.bcebos.com/pic/9d82d158ccbf6c8192848b19ba3eb13532fa408b',
    'https://bkimg.cdn.bcebos.com/pic/09fa513d269759ee952fde50b2fb43166d22df2a',
    'https://bkimg.cdn.bcebos.com/pic/b6045da94957d0c61e17a289'
  ],
  guhuayuan: [
    'https://bkimg.cdn.bcebos.com/pic/2934349b033b5bb5c9ea1e310485c239b6003bf316fc',
    'https://bkimg.cdn.bcebos.com/pic/37d3d539b6003af33a87f8af077cd15c1038524318fc',
    'https://bkimg.cdn.bcebos.com/pic/023b5bb5c9ea15ce36d3d8c684562df33a87e85014fc',
    'https://bkimg.cdn.bcebos.com/pic/359b033b5bb5c9ea15ce3a2ce76fa1003af33b8715fc',
    'https://bkimg.cdn.bcebos.com/pic/3b87e950352ac65c103846bcc9a4a5119313b17e1cfc',
    'https://bkimg.cdn.bcebos.com/pic/2e2eb9389b504fc2d562bfcad78bf01190ef77c6c7fc',
    'https://bkimg.cdn.bcebos.com/pic/9a504fc2d5628535e5dddbeea2b961c6a7efcf1bc5fc',
    'https://bkimg.cdn.bcebos.com/pic/3b292df5e0fe9925bc31129f06fe49df8db1ca13dbfc'
  ],
  fengxian_bowuguan: [
    'https://bkimg.cdn.bcebos.com/pic/9a504fc2d5628535e5dd2af031be61c6a7efcf1bc59a',
    'https://bkimg.cdn.bcebos.com/pic/aa64034f78f0f736afc34505a804a419ebc4b745b52c',
    'https://bkimg.cdn.bcebos.com/pic/267f9e2f070828381f30b6cc19c8be014c086f065b93'
  ],
  qingxi_laojie: [
    'https://bkimg.cdn.bcebos.com/pic/80cb39dbb6fd5266d016f3bd6244802bd40735fa985f',
    'https://bkimg.cdn.bcebos.com/pic/50da81cb39dbb6fd5266298fc078bc18972bd407995f',
    'https://bkimg.cdn.bcebos.com/pic/38dbb6fd5266d016092450815e77c30735fae6cd9f5f'
  ],
  shanghai_zhiyu: [
    'https://bkimg.cdn.bcebos.com/pic/a71ea8d3fd1f4134970aeeea984682cad1c8a786f057',
    'https://bkimg.cdn.bcebos.com/pic/fc1f4134970a304e251f756e6c91b086c9177f3ef657',
    'https://bkimg.cdn.bcebos.com/pic/9a504fc2d5628535e5ddd504acbe61c6a7efce1bc5cf',
    'https://bkimg.cdn.bcebos.com/pic/78310a55b319ebc4b74565033f7fd8fc1e178b82b8aa',
    'https://bkimg.cdn.bcebos.com/pic/0b55b319ebc4b74543a9a58c72a509178a82b801bfaa',
    'https://bkimg.cdn.bcebos.com/pic/5bafa40f4bfbfbedab641eeac5a9e036afc37931b157',
    'https://bkimg.cdn.bcebos.com/pic/83025aafa40f4bfbfbedb7c1be166ff0f736afc3b257',
    'https://bkimg.cdn.bcebos.com/pic/b219ebc4b74543a98226e759a34e9d82b9014a90be57'
  ],

  // ==================== 金山区 (5) ====================
  fengjing: [
    'https://bkimg.cdn.bcebos.com/pic/242dd42a2834349b033b1bfb32b202ce36d3d539100e',
    'https://bkimg.cdn.bcebos.com/pic/d52a2834349b033b5bb588a4ee9621d3d539b600170e',
    'https://bkimg.cdn.bcebos.com/pic/342ac65c10385343fbf2fc5f684ba77eca806538220e',
    'https://bkimg.cdn.bcebos.com/pic/5ab5c9ea15ce36d3d539f34ec1ab2d87e950352a1b0e',
    'https://bkimg.cdn.bcebos.com/pic/c8ea15ce36d3d539b6007cbdc1dffe50352ac65c1a0e',
    'https://bkimg.cdn.bcebos.com/pic/4bed2e738bd4b31c87015fc57c8e307f9e2f07085201',
    'https://bkimg.cdn.bcebos.com/pic/9d82d158ccbf6c81800a8f974766a63533fa828bea01'
  ],
  jinshan_shatan: [
    'https://bkimg.cdn.bcebos.com/pic/4610b912c8fcc3cec3fd7e98bd1cc188d43f87948a5d',
    'https://bkimg.cdn.bcebos.com/pic/d1160924ab18972bd407ad61c9946c899e510fb39c5d',
    'https://bkimg.cdn.bcebos.com/pic/024f78f0f736afc379314ee02840fcc4b74542a9b4a7',
    'https://bkimg.cdn.bcebos.com/pic/b3119313b07eca806538bf620a7a80dda144ac3425a6',
    'https://bkimg.cdn.bcebos.com/pic/5882b2b7d0a20cf431ad765aed505c36acaf2fdd33a6',
    'https://bkimg.cdn.bcebos.com/pic/9e3df8dcd100baa1cd110e176849ae12c8fcc3ce805c',
    'https://bkimg.cdn.bcebos.com/pic/37d3d539b6003af33a873d7a5a73d15c10385343182d',
    'https://bkimg.cdn.bcebos.com/pic/7c1ed21b0ef41bd5ad6e90e83e8396cb39dbb6fd972c'
  ],
  jinshanzui_yucun: [
    'https://bkimg.cdn.bcebos.com/pic/d4628535e5dde711440dc327a7efce1b9c166100',
    'https://bkimg.cdn.bcebos.com/pic/b7003af33a87e95093f57ebd10385343faf2b405'
  ],
  donglin_si: [
    'https://bkimg.cdn.bcebos.com/pic/c2fdfc039245d688d43f8219149a6a1ed21b0ef48e4c',
    'https://bkimg.cdn.bcebos.com/pic/4ec2d5628535e5dde71128a5c19eb0efce1b9d16c40a',
    'https://bkimg.cdn.bcebos.com/pic/9f510fb30f2442a7d933debe681bba4bd11373f0a42a',
    'https://bkimg.cdn.bcebos.com/pic/f636afc379310a55b319c449051d54a98226cffcba4c',
    'https://bkimg.cdn.bcebos.com/pic/960a304e251f95cad1c84cce7d4f683e6709c93df408',
    'https://bkimg.cdn.bcebos.com/pic/f603918fa0ec08fa513d45feedb62a6d55fbb2fb6c6b',
    'https://bkimg.cdn.bcebos.com/pic/d1160924ab18972bd40726b552956c899e510fb39c0e',
    'https://bkimg.cdn.bcebos.com/pic/bba1cd11728b4710b912333b7096d4fdfc0393458589'
  ],
  huakaihaishang: [
    'https://bkimg.cdn.bcebos.com/pic/0b46f21fbe096b63f624f46682649044ebf81a4c06f7',
    'https://bkimg.cdn.bcebos.com/pic/58ee3d6d55fbb2fb43168ed9751d37a4462308f776fa',
    'https://bkimg.cdn.bcebos.com/pic/d439b6003af33a87e950832c480b07385343fbf21ff7',
    'https://bkimg.cdn.bcebos.com/pic/3bf33a87e950352ac65ca83edd14ecf2b21193131df7',
    'https://bkimg.cdn.bcebos.com/pic/b7003af33a87e950352a715a9e6f4443fbf2b2111ef7'
  ],

  // ==================== 崇明区 (4) ====================
  dongping_park: [
    'https://bkimg.cdn.bcebos.com/pic/cc11728b4710b9121a452a89cefdfc03934522c5',
    'https://bkimg.cdn.bcebos.com/pic/b7003af33a87e95041781b1b1d385343fbf2b45e',
    'https://bkimg.cdn.bcebos.com/pic/78310a55b319ebc4a4e69fee8f26cffc1e17162e',
    'https://bkimg.cdn.bcebos.com/pic/7af40ad162d9f2d36a87cd98a4ec8a136327cc37',
    'https://bkimg.cdn.bcebos.com/pic/8718367adab44aed08bd5793be1c8701a08bfbd2'
  ],
  xisha_mingzhu: [
    'https://bkimg.cdn.bcebos.com/pic/91ae68c64a0544589c163d0b',
    'https://bkimg.cdn.bcebos.com/pic/b853d6fce82349befd037f15',
    'https://bkimg.cdn.bcebos.com/pic/5327ce16a9f2825a962b433d',
    'https://bkimg.cdn.bcebos.com/pic/0fb505d5c82681a851da4b91'
  ],
  dongtan_shidi: [
    'https://bkimg.cdn.bcebos.com/pic/5366d0160924ab18972ba17064a3f1cd7b899e519d79',
    'https://bkimg.cdn.bcebos.com/pic/d1160924ab18972bd407438db7946c899e510fb39c79',
    'https://bkimg.cdn.bcebos.com/pic/d50735fae6cd7b899e5175c45e7d55a7d933c895a079',
    'https://bkimg.cdn.bcebos.com/pic/9f510fb30f2442a7d933b6e2801aba4bd11373f0a479',
    'https://bkimg.cdn.bcebos.com/pic/5bafa40f4bfbfbedab648a3829a9e036afc37931b179',
    'https://bkimg.cdn.bcebos.com/pic/a50f4bfbfbedab64034ff287a66fb8c379310a55b079',
    'https://bkimg.cdn.bcebos.com/pic/f636afc379310a55b3197bb3e61c54a98226cffcba79',
    'https://bkimg.cdn.bcebos.com/pic/78310a55b319ebc4b745d1ded37fd8fc1e178a82b879'
  ],
  changxingdao: [
    'https://bkimg.cdn.bcebos.com/pic/bf096b63f6246b600c3398cefba40d4c510fd9f9044f',
    'https://bkimg.cdn.bcebos.com/pic/f7246b600c338744ebf83bc64153cef9d72a60590a4f',
    'https://bkimg.cdn.bcebos.com/pic/6a63f6246b600c338744cb720a10460fd9f9d72a0b4f'
  ]
}

/**
 * Get photos array for a given spot ID.
 * @param {string} spotId
 * @returns {string[]}
 */
function getPhotos(spotId) {
  return spotPhotos[spotId] || []
}

module.exports = { spotPhotos, getPhotos }
