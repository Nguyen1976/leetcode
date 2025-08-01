/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */

var copyRandomList = function(head) {
    const map = new Map()
    let curr = head
    while(curr) {
        map.set(curr, new Node(curr.val))
        curr = curr.next;
    }

    curr = head;

    while(curr) {
        const copy = map.get(curr);
        copy.next = map.get(curr.next) || null;
        copy.random = map.get(curr.random) || null
        curr = curr.next
    }

    return map.get(head)
};

/**

Sử dụng hashMap với key là node cũ và value là node mới với val tương tự  
Sau đó cập nhật từng node value để nó có random và next giống với node cũ
Cuối cùng get head tức là lấy ra bản sao của head
*/
