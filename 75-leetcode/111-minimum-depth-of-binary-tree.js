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
var minDepth = function(root) {
    if(!root) return 0
    if(!root.left) return minDepth(root.right) + 1
    if(!root.right) return minDepth(root.left) + 1
    return 1 + Math.min(minDepth(root.left), minDepth(root.right))
};


//Tìm độ sâu tối thiếu
//Độ sâu là số node từ node gốc đến node lá gần nhất(tính cả node gốc)