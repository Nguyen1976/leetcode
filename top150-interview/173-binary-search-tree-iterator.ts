/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

class BSTIterator {
  private root: TreeNode | null
  private curr: TreeNode | null
  private arr: number[] = []
  private idx: number
  constructor(root: TreeNode | null) {
    this.root = root
    this.idx = 0

    let curr = root
    let inorder = (curr: TreeNode | null) => {
      if (!curr) return
      inorder(curr.left)
      this.arr.push(curr.val)
      inorder(curr.right)
    }
    inorder(curr)
  }

  next(): number {
    return this.arr[this.idx++]
  }

  hasNext(): boolean {
    return this.idx < this.arr.length
  }
}

/**
let inorder = (root) => {
    inorder(root.left)
    console.log(root.val)
    inorder(root.right)
}

có thể duyệt trong constructer và lưu kết quả

//cách 2:
next() {
    while (this.p) {
      this.s.push(this.p)
      this.p = this.p.left
    }
    let x = this.s.pop()
    this.p = x.right
    return x.val
  }
    sẽ luôn duyệt đến hết bên trái và chỉ khi node đó có phải thì lưu vào và lặp 

 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
//in order - duyệt trung
//
