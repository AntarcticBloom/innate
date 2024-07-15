import { waitForHealthcheck } from '@test/utils'

const portArg = Bun.argv.findIndex((arg) => arg === '--port')
const port = Bun.argv[portArg + 1]

const versionArg = Bun.argv.findIndex((arg) => arg === '--version')
const version = Bun.argv[versionArg + 1]

const protocolArg = Bun.argv.findIndex((arg) => arg === '--protocol')
const protocol = Bun.argv[protocolArg + 1]

await waitForHealthcheck({
  version,
  initialTimeout: 2000,
  port: parseInt(port, 10),
  protocol: protocol as 'http' | 'https',
})

process.exit(0)
