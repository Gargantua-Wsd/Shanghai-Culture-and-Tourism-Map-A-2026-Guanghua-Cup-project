/**
 * Fetch photo URLs from Baidu Baike for all 32 spots.
 * Uses Node.js built-in fetch (available in Node 18+).
 */
const fs = require('fs')
const path = require('path')

const SPOTS = [
  { id: 'yuyuan', name: '豫园' },
  { id: 'bund', name: '外滩' },
  { id: 'dajingge', name: '大境阁' },
  { id: 'sanshan', name: '三山会馆' },
  { id: 'shangchuan', name: '商船会馆' },
  { id: 'gucheng_park', name: '古城公园' },
  { id: 'huangpu_park', name: '黄浦公园' },
  { id: 'shaoxing_park', name: '绍兴公园' },
  { id: 'shanghai_museum', name: '上海博物馆' },
  { id: 'immersive_theater', name: '沉浸式剧场' },
  { id: 'jingansi', name: '静安寺' },
  { id: 'hudie_wan', name: '蝴蝶湾' },
  { id: 'zhangyuan', name: '张园' },
  { id: 'sihang', name: '四行仓库' },
  { id: 'exhibition_center', name: '上海展览中心' },
  { id: 'moller_villa', name: '马勒别墅' },
  { id: 'ershida', name: '中共二大会址' },
  { id: 'suhewan', name: '苏河湾万象天地' },
  { id: 'fotografiska', name: 'Fotografiska' },
  { id: 'duolun', name: '多伦路' },
  { id: 'luxun_park', name: '鲁迅公园' },
  { id: 'jewish', name: '犹太难民纪念馆' },
  { id: 'post_museum', name: '上海邮政博物馆' },
  { id: 'jinchaonong', name: '今潮8弄' },
  { id: 'hebin_building', name: '河滨大楼' },
  { id: 'shanghai_tower_hotel', name: '上海大厦' },
  { id: 'zhapu_road', name: '乍浦路' },
  { id: 'bajin_lib', name: '巴金图书馆' },
  { id: 'zuolian', name: '左联会址纪念馆' },
  { id: 'deling_apartment', name: '德邻公寓' },
  { id: '1933', name: '1933老场坊' },
  { id: 'beiwaitan', name: '北外滩' }
]

// Alternate Baidu Baike search terms for spots that fail with direct name lookup
const ALT_NAMES = {
  'yuyuan': ['豫园 上海'],
  'bund': ['外滩 上海'],
  'sanshan': ['三山会馆 上海'],
  'jingansi': ['静安寺 上海'],
  'hudie_wan': ['蝴蝶湾 上海'],
  'zhangyuan': ['张园 上海'],
  'sihang': ['四行仓库 上海'],
  'moller_villa': ['马勒别墅 上海'],
  'ershida': ['中共二大会址 上海'],
  'suhewan': ['苏河湾万象天地'],
  'duolun': ['多伦路 上海'],
  'luxun_park': ['鲁迅公园 上海'],
  'jewish': ['犹太难民纪念馆 上海'],
  'hebin_building': ['河滨大楼 上海'],
  'shanghai_tower_hotel': ['上海大厦'],
  'zhapu_road': ['乍浦路 上海'],
  'zuolian': ['左联会址 上海'],
  'immersive_theater': ['星空间 沉浸式剧场 上海'],
  'shanghai_museum': ['上海博物馆'],
  'fotografiska': ['Fotografiska 上海 影像艺术中心']
}

function extractPicUrls(html) {
  const urls = []
  const regex = /https:\/\/bkimg\.cdn\.bcebos\.com\/pic\/[a-fA-F0-9%]+/g
  let match
  while ((match = regex.exec(html)) !== null) {
    urls.push(match[0])
  }
  return [...new Set(urls)]
}

function extractSmartUrls(html) {
  const urls = []
  const regex = /https:\/\/bkimg\.cdn\.bcebos\.com\/smart\/[a-fA-F0-9]+-bkimg-process[^"'\s]*/g
  let match
  while ((match = regex.exec(html)) !== null) {
    const url = match[0].replace(/\?.*$/, '').replace(/,rw_\d+,rh_\d+,maxl_\d+/, '')
    urls.push(url)
  }
  return [...new Set(urls)]
}

async function fetchUrl(url) {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 15000)

  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      },
      signal: controller.signal
    })
    const html = await res.text()
    clearTimeout(timeout)
    return html
  } catch (e) {
    clearTimeout(timeout)
    throw e
  }
}

async function fetchSpotPhotos(spot) {
  const namesToTry = [spot.name, ...(ALT_NAMES[spot.id] || [])]

  for (const name of namesToTry) {
    const encoded = encodeURIComponent(name)
    const url = `https://baike.baidu.com/item/${encoded}`
    try {
      console.log(`  Trying: ${name}`)
      const html = await fetchUrl(url)

      let picUrls = extractPicUrls(html)
      let smartUrls = extractSmartUrls(html)

      console.log(`  -> ${spot.name}: ${picUrls.length} pic, ${smartUrls.length} smart`)

      if (picUrls.length > 0 || smartUrls.length > 0) {
        const photos = picUrls.length > 0 ? picUrls.slice(0, 10) : smartUrls.slice(0, 10)
        return {
          id: spot.id,
          name: spot.name,
          baike_url: url,
          photos
        }
      }
    } catch (e) {
      console.log(`  -> ${name}: ${e.message}`)
    }
  }

  return {
    id: spot.id,
    name: spot.name,
    baike_url: `https://baike.baidu.com/item/${encodeURIComponent(spot.name)}`,
    photos: []
  }
}

async function main() {
  const results = []

  for (let i = 0; i < SPOTS.length; i += 3) {
    const batch = SPOTS.slice(i, i + 3)
    console.log(`\nBatch ${Math.floor(i/3)+1}/${Math.ceil(SPOTS.length/3)}:`)
    const batchResults = await Promise.all(batch.map(fetchSpotPhotos))
    results.push(...batchResults)
    if (i + 3 < SPOTS.length) {
      await new Promise(r => setTimeout(r, 2000))
    }
  }

  const outputPath = path.join(__dirname, 'photos.json')
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2), 'utf-8')

  const total = results.reduce((s, r) => s + r.photos.length, 0)
  const empty = results.filter(r => r.photos.length === 0).map(r => r.name)
  console.log(`\n=== SUMMARY ===`)
  console.log(`Total photos: ${total}`)
  console.log(`Empty spots: ${empty.length} - ${empty.join(', ')}`)
  console.log(`Saved to: ${outputPath}`)
}

main()
