function isOneBitCharacter(bits: number[]): boolean {
    let start = 0

    while(start < bits.length) {
        if(bits[start] === 1) {
            start += 2
        } else {
            if(start === bits.length - 1) return true
            start++
        }
    }

    return false
};

//các kí tự 2 bit là 10 và 11 còn lại sẽ là ký tự 1 bit và kiểm tra kí tự cuoosii cùng có phải là ký tự 1 bit không
/**
Quy trình sẽ lặp từ trái sang phải nếu bắt đầu là 1 thì sẽ luôn là kỹ tự 2 bit thì bước nhảy là 2
những nếu nhảy bước tiếp theo mà ký tự là 0 thì đó là bit 1 
 */