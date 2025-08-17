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
 * @return {number}
 */
var countNodes = function (root) {
  if (!root) return 0

  let count = 0

  let dfs = (node) => {
    if (!node) return
    count++
    dfs(node.left)
    dfs(node.right)
  }

  dfs(root)

  return count
}

//sẽ trả về node trái của node phải cùng
