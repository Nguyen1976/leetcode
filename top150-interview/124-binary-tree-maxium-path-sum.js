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
var maxPathSum = function (root) {
  let res = root.val

  function dfs(node) {
    if (!node) return 0

    //tính tổng cây bên trái và cây bên phải
    let leftSum = Math.max(0, dfs(node.left))
    let rightSum = Math.max(0, dfs(node.right))

    res = Math.max(res, leftSum + rightSum + node.val) //update lại max của cây hiện tại

    return Math.max(leftSum, rightSum) + node.val //tức là đứng ở node cha vè phải chọn 1 đường đi tốt nhất trái hoặc phải giúp và luon phải cộng với node hiện tại
  }
  dfs(root)
  return res
}

//dfs
