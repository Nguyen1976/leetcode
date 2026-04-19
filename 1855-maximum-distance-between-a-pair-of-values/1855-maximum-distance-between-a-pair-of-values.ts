function maxDistance(nums1: number[], nums2: number[]): number {
    const n = nums1.length
    const m = nums2.length
    let distance = 0
    for(let i = 0; i < n; i++) {
        //tìm số nhỏ nhất và lớn hơn i bắt đầu từ i
        let left = i + distance, right = m - 1
        while(left <= right) {
            let mid = Math.floor((left + right) / 2)
            if(nums2[mid] >= nums1[i]) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }

        distance = Math.max(distance, left - i - 1)
    }

    return distance
};