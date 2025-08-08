/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let lessHead = new ListNode(0)
  let greaterHead = new ListNode(0)

  let less = lessHead,
    greater = greaterHead
  while (head) {
    //khong cần lưu node head ban đầu vì k cần dùng tới nó sau khi lặp kết thúc
    if (head.val < x) {
      less.next = head
      less = less.next
    } else {
      greater.next = head
      greater = greater.next
    }
    head = head.next
  }

  greater.next = null
  less.next = greaterHead.next

  return lessHead.next
}

//Phân loại các node nhỏ hơn x bên trái lớn hơn x bên phải
//Ý tưởng tạo 2 dang sách các node nhỏ hơn nó và các node lớn hơn nó
