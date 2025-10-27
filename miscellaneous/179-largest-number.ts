function largestNumber(nums: number[]): string {
  const result = nums.map(String)
  result.sort((a, b) => (a + b > b + a ? -1 : 1))
  if (result[0] === '0') return '0'
  return result.join('')
}

/*đề bài yêu cầu từ mảng các số nguyên hiện có tạo ra số lớn nhất
ta sẽ sắp xếp bằng việc cộng các string số lại 
nếu tổng a + b < b + a  thì a sẽ xuống tức để tạo đưuọc số lớn hơn thì a đứng trước sẽ tạo ra chuỗi có giá trị lớn hơn
*/
