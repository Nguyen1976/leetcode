/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function pairSum(head: ListNode | null): number {
    let curr = head
    const arr = []
    while(curr) {
        arr.push(curr.val)
        curr = curr.next
    }
    let result = 0
    for(let i = 0; i < Math.floor(arr.length / 2); i++) {
        result = Math.max(arr[i] + arr[arr.length - i - 1], result) 
    }

    return result
};