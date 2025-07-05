/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1 || numRows >= s.length) return s

  const rows = new Array(numRows).fill().map(() => [])
  //Sẽ điền các phần từ vào từng vị trí của mảng lần lượt ví dụ từ i->numRows rồi lại về i rồi cứ tiếp tục
  let idx = 0 //index để điền vào mảng rows
  let direction = false //Tức là đang đi đúng hướng ban đầu và bằng true là đang đi ngược lại
  for (let c of s) {
    rows[idx].push(c)
    direction ? idx-- : idx++
    if (idx === 0) direction = false
    if (idx === numRows - 1) direction = true
  }

  return rows.flat().join('')
}
