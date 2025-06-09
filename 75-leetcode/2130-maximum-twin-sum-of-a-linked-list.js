/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
// var pairSum = function (head) {
//   let n = 0
//   let temp = head

//   while (temp !== null) {
//     n++
//     temp = temp.next
//   }

//   let middle = Math.ceil(n / 2)

//   let nodeMiddle = head //trỏ đến giữa
//   for (let i = 0; i < middle; i++) {
//     nodeMiddle = nodeMiddle.next
//   }
//   //nodeMiddle đã trỏ đến giữa linked list giờ chỉ cần đảo ngược nó

//   let prev = null //đay sẽ trở thành linked list của linked list thứ 2 bị đảo ngược
//   let current = nodeMiddle

//   while (current !== null) {
//     let nextNode = current.next
//     current.next = prev
//     prev = current
//     current = nextNode
//   }

//   let max = 0

//   temp = head//lúc này nó sẽ trỏ đến đầu danh sách ban đầu
//   while(prev !== null) {
//     max = Math.max(max, prev.val + temp.val)
//     prev = prev.next
//     temp = temp.next
//   }

//   return max
// }



//cách 2: tạo thêm 1 con trỏ di chuyển nhanh nhất
//và khi con trỏ này đi đến cuối r thì cũng là lúc con trỏ khác di chuyển tuần tự qua các node và đến vị trí giữa


var pairSum = function(head) {
    let ans = 0;
    let newList = null;
    let current = head;
    let currHalf = head;//con trỏ di chuyển nhanh

    while (currHalf && currHalf.next) {
        currHalf = currHalf.next.next;

        //Đoạn này để đảo ngược list
        let temp = current.next;
        current.next = newList;
        newList = current;
        current = temp;
    }

    //vòng lặp kết thúc là lúc nửa đầu bị đảo ngược và lưu vào newList
    //lúc này current là con trỏ trỏ đến giữa list

    while (current) {
        ans = Math.max(ans, current.val + newList.val);
        current = current.next;
        newList = newList.next;
    }
    
    return ans;
};


function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(10);
head.next.next.next = new ListNode(4);
head.next.next.next = new ListNode(6);

console.log(pairSum(head)); // Kết quả: 5