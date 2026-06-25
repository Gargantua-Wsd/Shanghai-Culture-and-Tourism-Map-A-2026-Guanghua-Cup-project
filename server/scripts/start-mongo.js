const { MongoMemoryServer } = require('mongodb-memory-server')

async function start() {
  console.log('[Mongo] Starting MongoDB Memory Server...')
  const mongod = await MongoMemoryServer.create({
    instance: {
      port: 27017,
      dbName: 'shanghai_tourism'
    }
  })

  const uri = mongod.getUri()
  console.log(`[Mongo] Running at: ${uri}`)
  console.log('[Mongo] Press Ctrl+C to stop')

  // Keep alive
  process.on('SIGINT', async () => {
    console.log('\n[Mongo] Stopping...')
    await mongod.stop()
    process.exit(0)
  })
  process.on('SIGTERM', async () => {
    console.log('\n[Mongo] Stopping...')
    await mongod.stop()
    process.exit(0)
  })
}

start().catch(err => {
  console.error('[Mongo] Failed to start:', err.message)
  process.exit(1)
})
