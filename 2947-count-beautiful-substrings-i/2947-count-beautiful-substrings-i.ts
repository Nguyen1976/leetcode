function beautifulSubstrings(s: string, k: number): number {
    const arr = s.split('').map((e) => ['a', 'e', 'i', 'o', 'u'].includes(e) ? 1 : -1)
    let res = 0
    const prefix = Array(arr.length + 1).fill(0)
    for(let i = 0; i < arr.length; i++) {
        prefix[i + 1] = prefix[i] + arr[i]
    }
    //[baeyh]
    //[-1, 1, 1, -1, -1]
    //khi nào substring có prefix[r] - prefix[l] = 0

    for(let left = 0; left < s.length; left++) {
        for(let right = left + 1; right <= s.length; right++) {
            if(prefix[right] - prefix[left] === 0) {
                let length = right - left
                if(length % 2 !== 0) continue
                if(Math.pow(length / 2, 2) % k === 0) res++
            }
        }
    }
    return res
};

/**
cho string s và number k
Gọi vowels và consonants là số nguyên âm, phụ âm có trong một chuỗi.
một chuỗi đẹp là khi vowels == consonants
(vowels * consonants) % k == 0
trả về số chuỗi đẹp trong s

dựa trên điều kiện bài toán quy về 
Đếm substring có số nguyên âm = số phụ âm = x, và x² chia hết cho k

thử tưởng tượng mô hình hóa bài toán bằng +1 và -1
và gọi prefix[i] là tổng từ 0 -> i

 */