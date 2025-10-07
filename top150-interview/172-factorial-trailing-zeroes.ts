function trailingZeroes(n: number): number {
  let res = 0
  while (n > 0) {
    n = Math.floor(n / 5)
    res += n
  }
  return res
}

/*
Một chữ số 0 ở cuối xuất hiện khi có cặp (2, 5) trong tích n!.
Tức giờ chỉ cần đếm số lượng thừa số 5 xuất hiện
*/
