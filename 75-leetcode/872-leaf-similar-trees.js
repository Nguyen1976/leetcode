/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  let getLeaf = (root, leaves = []) => {
    if (!root) return
    if (!root.left && !root.right) leaves.push(root.val)
    getLeaf(root.left, leaves)
    getLeaf(root.right, leaves)
    return leaves
  }

  // let leaves1 = getLeaf(root1)
  // let leaves2 = getLeaf(root2)

  // if(leaves1.length !== leaves2.length) return false

  // for(let i = 0; i < leaves1.length; i++) {
  //     if(leaves1[i] !== leaves2[i]) return false
  // }
  //Nếu như dùng join trong trường hợp này để so sánh mảng thì sẽ sai với trường hợp mảng là rỗng vì nó luôn luôn return về false
  //Cách này vẫn tốn O(n)
  return JSON.stringify(getLeaf(root1)) === JSON.stringify(getLeaf(root2))
}

//solution
// var leafSimilar = function (root1, root2) {
//   const dfs = (root) => {
//     if (root === null) {
//       return []
//     }

//     const leaves = dfs(root.left).concat(dfs(root.right))

//     return leaves.length > 0 ? leaves : [root.val]
//   }

//   return JSON.stringify(dfs(root1)) === JSON.stringify(dfs(root2))
// }
