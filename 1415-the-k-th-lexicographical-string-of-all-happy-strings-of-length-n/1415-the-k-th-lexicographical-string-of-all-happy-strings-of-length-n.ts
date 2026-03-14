function getHappyString(n: number, k: number): string {
    let count = 0;
    let result = "";

    const backtrack = (path: string) => {
        if(path.length === n) {
            count++;
            if (count === k) {
                result = path;
            }
            return;
        }

        for(let ch of ['a', 'b', 'c']) {
            if(path.length === 0 || path[path.length - 1] !== ch) {
                backtrack(path + ch)
            }
        }
    }

    backtrack("")
    return result
};

/**
1 chuỗi gọi là happly nếu nó chỉ bao gồm a b c và 2 ký tự cạnh nhau k được = nhau
tạo ra k chuỗi happy và trả vê chuỗi thứ k

có thể dùng backtrack để gen ra các chuỗi
và sẽ cố gắng gen ra theo thứ tự từ điển tránh việc gen toàn bộ và sort
 */