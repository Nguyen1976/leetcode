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
var reverseList = function(head) {
    let prev = null
    let current = head

    while(current !== null) {
        let nextNode = current.next
        current.next = prev
        prev = current
        current = nextNode
    }

    return prev
};

//ví dụ có 3 node 1 -> 2 -> 3 -> null
//lần lặp 1 ta thu được prev: 1 -> null và current: 2 -> 3 -> null
//lần lặp 2 ta thu được prev: 2 -> 1 -> null và current 3 -> null
//lần lặp 3 ta thu được prev: 3 -> 2 -> 1 -> null và current -> null //lúc này vòng lặp dừng

//current.next = prev
//prev = current

//đoạn code này là chúng ta đang trỏ current đến prev sau đó cập nhật lại prev = current
//việc này chính xác là đang thêm current hiện tại vào đầu prev vậy
//mội vòng lặp phải ghi nhớ lại next của current vì current được gắn vào đầu prev
//và sau đó sẽ dùng nextNode để cập nhật lại qua giá trị tiếp theo của ll