
var StockSpanner = function() {
    this.stack = []//khởi tạo 1 stack lưu các cặp [price, res]
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let res = 1 //result default == 1
    while(this.stack.length > 0 && this.stack[this.stack.length - 1][0] <= price) {
      //If stack tồn tại và lấy ra giá phần tử đầu của stack <= giá hiện tại thì chạy
        res += this.stack.pop()[1]//res + với res của phần tử đầu stack
    }
    this.stack.push([price, res])//lưu chữ ngày hôm này để sử dungjn cho các ngày sau đó
    return res
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */


 /**
  việc chúng ta là tính giá cổ phiếu hiện tại lớn hơn giá bao nhiêu cổ phiếu trước đó
  tức là sẽ luôn thu thập báo giá hằng ngày và giá cổ phiểu hiện tại >= bao nhiêu ngày trước đó và mặc định là 1
  mặc đình res là 1 vì span luôn tính cả ngày hôm nay

  input: ["StockSpanner", "next", "next", "next", "next", "next", "next", "next"]
[[], [100], [80], [60], [70], [60], [75], [85]]


  ví dụ: ngày đầu là 100 thì res mặc định là 1
  ngày 2 là 80 và 80 thì nhỏ hơn 100 res là 1
  ngày 3 price là 60 < 80 res là 1
  ngày 4 price là 70 lớn hơn 60 thì res += 1 là res của ngày trước đó là ngày 3 return 2
  ngày 5 price là 60 nhỏ hơn 70 res là 1
  ngày 6 là 75 lớn hơn 60 res += 1 và lớn hơn 70 res += 2 => return 4
  ngày 7 là 85 tính như cũ return 6
  output: [null, 1, 1, 1, 2, 1, 4, 6]
  */