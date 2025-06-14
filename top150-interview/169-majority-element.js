/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let candidate = null;
    let count = 0;

    for (let num of nums) {
        if (count === 0) {//Neu count = 0 thi cap nhat candidate
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;//Neu ung vien hien tai = count thi count++ va nguoc lai
    }
    //Sau vong lap kha nang candidate la phan tu chiem da so vi sau moi lan tang giam phan tu chiem uu the duoc giu lai
    //Tu duy khi ma mot phan tu no bang candidate hien tai thi count++ 
    //Khi mot phan tu khac xuat hien thi count--
    //Cho den khi count = 0 tuc la co phan tu khac xuat hien nhieu lan hon candidate len se cap nhat lai

    return candidate;
};
