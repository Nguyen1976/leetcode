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

function nodesBetweenCriticalPoints(head: ListNode | null): number[] {
    let curr = head.next
    let prev = head.val
    
    let arr = []
    let idx = 1
    while(curr.next) {
        if((curr.val > prev && curr.val > curr.next.val) || (curr.val < prev && curr.val < curr.next.val)) {
            arr.push(idx)
        }
        idx++
        prev = curr.val
        curr = curr.next
    }

    if(arr.length < 2) return [-1, -1]

    let minDistance = Infinity
    for(let i = 1; i < arr.length; i++) {
        minDistance = Math.min(minDistance, arr[i] - arr[i - 1])
    }

    return [minDistance, arr[arr.length - 1] - arr[0]]
};
/**
local max là lớn hơn hơn node trước nó và sau nó
local min là nhỏ hơn node trước nó và sau nó

hướng giải sẽ tìm ra vị trí của toàn bộ local min và local max
sau đó sẽ tìm ra min và max distance
 */
