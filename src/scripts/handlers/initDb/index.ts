import postgres from 'postgres'
import { initUsers } from './initUsers'
import { initModels } from './initModels'
import pkg from '../../../../package.json'
import { stdout } from '../../../utils/cli/debug'
import { DebugLevel, generateEnv } from '../../../utils'
import { initAdministrators } from './initAdministrators'

export const initDb = async ({
  debugLevel,
  spawnLevel,
}: {
  spawnLevel: number
  debugLevel: DebugLevel
}) => {
  const env = generateEnv()
  const sql = postgres(env.DATABASE_URL, {
    onnotice: ({ message }) => {
      if (message === 'relation "administrators" already exists, skipping')
        stdout('🤔 Relation "administrators" already exists, skipping...')

      if (message === 'relation "users" already exists, skipping')
        stdout('🤔 Relation "users" already exists, skipping...')
    },
  })

  await initAdministrators({
    debugLevel,
    spawnLevel,
    connection: sql,
    schema: pkg.name,
  })

  await initUsers({
    debugLevel,
    spawnLevel,
    connection: sql,
    schema: pkg.name,
  })

  await initModels({
    debugLevel,
    spawnLevel,
    connection: sql,
    schema: pkg.name,
  })

  await sql.end()
}
