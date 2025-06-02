/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function(a, b, c) {
    let flips = 0


    while(a > 0 || b > 0 || c > 0) {//Khi dịch bit sang phải rồi phải kiểm tra xem là còn bit 1 nào của cả 3 số không tức là còn giá trị k
        let bit_a = a & 1//Lấy bit của a vị trí thấp nhất
        let bit_b = b & 1
        let bit_c = c & 1

        if((bit_a | bit_b) !== bit_c) {//Phải có dấu ngoặc vì mặc định các toán tử nhị phân sẽ độ ưu tiên ít hơn các toán tử khác
            if(bit_c === 1) {
                flips += 1//Nếu bit c là 1 thì tức là sẽ phải lật 1 trong 2 bit a hoặc b
            } else {
                //Nếu bit c là 0
                flips += bit_a + bit_b//Tức là nếu bit nào là 1 thì sẽ phải lật bit đó
            }
        }
        a >>= 1// dịch bit sang phải 1 lần tức là mình đang bỏ cái bit cũ đi tức là cái bit thấp nhất đi ví dụ từ 010 thành 001
        b >>= 1
        c >>= 1
    }

    return flips
};
/*
A & B = A AND B

Ta sẽ lật các số số trong a binary và b binary để a or b = c
Trả về số lần lật

VD2:
4 = 0100; b = 2 = 0010; c = 7 = 0111
Ta chỉ cần lật bit cuối của a hoặc là b thì sẽ ra được kết quả

Ý tưởng:

*/