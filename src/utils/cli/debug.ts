export const stdout = async (message: string) =>
  await Bun.write(Bun.stdout, `${message}\n`)

export const stderr = async (message: string) =>
  await Bun.write(Bun.stderr, message)
