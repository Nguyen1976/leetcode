/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  if (!root) return 0
  let queue = [root],
    result = []

  while (queue.length > 0) {
    const level = queue.length
    let totalOfLevel = 0

    for (let i = 0; i < level; i++) {
      let node = queue.shift()
      totalOfLevel += node.val

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    result.push(totalOfLevel / level)
  }

  return result
}
