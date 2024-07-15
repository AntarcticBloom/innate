import { ENV } from '.'

export const generateUIEnv = async () => {
  const uiEnvContent = `NODE_ENV=${ENV.NODE_ENV}
API_HOST=${ENV.IP}
API_PORT_WEB=${ENV.ADMIN_SERVER_PORT_WEB}
API_PORT_NATIVE=${ENV.ADMIN_SERVER_PORT_NATIVE}
API_PATH=/graphql
`

  await Bun.write(`${process.cwd()}/ui/.env.development`, uiEnvContent)
}
