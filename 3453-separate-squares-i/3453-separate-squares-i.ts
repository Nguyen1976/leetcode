function separateSquares(squares: number[][]): number {
    let total = 0
    let minY = Infinity
    let maxY = -Infinity

    for(let [x, y, l] of squares) {
        total += l * l
        minY = Math.min(minY, y)
        maxY = Math.max(maxY, y + l)
    }

    let target = total / 2

    let areaBelow = (k: number) => {
        let sum = 0
        for(let [x, y, l] of squares) {
            let top = y + l
            if(k <= y) continue //vì tính diện tích phía dưới 
            if (k >= top) sum += l * l
            else sum += l * (k - y)//trường hợp cắt ngang
        }

        return sum
    }

    let left = minY, right = maxY
    for(let i = 0; i < 60; i++) {//60 đủ để chính xác đến số double
        let mid = (left + right) / 2
        if (areaBelow(mid) < target) left = mid
        else right = mid
    }
    return left
};

/**
Tư duy toán học
vì bài yêu cầu tìm giá trị tọa độ y nhỏ nhất để cắt
và y thuộc [yi, yi + li]
giả sử ta cắt y = k 

diện tích phía dưới sẽ là Ai = (k-y) * li

tổng diện tích phía dưới là tổng Ai(k)
tổng diện tích cả hình là T = li^2
Ta cần tìm F(k)
 = T/2 và tìm k

ta có thể dùng binary search tìm k trên trục y

không gian tìm kiếm là [minYi, max(yi + li)]
và tìm sao cho F(k) = T/2



 */