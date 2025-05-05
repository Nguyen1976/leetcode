/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

class MinHeap {
  constructor() {
    this.heap = []
  }

  insert(val) {
    this.heap.push(val)
    this._bubbleUp() //khi thêm node mới thì phải định nghĩa lại cây
  }

  _bubbleUp() {
    //định nghĩa lại cây khi thêm 1 node
    let idx = this.heap.length - 1 //vị trí cuối mảng
    while (idx > 0) {
      let parent = Math.floor((idx - 1) / 2) //nút cha của idx
      if (this.heap[parent] <= this.heap[idx])
        break //cha nhỏ hơn thì break
      ;[this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]] //hoán đổi vị trí cha và idx trường hợp này là cha đang lớn hơn mà chúng ta lại xây dựng cây minHeap
      idx = parent //gán lại idx để sang vòng lặp mới
    }
  }

  removeMin() {
    if (this.heap.length === 1) return this.heap.pop() //Nếu có 1 phần tử thì lấy nó ra luôn
    const min = this.heap[0]
    this.heap[0] = this.heap.pop()//đừa phần tử cuối vào gốc
    this._bubbleDown()//vì chúng ta thêm vào đầu lên phải định nghĩa lại cây từ node root
    return min
  }

  _bubbleDown() {
    //Định nghiax lại cây khi xóa 1 node
    let idx = 0 //root
    const len = this.heap.length

    while (true) {
      let left = 2 * idx + 1 //node bên trái
      let right = 2 * idx + 2 //node bên phải
      let smallest = idx

      if (left < len && this.heap[left] < this.heap[smallest]) smallest = left //nếu bên trái nhỏ hơn thì cập nhật smalllest
      if (right < len && this.heap[right] < this.heap[smallest])
        smallest = right //ngược lại
      if (smallest === idx) break
      ;[this.heap[idx], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[idx],
      ] //hoán đổi smallest với idx
      idx = smallest
    }
  }

  size() {
    return this.heap.length
  }

  getMin() {
    return this.heap[0] //phần tử root
  }
}
var findKthLargest = function (nums, k) {
  const heap = new MinHeap() //tạo 1 heap min

  for (let num of nums) {
    heap.insert(num)
    if (heap.size() > k) {
      //Khi mà heap vượt quá size k thì sẽ remove min đi
      heap.removeMin()
    }
  }

  return heap.getMin()
}

//Bài toán yêu cầu tìm phần tử lớn thứ k
/**
 * Ý tưởng dùng 1 min heap size là k
 * heap là 1 cây nhị phân mà mỗi nút tra có giá trị >= các nút con (max heap) và ngược lại
 * ví dụ k = 2
 * thì cây min heap có size là 2
 * thì phần tử min của cây min heap có size là 2 sẽ là phần tử cần tìm
 */
