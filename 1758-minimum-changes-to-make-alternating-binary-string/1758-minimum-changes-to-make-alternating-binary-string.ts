function minOperations(s: string): number {
    //trường hợp chuỗi bằts đầu bằng 1

    let changes1 = 0, curr1 = '1'
    let changes2 = 0, curr2 = '0'
    for(let i = 0; i < s.length; i++) {
        if(curr1 !== s[i]) {
            changes1++
        }
        if(curr2 !== s[i]) {
            changes2++
        }
        curr1 === '1' ? curr1 = '0': curr1 = '1'
        curr2 === '1' ? curr2 = '0': curr2 = '1'
    }

    return Math.min(changes1, changes2)
};

//chúng ta có thể thử 2 trường hợp đó là nếu chuỗi bắt đầu là 1 và nếu chuỗi bắt đầu là 0 và tính sự thay đổi