/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  const findLCA = (root, p, q) => {
    if (!root) return null
    if (root.val === p.val || root.val === q.val) return root

    let left = findLCA(root.left, p, q) //tìm cây con bên trái có 1 trong 2 node k
    let right = findLCA(root.right, p, q)

    if (left && right) {
      //Cả trái phải đều tìm thấy thì tức là node hiện tại là tổ tiên gần nhất
      return root
    } else if (!left && right) {
      return right
    } else {
      return left
    }
    //Trường hợp cả 2 node đều null thì sẽ đệ quy tiếp
  }

  return findLCA(root, p, q)
}

//Bài yêu cầu tìm tổ tiên chugn thấp nhất của node p và 1 trên cây root
//Chúng ta vẫn sẽ dfs
//Ví dụ trong trường hợp 2 node ở 2 cây con khác nhau thì node mà nối 2 cây con sẽ là tổ tiên chung gần nhất
//Còn ví dụ thuộc cùng 1 cây con thì node ở gần đầu nhất sẽ là tổ tiên
//p !== q
