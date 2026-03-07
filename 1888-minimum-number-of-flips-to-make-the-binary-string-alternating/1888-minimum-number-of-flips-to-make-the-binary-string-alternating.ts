function minFlips(s: string): number {
    const n = s.length
    const ss = s + s

    let alt1 = ""
    let alt2 = ""

    for (let i = 0; i < ss.length; i++) {
        alt1 += i % 2 ? "1" : "0"
        alt2 += i % 2 ? "0" : "1"
    }

    let diff1 = 0
    let diff2 = 0
    let res = Infinity
    let l = 0

    for (let r = 0; r < ss.length; r++) {
        if (ss[r] !== alt1[r]) diff1++
        if (ss[r] !== alt2[r]) diff2++

        if (r - l + 1 > n) {
            if (ss[l] !== alt1[l]) diff1--
            if (ss[l] !== alt2[l]) diff2--
            l++
        }

        if (r - l + 1 === n) {
            res = Math.min(res, diff1, diff2)
        }
    }

    return res
}
/**
Vấn đề bài xét trên cả rotation
=> sliding window trên chuỗi s + s

 */