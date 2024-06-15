import { stdout } from '../../utils/cli/debug'

export const waitForHealthcheck = async (
  initialTimeout: number = 2000,
): Promise<boolean> => {
  await waitFor(initialTimeout)

  stdout('🏓 Pinging healthcheck with exponential backoff...')
  let exponentialBackoff = initialTimeout

  try {
    const response = await fetch('https://localhost:3001/healthcheck')
    if (response.ok) return true

    exponentialBackoff = exponentialBackoff * 2
    return await waitForHealthcheck(exponentialBackoff)
  } catch (error) {
    console.log({ error })
    exponentialBackoff = exponentialBackoff * 2

    if (exponentialBackoff > 30000)
      throw new Error('Healthcheck failed after 30 seconds')

    return await waitForHealthcheck(exponentialBackoff)
  }
}

function waitFor(timeout: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, timeout))
}
