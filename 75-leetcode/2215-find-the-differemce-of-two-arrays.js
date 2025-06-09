/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let set1 = new Set(nums1)
    let set2 = new Set(nums2)

    let diff1 = new Set();
    for(let num1 of set1) {
        if(!set2.has(num1)) {
            diff1.add(num1)
        }
    }

    let diff2 = new Set();
    for(let num2 of set2) {
        if(!set1.has(num2)) {
            diff2.add(num2)
        }
    }

    return [[...diff1], [...diff2]]
};

