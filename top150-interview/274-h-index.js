/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    citations.sort((a, b) => b - a); // Sắp xếp giảm dần
    for (let i = 0; i < citations.length; i++) {
        if (citations[i] < i + 1) {
            return i;
        }
    }
    return citations.length;
};
/*
    Nhà báo cáo có h bài báo và mỗi bài báo có ít nhất h lần trích dẫn
    ví dụ đến bài báo thứ 5 thì bài báo đó phải có ít nhất 5 lần trích dẫn
    Lưu ý: h-index không quan tâm bài báo là bài báo thứ mấy
    Nó chỉ quan tâm đến phân phối của các số lượng trích dẫn.
    có bao nhiêu bài có ít nhất h lần trích dẫn.
    tức là mục đích i sau khi sort là để đếm số bài báo thôi
    hiểu rõ hơn là tìm h max mà h kiểu như là số lượng bài báo có số lần trích dẫn >= h
*/