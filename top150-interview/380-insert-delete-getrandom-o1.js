
var RandomizedSet = function() {
    this.map = new Map()
    this.arr = []
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.map.has(val)) {
        return false
    } else {
        this.map.set(val, this.arr.length);//val sẽ đc push vào vị trí arr.length hiện tại
        this.arr.push(val);
        return true;
    }
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(this.map.has(val)) {
        const index = this.map.get(val)//get index của val
        const last = this.arr[this.arr.length - 1]//lấy phần tử cuối

        //mục đích làm vậy vì để xóa mà chỉ tốn O(1)
        this.arr[index] = last//phần tử bị xóa sẽ thành phần từ cuối
        this.map.set(last, index);//set lại phần tử cuối với index mới

        this.arr.pop();//xóa ở cuối
        this.map.delete(val);//xóa val khỏi map
        return true;

    } else {
        return false
    }
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const index =  Math.floor(Math.random() * this.arr.length)
    return this.arr[index]

};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

 //Bài toán có thể dùng set nhưng sẽ k thể truy cập phần tử theo chỉ số nếu vậy ta dùng array với map để tôi ưu bộ nhớ và vì mỗi lần truy random từ set sẽ phải tạo ra bản mới