var MinStack = function () {
  this.stack = []
  this.min = Infinity
}

MinStack.prototype.push = function (val) {
  this.stack.push(val)
  this.min = Math.min(this.min, val)
}

MinStack.prototype.pop = function () {
  const num = this.stack.pop()

  // Cập nhật lại this.min nếu phần tử bị xóa chính là min hiện tại
  if (num === this.min) {
    // Nếu stack rỗng thì reset min về Infinity
    if (this.stack.length === 0) {
      this.min = Infinity
    } else {
      // Tìm lại giá trị nhỏ nhất trong stack
      let newMin = this.stack[0]
      for (let n of this.stack) {
        if (n < newMin) newMin = n
      }
      this.min = newMin
    }
  }
}

MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1]
}

MinStack.prototype.getMin = function () {
  return this.min
}
