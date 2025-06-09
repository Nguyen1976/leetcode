/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  const visited = new Set()//Đánh dấu những phòng đã được mở khóa rồi

  //[[1, 3], [3, 0, 1], [2], [0]] ví dụ được nói đến

  //Chúng ta sẽ lấy chìa khóa ở 1 phòng và đi mở khóa các phòng mà nó chứa
  //Tức là lần vào tiếp theo sẽ là những cái phòng được chứa chìa khóa ở phòng hiện tại và tiếp tục ở các phòng tiếp theo được gọi đến
  //Ví dụ như trên phòng 2 chứa chìa khóa của chính nó trong khi các phòng khác k chứa chìa khóa của phòng 2 thì phòng 2 sẽ không bị lặp qua và phòng 2 sẽ k được xuất hiện trong set
  const dfs = (room) => {
    if (visited.has(room)) return
    visited.add(room)


    for (let key of rooms[room]) {
      dfs(key)
    }
  }

  dfs(0)

  //Kiểm tra set có độ lớn bằng mảng ban đầu không nếu bằng tức là các phòng đã được mở khóa 
  return visited.size === rooms.length
}

//Đề bài là sẽ có n-1 phòng từ 0 -> n-1
//Mỗi phòng sẽ chứa mảng các chìa khóa mà nó chứa hãy lấy chìa khòa từ các phòng khác để mở khóa và lấy chìa khóa ở phòng
//Trả về true nếu tắt các các phòng đều được mở
//Trả về false nếu có phòng k truy cập được
