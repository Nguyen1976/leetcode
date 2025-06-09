/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let write = 0;//để ghi vào mảng ban đầu
  let read = 0;//để đọc mảng char

  while(read < chars.length) {
    let char = chars[read];
    let start = read;//ghi nhớ read cũ

    while(read < chars.length && chars[read] === char) {
        read++;//sẽ đọc đến khi nào gặp ký tự khác
    }

    chars[write++] = char;//ghi cái ký tự đang được read đọc

    let count = read - start;//lấy read - start sẽ ra được ký tự suất hiện bai nhiêu lần vì bản chất start là cái read bắt đầu đọc

    if(count > 1) {//nếu > 1 thì phải ghi số count đằng sau ký tự đang được đọc vì === 1 thì k phả push thêm '1' vào mảng
        for(c of String(count)) {
            chars[write++] = c
        }
    }
  }

  return write;//số lần đã ghi vào mảng
}

//Đề bài yêu cầu chỉ sửa đổi trên mảng ban đầu lên độ phức tạp không gian phải là O(1)


console.log(compress(['a', 'a', 'b', 'b', 'c', 'c', 'c']))
