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
var longestZigZag = function (root) {
  let max = 0

  const dfs = (node, isLeft, length) => {
    if (!node) return
    max = Math.max(max, length)

    if (isLeft) {
      dfs(node.left, true, 1) // Nếu tiếp tục trái -> reset
      dfs(node.right, false, length + 1) // Nếu đi phải -> tiếp tục zigzag
    } else {
      dfs(node.right, false, 1)
      dfs(node.left, true, length + 1)
    }
  }

  dfs(root.left, true, 1) //Cây con bên trái
  dfs(root.right, false, 1) //Cây con bên phải

  return max
}

//bài toán yêu cầu tìm đường đi zigzag dài nhất
//isLeft là đi ghi nhwos trước đó là trái hay phải