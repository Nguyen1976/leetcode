function checkOnesSegment(s: string): boolean {
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '1') {
            while(s[i] === '1') {
                i++
            }
            while(i < s.length) {
                if(s[i] === '1') {
                    return false
                }
                i++
            }
        }
    }


    return true
};
/**
Tìm ra segment đầu tiên (vị trí kết thúc)
nếu sau đó gặp segment thì sẽ return false còn không thì sẽ return true

 */