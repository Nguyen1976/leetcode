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
var deleteMiddle = function (head) {
    let len = 0
    let temp = head
    while (temp != null) {
      temp = temp.next
      len++
    }
    let middle = Math.floor(len / 2)
  
    temp = head
  
    for (let i = 0; i < middle - 1; i++) {
      temp = temp.next
    }
    let elementDelete;
  if(temp.next) {
      let elementDelete = temp.next
      temp.next = temp.next.next
  } else {
      head = null
  }
  delete elementDelete
  
    return head
  }
  

//Xóa phần tử ở giữa danh sách liên kết
//len = 7 => elementDelete = floor(7/2)
//len = 4 => elementDelete = 4/2
