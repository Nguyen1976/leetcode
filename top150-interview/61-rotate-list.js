/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head || !head.next || k === 0) return head;

    // 1. Tính độ dài của danh sách
    let length = 1;
    let tail = head;
    while (tail.next) {
        tail = tail.next;
        length++;
    }

    k = k % length;
    if (k === 0) return head;

    let stepsToNewHead = length - k;
    let prev = null;
    let curr = head;
    while (stepsToNewHead > 0) {
        prev = curr;
        curr = curr.next;
        stepsToNewHead--;
    }

    prev.next = null;     // Ngắt tại prev
    tail.next = head;     // Nối đuôi cũ vào đầu cũ

    return curr; 
};
//lặp đến phần tử ví dụ k=2 thì lặp đến phần tử có k = 3 từ dưới lên để gắn next của nó là null 
//và cái sub list ở cuối thì head sẽ gắn ở đầu và đuối sẽ là next của head cũ