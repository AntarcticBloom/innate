import { stdout } from '../../scripts/utils/debug'

export const waitForHealthcheck = async (
  initialTimeout: number = 2000,
): Promise<boolean> => {
  stdout('🏓 Pinging healthcheck with exponential backoff...')
  let exponentialBackoff = initialTimeout

  try {
    const response = await fetch('http://localhost:3000/healthcheck')
    if (response.ok) return true

    exponentialBackoff = exponentialBackoff * 2
    return await retry(exponentialBackoff)
  } catch (error) {
    exponentialBackoff = exponentialBackoff * 2
    return await retry(exponentialBackoff)
  }

  function retry(timeout: number): Promise<boolean> {
    return new Promise((resolve) =>
      setTimeout(async () => {
        const result: boolean = await waitForHealthcheck(timeout)
        return resolve(result)
      }, timeout),
    )
  }
}
