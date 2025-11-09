function countOperations(num1: number, num2: number): number {
    if(num1 === 0 || num2 === 0) return 0
    let res = 0
    while(num1 !== num2) {
        res++
        if(num1 >= num2) {
            num1 -= num2
        } else {
            num2 -= num1
        }
    }
    return res + 1

};

//nếu num1 >= num2, phải trừ đi num2 từ num1, nếu không thì trừ num1 từ num2
//trừ đến khi nào num1 === num2