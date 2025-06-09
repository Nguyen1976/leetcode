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
 * @return {number}
 */
// var pathSum = function(root, targetSum) {
//     if(!root) return 0

//     //hàm này sẽ chỉ tìm những đường đi bắt đầu từ node hiện tại
//     const countPathsFromNode = (node, currentSum) => {
//         if(!node) return 0

//         let count = 0
//         if(node.val === currentSum) count++

//         //Tư duy ngược lại lấy currentSum trừ đi cái node hiện tại thì node tiếp theo sẽ lấy kết quả này để so sánh vs node đó
//         count += countPathsFromNode(node.left, currentSum - node.val)
//         count += countPathsFromNode(node.right, currentSum - node.val)

//         return count;
//     }

//     //gọi đệ quy để tìm đường đi bắt đầu từ những node khác
//     return (
//         countPathsFromNode(root, targetSum) +
//         pathSum(root.left, targetSum) + 
//         pathSum(root.right, targetSum)
//     )
// };

//Bài toán yêu cầu tìm các đường đi mà tổng nó bằng 8 trả về số đường đi tìm được


//solution: kết hợp prefix sum và dfs
var pathSum = function(root, targetSum) {
    const prefixSums = new Map()
    prefixSums.set(0, 1);

    const dfs = (node, currentSum) => {
        if(!node) return 0

        currentSum += node.val

        let count = prefixSums.get(currentSum - targetSum) || 0
        prefixSums.set(currentSum, (prefixSums.get(currentSum) || 0) + 1);

        count += dfs(node.left, currentSum);
        count += dfs(node.right, currentSum);

        prefixSums.set(currentSum, prefixSums.get(currentSum) - 1);
        return count

    }

    return dfs(root, 0)
}