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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let count = 1,
    smallest
  let inOrderTraversal = (node) => {
    if (!node) return
    inOrderTraversal(node.left)

    if (count === k) {
      smallest = node.val
    }
    count++

    inOrderTraversal(node.right)
  }
  inOrderTraversal(root)

  return smallest
}

//duyệt trung (traversal cho ra thứ tự tăng dần) vì bài toán yêu cầu tìm phần tử nhỏ thứ k

//khi duyệt traversal chỉ cần đếm số node đã duyệt qua
