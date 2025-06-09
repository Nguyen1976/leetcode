/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let stack = []
  let top = () => stack[stack.length - 1]

  for (let c of s) {
    if (c !== ']') {
      stack.push(c)
    } else {
      let substr = ''
      while (stack.length > 0 && top() != '[') {
        substr = top() + substr
        stack.pop()
      }

      stack.pop()

      let numStr = ''
      while (stack.length > 0 && !isNaN(top())) {
        numStr = top() + numStr
        stack.pop()
      }
      substr = substr.repeat(Number(numStr))

      stack.push(substr)
    }
  }
  return stack.join('')
}
console.log(
  '🚀 ~ 394-decode-string.js:33 ~ decodeString:',
  decodeString('10[a]')
)

//Ý tưởng sẽ push và stack nếu gặp [thì push vào và sẽ push đến khi gặp đóng ]
//lúc đóc sẽ pop lần lượt phần tử ra 1 chuỗi và đến khi gặp [ thì pop() ra cho đến khi gặp số
//nhân chuỗi vx pop ra với số trước dấu [ rồi thêm ngược vào stack

//isNaN: not a number//kiểm tra k phải là số