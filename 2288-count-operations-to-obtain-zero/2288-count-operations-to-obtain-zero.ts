function countOperations(num1: number, num2: number): number {
    let res = 0;
    while (num1 && num2) {
        res += Math.floor(num1 / num2);
        num1 %= num2;
        [num1, num2] = [num2, num1];
    }
    return res;
}

//nếu num1 >= num2, phải trừ đi num2 từ num1, nếu không thì trừ num1 từ num2
//trừ đến khi nào num1 === num2