import { expect, test, mock } from 'bun:test'

// const createDbProcessMock = mock(() =>
//   Bun.spawnSync([
//     'createdb',
//     `--host=${host}`,
//     `--port=${port}`,
//     `--username=${username}`,
//     `${databaseName}`,
//   ]),
// )

test('dev:create-db fails with an appropriate error message when it is the progenitor process', async () => {})
