function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  const graph = new Map<number, number[]>()

  for (let i = 0; i < numCourses; i++) {
    graph.set(i, [])
  }

  for (const [a, b] of prerequisites) {
    graph.get(b)!.push(a)
  }

  const visited = new Array(numCourses).fill(0)

  const result: number[] = []
  let hasCycle = false

  const dfs = (u: number) => {
    if (visited[u] === 1) {
      //visiting
      hasCycle = true
      return
    }

    if (visited[u] === 2) return //visited

    visited[u] = 1

    for (const v of graph.get(u)!) {
      dfs(v)
      if (hasCycle) return
    }

    visited[u] = 2
    result.unshift(u)
  }

  //không phải lo lắng về việc kết quả k đúng thứ tự khi k bắt đầu từ những khóa cơ bản
  //ví bản chất của dfs topo sort thì luôn thên u và sau khi duyệt qua các phụ thuộc của u vì vậy mọi cạnh u v luôn đảm bảo u được thêm sau v tức là v đã phải hoàn thành thì mới được phép thêm u
  //ví dụ [0,2,1,3]
  //khi chúng ta bắt đầu từ khóa 2 thì 2 chỉ được thêm khi đã duyệt qua 0 vì bản chất là post lên mảng chúng ta phải nguowicj lại như này [3, 1, 2, 0] cũng giống như u -> v vậy u phụ thuộc v thì 2 phụ thuộc 0 lên chúng ta k phải lo việc 2 được thêm mà 0 chưa được duyệt qua phải bắt buộc lặp đến 0 thì 2 mới bắt đầu được thêm
  for (let i = 0; i < numCourses; i++) {
    if (visited[i] === 0) {
      dfs(i)
      if (hasCycle) return []
    }
  }

  return result
}

//sử dụng map xây dựng graph
//Lý thuyết topological sort: sắp xếp các đỉnh trong đồ thị có hướng sao cho mọi cạnh u -> v thì u đứng trước v trong kết quả
//2 cách chính BFS dùng indegreee hoặc DFS dùng post order

//sử dụng DFS sau khi duyệt xong thì push vào stack cuối cùng sẽ nhận về 1 stack đảo ngược bởi vì mình đang đi từ những khóa nâng cao mò về khóa cơ bản
