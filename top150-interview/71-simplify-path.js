/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const pathArr = path.split('/')

  const stack = []

  for (let path of pathArr) {
    if (path === '.' || path === '') continue

    if (path === '..') {
      stack.pop()
      continue
    }

    stack.push(path)
  }

  return `/${stack.join('/')}`
}
