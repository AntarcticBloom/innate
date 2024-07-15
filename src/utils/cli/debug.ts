import { type ChalkInstance } from 'chalk'

export const stdout = async (
  message: string,
  newline: boolean = true,
  color?: ChalkInstance,
) => {
  await Bun.write(
    Bun.stdout,
    `${color ? color(message) : message}${newline ? '\n' : ''}`,
  )
}

export const stderr = async (message: string) =>
  await Bun.write(Bun.stderr, message)
