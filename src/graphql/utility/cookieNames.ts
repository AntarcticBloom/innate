/**
 * Cookie names can't be __Host-prefixed if they're not secure, so the names
 * need to differ depending on the environment.
 *
 * See the __host-prefix spec here: https://datatracker.ietf.org/doc/html/draft-west-cookie-prefixes-05
 */
export const cookieNames = {
  access: process.env.NODE_ENV === 'development' ? 'access' : '__Host-a',
  refresh: process.env.NODE_ENV === 'development' ? 'refresh' : '__Host-r',
}
