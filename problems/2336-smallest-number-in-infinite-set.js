var SmallestInfiniteSet = function () {
  this.nextSmallest = 1 //số nguyên nhỏ nhất tiếp theo sẽ được lấy ra
  this.addedBack = new Set() //Lưu các số đã bị pop và có thể thêm lại
}

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function () {
  //loại bỏ và trả về số nguyên dương nhỏ nhất
  if (this.addedBack.size > 0) {
    let smallest = Math.min(...this.addedBack) //lấy số nhỏ nhất trong set
    this.addedBack.delete(smallest)
    return smallest
  } else {
    let smallest = this.nextSmallest //nếu chưa có addedBack
    this.nextSmallest += 1
    return smallest
  }
}

/**
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function (num) {
  //Thêm số vào set nếu nó chưa bị thêm lại và nhỏ hơn smallest
  if (num < this.nextSmallest && !this.addedBack.has(num)) {
    //set phải chưa tồn tại num
    this.addedBack.add(num)
  }
}

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */

/**
 * Mỗi lần pop nó sẽ pop 1 số nguyên ra nếu trong addBack có thì sẽ pop trong addback còn không thì sẽ là nextSmallest sẽ tằng tuần từ += 1
 * Hiều như này ta sẽ có 1 tập hợp từ 1 đến 1000 trong set (vì để bài giới hơn đến 1000)
 * và mỗi lần pop sẽ pop số nhỏ nhất trong set tức là pop từ số 1
 * và khi gọi addback điều kiện phải là số đó chưa tồn tại trong set (num < this.nextSmallest) điều kiện này thực hiện điều đó
 * ta mô phòng set chưa có gì và sẽ thêm vào khi addBack với những điều kiện ta tạo ra sẽ được kết quả như vậy (k cần phải có sẵn các num ở trong set)
 *
 */
