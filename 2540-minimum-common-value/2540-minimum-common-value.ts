function getCommon(nums1: number[], nums2: number[]): number {
    const n1 = nums1.length, n2 = nums2.length
    let idx1 = 0, idx2 = 0
    
    while(idx1 < n1 && idx2 < n2) {
        if(nums1[idx1] > nums2[idx2]) {
            idx2++
        } else if(nums1[idx1] < nums2[idx2]) {
            idx1++
        } else {
            return nums1[idx1]
        }
    }

    return -1
};