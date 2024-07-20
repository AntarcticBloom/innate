import chalk from 'chalk'
import { join } from 'path'
import { table } from 'table'
import { stdout } from '@utils'
import { readdirSync } from 'fs'
import { ENV } from '../../utils'
import type { CLIOptions } from '../../utils/cli/types'
import { waitForHealthcheck } from '../../test/utils/waitForHealthcheck'

class ProcessManager {
  private portIncrementer: number
  private servers: Record<
    string,
    {
      url: string
      status: string
      operational: boolean
    }
  > = {}

  constructor() {
    this.portIncrementer = parseInt(ENV.SERVER_PORT_RANGE_MIN, 10)
  }

  private async startAdminServers() {
    await stdout('\n\n🚀 Starting admin servers')

    Bun.spawn(
      [
        'dotenv',
        '-e',
        '.env.development',
        'bun',
        'run',
        './src/api/admin/generated/innate/server.ts',
      ],
      {
        stdout: 'inherit',
      },
    )

    await Promise.all([
      waitForHealthcheck({
        protocol: 'https',
        initialTimeout: 2000,
        version: 'admin-web',
        port: parseInt(ENV.ADMIN_SERVER_PORT_WEB, 10),
      }),
      waitForHealthcheck({
        protocol: 'http', // TODO: Change to https in production
        initialTimeout: 2000,
        version: 'admin-native',
        port: parseInt(ENV.ADMIN_SERVER_PORT_NATIVE, 10),
      }),
    ])

    const status =
      process.env.NODE_ENV !== 'production' ? 'Production Ready' : 'Production'

    this.servers['admin-web'] = {
      status,
      operational: true,
      url: `https://localhost:${ENV.ADMIN_SERVER_PORT_WEB}/graphql`,
    }

    this.servers['admin-native'] = {
      status,
      operational: true,
      url: `http://localhost:${ENV.ADMIN_SERVER_PORT_NATIVE}/graphql`,
    }
  }

  private async startDownstreamServers() {
    await stdout('🚀 Starting downstream servers\n')

    // Read api versions from the filesystem
    const apiVersions = readdirSync(join(import.meta.dir, '../downstream'))

    await Promise.all(
      apiVersions.map((version: string) => {
        this.startDownstreamServer({ version, port: this.portIncrementer })
        this.portIncrementer += 1 // TODO: 2 for when an https version is added
      }),
    )
  }

  private async startDownstreamServer({
    port,
    version,
  }: {
    port: number
    version: string
  }) {
    Bun.spawn(
      [
        'dotenv',
        '-e',
        '.env.development',
        'bun',
        'run',
        `./src/api/downstream/${version}/generated/innate/server.ts`,
        '--',
        '--port',
        `${port}`,
      ],
      {
        stdout: 'inherit',
      },
    )

    await waitForHealthcheck({
      port,
      version,
      protocol: 'http',
      initialTimeout: 2000,
    })

    const status =
      process.env.NODE_ENV !== 'production' ? 'Production Ready' : 'Production'

    this.servers[version] = {
      status,
      operational: true,
      url: `http://localhost:${port}/graphql`,
    }
  }

  private async printAPIVersions() {
    const magenta = chalk.hex('#FF0056')

    const downstreamApiVersions = Object.keys(this.servers).reduce(
      (acc: string[][], version) => {
        if (version === 'admin-web' || version === 'admin-native') return acc

        return [
          ...acc,
          [
            version,
            this.servers[version].url,
            this.servers[version].status,
            this.servers[version].operational ? '✅' : '❌',
          ],
        ]
      },
      [],
    )

    await stdout('\n🚀 Available API Versions\n')
    await stdout(
      magenta(
        table([
          ['Version', 'URL', 'Status', 'Operational'],
          [
            'admin-web',
            this.servers['admin-web'].url,
            this.servers['admin-web'].status,
            this.servers['admin-web'].operational ? '✅' : '❌',
          ],
          [
            'admin-native',
            this.servers['admin-native'].url,
            this.servers['admin-native'].status,
            this.servers['admin-native'].operational ? '✅' : '❌',
          ],

          ...downstreamApiVersions,
        ]),
      ),
    )
  }

  async start({ options }: { options: CLIOptions }) {
    await Promise.all([this.startAdminServers(), this.startDownstreamServers()])

    await this.printAPIVersions()
  }
}

export const pm = new ProcessManager()
