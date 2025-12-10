function countPermutations(complexity: number[]): number {
    let MOD = 1e9 + 7
    let n = complexity.length
    
    //kiểm tra xem có thằng nào === hoặc nhỏ hơn min root k nếu có thì return về 0
    let min = complexity[0]
    for(let i = 1; i < n; i++) {
        if(min >= complexity[i]) return 0
    }

    //kết quả sẽ là tổ hợp những thằng đăng sau sau khi mình valid xong
    //tức ta giữ nguyên root và hoán vì ngẫu nhiên các phần tử đằng sau 
    //=> ta có (n-1)!
    let ans = 1
    for(let i = 1; i < n; i++) {
        ans = (ans * i) % MOD
    }

    return ans
};