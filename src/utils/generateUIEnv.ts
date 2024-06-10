import { generateEnv, stdout } from '.'

export const generateUIEnv = async () => {
  const env = generateEnv()

  const uiEnvContent = `NODE_ENV=${env.NODE_ENV}
API_HOST=${env.IP}
API_PORT_WEB=${env.ADMIN_SERVER_PORT_WEB}
API_PORT_NATIVE=${env.ADMIN_SERVER_PORT_NATIVE}
API_PATH=/graphql
`

  await Bun.write(`${process.cwd()}/ui/.env.development`, uiEnvContent)

  await stdout('🧩 Generated UI environment variables')
}
