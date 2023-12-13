import { InvalidArgumentError } from 'commander'

export const parseCommandInt = (value: string) => {
  const parsedValue = parseInt(value, 10)

  if (isNaN(parsedValue))
    throw new InvalidArgumentError(`Expected an integer but received ${value}.`)

  return parsedValue
}
