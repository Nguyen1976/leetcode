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
var getMinimumDifference = function (root) {
  let prev = null,
    min = Infinity
  let inorder = (node) => {
    if (!node) return

    inorder(node.left)

    if (prev !== null) {
      min = Math.min(min, node.val - prev) //mỗi lần sẽ update lại diffmin
    }
    prev = node.val

    inorder(node.right)
  }

  inorder(root)

  return min
}

//tìm chênh lệch nhỏ nhất giữa 2 số trong dãy: ta cần duyệt inorder tức trái gốc phải để thu được dãy tăng dần
