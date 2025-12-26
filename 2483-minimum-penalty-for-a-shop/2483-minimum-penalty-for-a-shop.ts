function bestClosingTime(customers: string): number {
    let prefixY = customers.split('').reduce((acc, curr) => curr === "Y" ? acc + 1: acc, 0)
    let prefixN = 0

    let penaty = prefixY, res = 0

    for(let i = 1; i <= customers.length; i++) {
        if(customers[i - 1] === "N") {
            prefixN++
        } else {
            prefixY--
        }

        if(penaty > prefixN + prefixY) {
            penaty = prefixN + prefixY
            res = i
        }
    }

    return res
};

/**
bạn được cho mảng cusomer bao gồm các ký tự N và y
nếu là Y thì tưc là customer đến tại lúc ith giờ
nếu là N tức k có customer nào đến lúc ith giờ

Nếu shop đóng của tại jth giờ thì the penaty được tính như này
mỗi giờ khi mà của hàng mở và k có customer đến thì penaty tăng 1
mỗi giờ khi mà shop đóng và customer đến the penaty tăng 1

trả về min penaty

Ta sẽ có số giờ đóng là jdx và chri được đóng của 1 lần

để min penaty ta phải tìm chỗ đóng sao cho
số N bên phải là ít nhất và số Y bên trái là cao nhất

ta có thể hướng đến 1 cách làm đó chính là prefix
ta cần lưu số lượng N bên trái và Y bên phải để tính penaty

mặc định nếu ở vị trí 0 thì bên phải sẽ bắt đầu tính từ 0
tức Y bên phải tại 0 là prefix và N là 0
jth đổi sang vị trí tiếp theo là 1 chẳng hạn
thì nếu thằng trước tại 0 là N thì N bên tría tăng 1 
ở mỗi vòng lặp j thì penaty là prefixY và N cộng lại
*/