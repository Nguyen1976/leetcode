/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0, right = numbers.length - 1
    while(left < right) {
        if(numbers[left] + numbers[right] === target) {
            return [left + 1, right + 1]
        } else if(numbers[left] + numbers[right] > target) {
            right--
        } else {
            left++
        }
    }
    return
};