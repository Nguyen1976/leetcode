/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function (root) {
  if (!root) return root

  const q = [root]
  console.log(q)

  while (q.length) {
    const levelSize = q.length

    for (let i = 0; i < levelSize; i++) {
      const node = q.shift()
      if (i < levelSize - 1) node.next = q[0]

      //lấy ra các node của tầng tiếp theo
      if (node.left) q.push(node.left)
      if (node.right) q.push(node.right)
    }
  }
  return root
}
