function isUgly(n: number): boolean {
    if(n <= 0) return false

    let primes: number[] = [2, 3, 5]

    for(let item of primes) {
        while(n % item === 0) {
            n /= item
        }
    }

    return n === 1
}; 

//số xấu là số k có thừa số nguyên dương nào khác ngoài 2 3 5
/**
ta sẽ lấy n chia hết cho 1 trong 3 số kia và cứ chia nếu kết quả cuối cùng là n== 1 thì là đúng  vì 1 k phải số nguyên tố còn nếu n dư ra 1 số khác 1 thì là sao
 */
//hoặc là trong đố k có thừa số nguyên tố nào