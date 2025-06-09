/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let midx = m - 1 //Phần tử cuối có giá trị != 0 của nums1
    let nidx = n - 1//Phần tử cuối của nums2 
    let right = m + n - 1//vị trí cuối của nums1 và right sẽ là con trỏ giữ vị trí để thêm nums2 vào

    while(nidx >= 0) {
        if(midx >= 0 && nums1[midx] > nums2[nidx]) {
            nums1[right] = nums1[midx]//mục đích là chúng ta sẽ đẩy số hiện tại vào right và right sẽ thế chỗ đó ở vòng lặp sau sẽ rơi vào case dưới và số được thêm vào đúng chỗ
            midx--
        } else {
            nums1[right] = nums2[nidx]
            nidx--
        }
        right--
    }
};
