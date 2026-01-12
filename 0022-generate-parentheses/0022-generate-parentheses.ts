function generateParenthesis(n: number): string[] {
    const res: string[] = []
    const backtrack = (path: string, close: number, open: number) => {
        if(path.length === n * 2) {
            res.push(path)
            return
        }

        if(open < n) {
            backtrack(path + "(", close, open + 1)
        }

        if(close < open) {
            backtrack(path + ")", close + 1, open)
        }
    }
    backtrack("", 0, 0)

    return res
};

/**
lưu trạng thái có open, clise 
điều kiện hợp lệ open <= n và close <= n 
không được đóng khi chưa mở 
open phải luôn lớn >= close

cần theo dõi path, open, close
tư duy luôn đưa chuỗi vào đúng hướng

 */