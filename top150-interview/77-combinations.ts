function combine(n: number, k: number): number[][] {
  const result: number[][] = []

  let backtrack = (start: number, path: number[]) => {
    if (path.length === k) {
      result.push([...path])
      return
    }

    //có thể hiểu là ở mỗi cấp thì sẽ thử từng phần tử i và pop là để loại bỏ phần tử vừa thử để sử dụng cho phần tử tiếp theo
    for (let i = start; i <= n; i++) {
      path.push(i)
      backtrack(i + 1, path) //tiếp tục với số tiếp theo
      path.pop() //để backtrack
    }
  }
  backtrack(1, [])
  return result
}

//tạo tất cả các mảng có độ dài là k trong khoảng từ 1->n
