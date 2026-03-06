function checkOnesSegment(s: string): boolean {
    return !s.includes("01")
};
/**
Tìm ra segment đầu tiên (vị trí kết thúc)
nếu sau đó gặp segment thì sẽ return false còn không thì sẽ return true

Suy nghĩ kĩ hơn trong chuỗi đã đảm bảo k có số 0 đứng đầu vậy chỉ cần trong chuỗi có 01 thì là false
 */