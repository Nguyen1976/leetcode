function countBinarySubstrings(s: string): number {
    let result = 0, prevCount = 0, currCount = 1;
    for(let i = 1; i < s.length; i++) {
        if(s[i] === s[i - 1]) {
            currCount++;
        } else {
            result += Math.min(prevCount, currCount);
            prevCount = currCount;
            currCount = 1;
        }
    }
    return result + Math.min(prevCount, currCount);
};