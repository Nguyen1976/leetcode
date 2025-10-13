function wordBreak(s: string, wordDict: string[]): boolean {
    const wordSet = new Set(wordDict)

    const dp = Array(s.length + 1).fill(false)

    dp[0] = true

    for(let i = 1; i <= s.length; i++) {
        for(let j = 0; j < i; j++) {
            if(dp[j] && wordSet.has(s.substring(j, i))) {
                dp[i] = true
                break
            }
        }
    }

    console.log(dp)

    return dp[s.length]
};

/**
    Sử dụng set cho lookup O(1)
    tạo mảng dp false

    mặc đnjh dp[0] = true vì empty là true

    và kiểm tra cái substring từ j đến i có nừm trong wordset k và và dp tại j phải là true
    thì set dp[i] = true

    và dp[s.length] là kết quả cuối cùng


    và dp[i] là true nếu chuỗi con từ 0 -> i - 1 tức tiền tố có đọ dài i của s có thể được phân đoạn thành các từ trong worDict. Ngược lại là false

    cơ sở là dp[0] tức một chuỗi trống thì tiền tố độ dài 0 luôn được coi là phân đoạn vì k cần từ nào

    Để xác định dp[i] có thể phânđoạn k cần xết các vị trí phần tách j từ 0->i-1 nếu dp[j] là tru nghĩa từ 0->j có thể phân đoạn  và chuỗi con j -> i-1 phần còn lại ở tiền tố có độ dài j sau khi tách ở j có tồn tại trong word dist thì dp[i] là true

    => công thức tổng quát dp[i] = true nếu tồn tại j sao cho dp[j] là true j nằm trong 0->i

    và s.substring(j, i) có trong worddict

    tưc là ở mỗi vòng lặp i chúng ta xét từ 0->i nếu gặp chỗ nào j bằng true mà từ j đến i lại tồn tại word trong từ điển thì i tại đó đúng tức có thể phân đoạn từ 0-> i tại đó

câu hỏi tại sao phải kiếm tra dp[j] có true không bởi ví chúng ta phải xác định tiền tố của j là đúng truowcskhi xác định phần tiếp theo vì tiền tố j sai thì kết quả không có ý nghĩa

 */