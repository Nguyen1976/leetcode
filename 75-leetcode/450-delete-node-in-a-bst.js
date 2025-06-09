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
 * @param {number} key
 * @return {TreeNode}
 */
var findMin = (node) => {
  while (node.left) {
    node = node.left
  }
  return node
}

var deleteNode = function (root, key) {
  if (!root) return null

  if (root.val === key) {
    if (!root.left) return root.right
    if (!root.right) return root.left

    //Nếu có cả 2 con
    let minNode = findMin(root.right)
    root.val = minNode.val
    root.right = deleteNode(root.right, minNode.val)
  } else if (root.val > key) {
    root.left = deleteNode(root.left, key) //Đảm bảo sau khi sử lý xong cây con trái nó phải được gắn lại vào gốc
  } else {
    root.right = deleteNode(root.right, key)
  }
  return root
}

//Tức là node được thay thế vào phải là lớn nhất bên cây con trái hoặc nhỏ nhất bên cây con phải
//Theo đề bài nếu có 2 con thì phải tìm trái nhất bên phải
//Nếu có 1 con thì chỉ cần thay thế node con vào node xóa
