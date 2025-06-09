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
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    const dfs = (node, currentSum = 0) => {
        if(!node) return false
        if (!node.left && !node.right) {
            return currentSum + node.val === targetSum;
        }
        
        return dfs(node.left, currentSum + node.val) || dfs(node.right, currentSum + node.val)
    }

    return dfs(root, 0)
};

//Tư duy đệ quy:
//Phải có điểm dừng
//Phải có trường hợp base
//Xác định cách chia bài toán và gộp kết quả