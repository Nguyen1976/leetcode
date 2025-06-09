var RecentCounter = function () {
  this.queue = [] //đây là 1 queue thêm đầu và lấy ở cuối
}

/**
 * @param {number} t
 * @return {number}
 */
//nó phải nằm trong khoảng từ [t-3000, t]
//Tức là vì t luôn tăng chúng ta sẽ kiểm tra cái t ở top tức là nó là phần tử được thêm vào đầu tiên
//Nếu nó k lằm trong khoảng thì sẽ pop nó đi
//và sẽ pop hết những giá trị k nằm trong khoảng thì thôi
//vì t luôn tăng dần lên chỉ cần pop đến giá trị hợp lệ thì đảm bảo các giá trị khác đều đúng
RecentCounter.prototype.ping = function (t) {
  this.queue.push(t)

  while(this.queue[0] < t - 3000) {//chạy khi top k nằm trong khoảng
    this.queue.shift();
  }

  return this.queue.length;
}

//khi sử dụng unshift và pop sẽ được 1 queue tức là phía bên tay phải là phần lấy ra và đầu mảng là phần thêm vào
//Ngược lại chúng ta dùng shift để xóa đầu vào push thêm cuối(recommend cách này vì nó dễ hiểu hơn)
var obj = new RecentCounter()
obj.ping(1)
obj.ping(100)
obj.ping(3001)
obj.ping(3002)

console.log(obj)
