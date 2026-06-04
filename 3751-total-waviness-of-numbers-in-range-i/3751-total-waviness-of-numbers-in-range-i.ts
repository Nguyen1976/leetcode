function totalWaviness(num1: number, num2: number): number {
    let res = 0
    for(let i = num1; i <= num2; i++) {
        let s = String(i).split('')
        const n = s.length

        for(let j = 1; j < n - 1; j++) {
            //ở mỗi số luôn check đầu cuối
            if(s[j] > s[j + 1] && s[j] > s[j - 1]) {
                res++
            }
            
            if(s[j] < s[j + 1] && s[j] < s[j - 1]) {
                res++
            }

        }
    }

    return res
};

/**
cần quan tâm những số ở giữa
ví dụ 120 là đạt đỉnh tại số 2 ta có thể cộng vào res 1
121 cũng vậy
122 123 bắt đầu từ 123 trở đi dạng tăng dần
và nếu nó ở dạng tăng hoặc giảm dần thì sẽ k được chấp nhận
trong trườn hợp3 lớn hơn số ở giữa hoặc bnawgf số ở giữa thì sẽ k chấp nhận
suy nghĩ việc chuyển sang string để dễ sửl ý 
trong trường hợp sử dụng số thống thường việc ++ là dễ  nhưng sẽ khó bóc tách các chữ số
có thể thử ở mỗi số đều sẽ lưu dạng string của nó tức đổi i sang mảng char
và viết logic xử lý cho mảng char đó
 */