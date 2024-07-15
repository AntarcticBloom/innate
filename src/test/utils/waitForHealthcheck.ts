import ora from 'ora'

export const waitForHealthcheck = async ({
  port,
  version,
  protocol,
  initialTimeout,
}: {
  port: number
  version: string
  initialTimeout: number
  protocol: 'http' | 'https'
}): Promise<boolean> => {
  const thirtySeconds = 30000
  await waitFor(initialTimeout)

  const spinner = ora(`Running healthcheck for ${version}`).start()

  let exponentialBackoff = initialTimeout

  try {
    const response = await fetch(
      `${protocol}://localhost:${port}/healthcheck`,
      {
        credentials: 'include',
        tls: { rejectUnauthorized: false },
      },
    )

    if (response.ok) {
      spinner.succeed(`Healthcheck endpoint available for ${version}`)
      return true
    }

    exponentialBackoff = exponentialBackoff * 2
    return await waitForHealthcheck({
      port,
      version,
      protocol,
      initialTimeout: exponentialBackoff,
    })
  } catch (error) {
    console.error({ error })
    exponentialBackoff = exponentialBackoff * 2

    if (exponentialBackoff > thirtySeconds)
      throw new Error('Healthcheck failed after 30 seconds')

    return await waitForHealthcheck({
      port,
      version,
      protocol,
      initialTimeout: exponentialBackoff,
    })
  }
}

function waitFor(timeout: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, timeout))
}
