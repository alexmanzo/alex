const getPath = (path: string): string => {
  // eslint-disable-next-line no-useless-escape
  const regex = /(..\/..\/routes)?([\/\w\-]+?)(\/index)?\.\w+/
  return path.match(regex)[2]
}

const globToArray = (
  glob: Record<
    string,
    {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [key: string]: any
    }
  >
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): any[] => {
  const array = Object.keys(glob).map((key) => {
    const path = getPath(key)
    const post = glob[key]
    return {
      key,
      path,
      ...post,
    }
  })

  return array
}

export default globToArray
