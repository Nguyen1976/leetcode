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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  const result = []
  const dfs = (node, currentSum, array = []) => {
    if (!node) return

    array.push(node.val)

    if (!node.left && !node.right && currentSum + node.val === targetSum) {
      result.push([...array])
    }

    dfs(node.left, currentSum + node.val, array)
    dfs(node.right, currentSum + node.val, array)

    array.pop() //backtrack tức là nếu đi theo 2 đường ở cái node hiện tại mà k có phần tử phù hợp thì phải delete node hiện tại đi
  }

  dfs(root, 0, [])

  return result
}
