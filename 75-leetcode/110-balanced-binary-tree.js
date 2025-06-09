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
 * @return {boolean}
 */
// var isBalanced = function (root) {
//   const depth = (node) => {
//     if (!node) return 0
//     return Math.max(depth(node.left), depth(node.right)) + 1
//   }

//   if (!root) return true

//   let leftDepth = depth(root?.left)
//   let rightDepth = depth(root?.right)

//   return (
//     Math.abs(leftDepth - rightDepth) <= 1 &&
//     isBalanced(root.left) &&
//     isBalanced(root.right)
//   )
// }

//cây độ sâu cân bằng
//Cách trên thì sẽ phải tính depth nhiều lần

//Viết hàm check
//Vừa trả về chiều sâu của node hiện tại và luôn kiểm tra tại từng bước
//Code tối ưu

var isBalanced = function (root) {
  const check = (node) => {
    if (!node) return 0

    const left = check(node.left)
    if (left === -1) return -1 

    const right = check(node.right)
    if (right === -1) return -1 

    if (Math.abs(left - right) > 1) return -1

    return Math.max(left, right) + 1 // trả về chiều sâu
  }

  return check(root) !== -1
}
