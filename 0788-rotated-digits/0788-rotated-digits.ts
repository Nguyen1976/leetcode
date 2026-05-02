function rotatedDigits(n: number): number {
    let count = 0
    for(let i = 1; i <= n; i++) {
        let s = i.toString()
        let valid = true
        let diff = false
        for(let c of s) {
            if(c === '3' || c === '4' || c === '7') {
                valid = false
                break
            }

            if(c === '2' || c === '5' || c === '6' || c === '9') {
                diff = true
            }
        }
        if(valid && diff) count++
    }

    return count
};

//tức trong range n số 2 và 5 và 6 và 9 là 2 cặp ddeefu là good