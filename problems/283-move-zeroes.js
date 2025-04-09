/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let zero = 0
  let available = 0
  let len = nums.length

  while (available < len) {
    // Tìm vị trí có số khác 0
    if (nums[available] !== 0) {
      ;[nums[zero], nums[available]] = [nums[available], nums[zero]]
      zero++
    }
    available++
  }
}

//Ý tưởng: sẽ có 2 con trỏ
//1 con trỏ sẽ luôn trỏ đến 0 và 1 con trỏ khác sẽ luôn trỏ đến vị trí có sẵn
//Chúng ta tư duy ngược thay vì làm cách trên cố gắng đưa 0 về cuối thì hãy tư duy ngược đưa tất cả các số khác 0 về đnăg trước với zero là con trỏ để luôn giữ vị trí sẵn sàng cho các số !== 0