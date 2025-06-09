/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits) return []

  const digitToLetters = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  }

  let result = []

  let backtrack = (index, path) => {
    if(index === digits.length) {//trường hợp đã đủ độ dài
        result.push(path)
        return//điều kiện dừng
    }
    for(let letter of digitToLetters[Number(digits[index])]) {//Để hiểu vòng lặp này sẽ nhìn sỏ đồ ở bên dưới
        backtrack(index + 1, path + letter)
    }
  }
  backtrack(0, "")

  return result
}

/**
 * Bài toàn yêu cầu đưa ra các tổ hợp từ chữ cái trong mỗi số trên điện thoại
 * với digits là 2 chữ số thì ta sẽ được các tổ hợp có 2 chữ cái
 * Nếu có k chữ số có trung bình m chữ cái thì tổ hộp là m^k
 * 
 * Sở đồ cho ví dụ "23"
 *      ""
         /    |    \
       a      b     c
     / | \  / | \  / | \
    d  e  f d e  f....
    Hiểu vòng lặp là lần đầu tiên sẽ lấy ra chữ cái đầu của số "2" lần tiếp theo sẽ lấy ra các chữ cái của số "3" và ghép lần lượt vào

    Bài này sẽ là O(4^N ∗ N) vì mỗi tổ hơp có 3 or 4 chữ cái thì sẽ có 4^N tổ hợp và mỗi tổ hợp tốn O(N) để xử lý thêm chuỗi mới vào result
 */
