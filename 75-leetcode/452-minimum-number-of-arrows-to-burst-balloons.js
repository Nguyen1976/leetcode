/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    if(points.length === 0) return 0

    points.sort((a, b) => a[1] - b[1])//sắp xếp theo end
    let arrows = 1

    let end = points[0][1]
    
    for(let i = 1; i < points.length; i++) {
        if(points[i][0] > end) {//nếu quả bóng hiện tại start lớn hơn end tức là nó đang nằm ngoài quả bóng end thì sẽ arr++ và cập nhật end
            arrows++
            end = points[i][1]
        }
    }

    return arrows
};

/*

*/