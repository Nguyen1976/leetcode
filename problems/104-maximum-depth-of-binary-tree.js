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
var maxDepth = function (root) {
  if (!root) return 0
  const leftDepth = maxDepth(root.left)
  const rightDepth = maxDepth(root.right)
  return Math.max(leftDepth, rightDepth) + 1//+1 vì do node hiện tại hợp lệ
}

//Ý tưởng:
/**
 * Sử dụng đệ quy nếu root là null thì return 0
 * hiểu là mỗi lần đệ quy sẽ trả về giá trị max + 1
 * Tư duy:
 * Chúng ta sẽ k quan tâm là chương trình làm j
 * Chỉ cần bt nó sẽ trả về cho chuungs ta maxDepth khi đi theo left hoặc right của mỗi nốt hiện tại
 * 
 */