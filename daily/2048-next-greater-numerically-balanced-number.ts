function nextBeautifulNumber(n: number): number {
  let i = n + 1

  while (true) {
    const str = i.toString()

    if (str.includes('0')) {
      i++
      continue
    }

    const freq = new Map<string, number>()

    for (const ch of str) {
      freq.set(ch, (freq.get(ch) || 0) + 1)
    }

    let isBeautiful = true
    for (const [digit, count] of freq) {
      if (Number(digit) !== count) {
        isBeautiful = false
        break
      }
    }

    if (isBeautiful) return i
    i++
  }
}

/**
Một số nguyên x được gọi là số cân bằng học nếu với mỗi chữ số d xuất hiện trong x, số lần xuất hiện của d chính xác bằng d.

Ví dụ:
1: chỉ có chữ số 1, xuất hiện 1 lần => cân bằng
22: chữ số 2 xuất hiện 2 lần => cân bằng
122: chữ số 1 xuất hiện 1 lần và chữ số 2 xuất hiện 2 lần => cân bằng

Yêu cầu là: cho số nguyên n, hãy trả về số cân bằng số học nhỏ nhất lớn hơn n

Điều kiện cân bằng: nếu số x chứa chữ số d thì d xuất hiện đúng d lần trong x
Chữ số 0 không được xuất hiện

Cách tiếp cận:
Bắt đầu từ số n và tăng dần lên cho đến khi gặp số cân bằng đầu tiên

 */
