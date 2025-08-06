/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head || !head.next) return head

  const dummy = new ListNode(0, head)
  let prev = dummy
  let curr = head

  while (curr) {
    let isDuplicate = false

    while (curr.next && curr.val === curr.next.val) {
      //tức là sẽ lặp đến cái node cuối của cái chuỗi lặp
      isDuplicate = true
      curr = curr.next
    }

    if (isDuplicate) {
      prev.next = curr.next
    } else {
      prev = prev.next
    }
    curr = curr.next
  }

  return dummy.next
}

//chúng ta sẽ dùng ở một node và kiếm tra nếu node tiếp theo có cùng val thì xóa và cứ tiếp tục nếu node tiếp theo khác thì next
