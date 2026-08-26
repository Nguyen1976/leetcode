function shortestBeautifulSubstring(s: string, k: number): string {
    let totalOnes: number = 0

    for(const ch of s) {
        if(ch === '1') {
            totalOnes++
        }
    }

    if(totalOnes < k) {
        return ""
    }

    let left: number = 0
    let countOne: number = 0

    let res: string = ""

    for(let right = 0; right < s.length; right++) {
        if(s[right] === '1') {
            countOne++
        }

        while(countOne > k || (left <= right && s[left] === '0')) {
            if (s[left] === '1') {
                countOne--;
            }

            left++;
        }
        if (countOne === k) {
            const current: string =
                s.slice(left, right + 1);

            if (
                res === "" ||
                current.length < res.length ||
                (
                    current.length === res.length &&
                    current < res
                )
            ) {
                res = current;
            }
        }
    }

    return res
};