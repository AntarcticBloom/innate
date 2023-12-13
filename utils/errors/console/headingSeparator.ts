const DEFAULT_HEADING_DASHES = 90

/** Can be used to unify the headings printed in the console */
export const headingSeparator = () => {
  const memoCache: {
    [key: number]: string
  } = {}

  return function (numHeadingDashes: number = DEFAULT_HEADING_DASHES) {
    if (memoCache[numHeadingDashes]) return memoCache[numHeadingDashes]

    let str = ''

    for (let i = 0; i < numHeadingDashes; i++) {
      str += '-'
    }

    str += '\n'

    memoCache[numHeadingDashes] = str

    return str
  }
}

export const memoizedHeading = headingSeparator()
