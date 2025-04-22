/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const visited = new Array(isConnected.length).fill(false);

    //Tổng thể là tìm các j đang kết nối với i và khi tìm thấy lại tiếp tục tìm từ j
    const dfs = (i) => {
        for(let j = 0; j < isConnected.length; j++) {//vòng lặp để kiểm tra xem có các j nào đang kết nối với i
            if(isConnected[i][j] === 1 && !visited[j]) {//Nếu nó đang dduocj kết nối và j chưa được thăm
                visited[j] = true//đánh dấu là j đã được thăm
                dfs(j)//Gọi đệ quy để duyệt từ j để tìm các thành phần khác đang kết nối với j
            }
        }
    }


    let provinces = 0
    for(let i = 0; i < isConnected.length; i++) {
        if(!visited[i]) {//Nếu như có thành phố chưa được thăm thì tức là đấy là 1 thành phần liên thông 
            visited[i] = true//đánh dấu là thành phố đã được thăm
            dfs(i)//tiếp tục duyệt tìm các thành phần liên thông với i
            provinces += 1
        }
    }

    return provinces
};

//Bài này là tìm số lượng thành phần liên thông
//ví dụ isConnected[i][j] == 1 tức là đỉnh i đang liên thông tới đỉnh j
//Tạo ra 1 mảng visited để đánh dấu là các thành phố đãn được thăm chưa để tránh lặp đi lặp lại tạo ra vòng lặp vô hạn
//Nếu phần tử là true thì nó đã được duyệt qua
//Ban đầu mảng là false
//Chúng ta sẽ bắt đầu từ false và dùng dfs để duyệt sâu đến khi tìm được đường cụt thì tức là những thành phần đánh dấu trong mảng ở vòng lặp hiện tại là true thì nhóm đó là 1 thành phần liên thông
//sau đó lại tiếp tục ở những cái false khác tức là nhưng khởi đầu của nhóm khác và duyệt như trên
