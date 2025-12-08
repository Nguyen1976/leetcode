function countTriples(n: number): number {
    let res = 0
    for(let i = 3; i < n ; i++) {
        for(let j = 3; j < n; j++) {
            //check
            if(Math.sqrt(i * i + j * j) % 1 === 0 && Math.sqrt(i * i + j * j) <= n && i !== j) {
                res++
            }
        }
    }
    return res

};

//ta sẽ lặp tắt cả các cặp a, b sao cho c <= n

//chia dư cho 1 để check số nguyên