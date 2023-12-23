import postgres from 'postgres'
import pkg from '../../../../package.json'
import { stdout } from '../../utils/debug'
import { generateEnv } from '../../../utils'
import { initAdministrators } from '../../handlers/initDb/initAdministrators'

export const initDb = async ({
  debug,
  spawnLevel,
}: {
  debug: boolean
  spawnLevel: number
}) => {
  const env = generateEnv()
  const sql = postgres(env.DATABASE_URL, {
    onnotice: ({ message }) => {
      if (message === 'relation "administrators" already exists, skipping')
        stdout('🤔 Relation "administrators" already exists, skipping...')
    },
  })

  await initAdministrators({
    debug,
    spawnLevel,
    connection: sql,
    schema: pkg.name,
  })

  await sql.end()
}
