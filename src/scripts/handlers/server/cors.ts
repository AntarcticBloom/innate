export const configureCORS = (res: Response) => {
  // TODO: https://linear.app/antarcticbloom/issue/AB-17/configurable-cors
  res.headers.set('Access-Control-Allow-Origin', '*') // TODO:

  res.headers.set(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS',
  )
  res.headers.set('Access-Control-Allow-Credentials', 'true')
}
