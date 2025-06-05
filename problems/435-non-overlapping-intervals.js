/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    let result = 0;
    //Sort tăng dần theo phần tử end của cặp
    intervals.sort((a, b) => a[1] - b[1]);
    let prevEnd = intervals[0][1];//Lưu phần tử end đầu tiên của mảng

    for(let i = 1; i < intervals.length; i++) {
        let currentStart = intervals[i][0];
        if(currentStart < prevEnd) {
            //Nếu phần tử đầu tiên của cặp hiện tại nhỏ hơn phần tử end của cặp trước đó thì loại bỏ
            result++;
        } else {
            //Cập nhật phần tử end mới tức là phần tử end hiện tại là prevEnd của cặp tiếp theo
            prevEnd = intervals[i][1];
        }
    }

    return result
};

/**
 * Sắp xếp các cặp mảng theo thứ tự tăng dần của phần tử đầu tiên và loại bỏ cặp  không phù hợp và return về số cặp bị loại bỏ
 */