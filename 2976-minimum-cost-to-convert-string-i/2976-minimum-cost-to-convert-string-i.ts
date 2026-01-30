function minimumCost(source: string, target: string, original: string[], changed: string[], cost: number[]): number {
    const INF = 1e15;
    const dist: number[][] = [];
    for (let i = 0; i < 26; i++) {
        dist[i] = [];
        for (let j = 0; j < 26; j++) {
        dist[i][j] = INF;
        }
        dist[i][i] = 0; // đặt sau khi tạo hàng
    }

    for(let i = 0; i < original.length; i++) {
        const u = original[i].charCodeAt(0) - 97; // 'a'
        const v = changed[i].charCodeAt(0) - 97;
        dist[u][v] = Math.min(dist[u][v], cost[i]);
    }
    //sau bước này chúng ta được ma trận base dựa vào đề bài

    //Floyd–Warshall
    //hiểu đơn giản ở mỗi k thì mình sẽ xem nó có phải là cầu nối giữ 2 node nào đó k và quảng đường đó có phải min so với phần có sẵn k

    //hiểu nôm na đoạn code logic nó kiểm tra có quãng đường từ i -> k và từ k -> j không nó sẽ là trung gian đi từ i -> j
    for(let k = 0; k < 26; k++) {
        for(let i = 0; i < 26; i++) {
            for(let j = 0; j < 26; j++) {
                if(dist[i][k] !== INF && dist[k][j] !== INF) {
                    dist[i][j] = Math.min(
                        dist[i][j],
                        dist[i][k] + dist[k][j]
                    );
                }
            }
        }
    }


    let total = 0;

    for (let i = 0; i < source.length; i++) {
        if (source[i] === target[i]) continue;

        const s = source.charCodeAt(i) - 97;
        const t = target.charCodeAt(i) - 97;

        if (dist[s][t] === INF) {
        return -1;
        }

        total += dist[s][t];
    }

    return total;
};
/**
source = target = n
orginal changed and cost
cost[i] đại diện cho tiền mà 1 ký tự thay đổi từ original[i] => changed[i]
bắt đầu với string source, trong 1 hoạt động chọn char x từ string và thay đổi nó sang y với cost z nếu tồn tại bất kì 
idx j ví dụ: costj = z originalj = x và changedj = y4
trả về số tiền nhỏ nhất để convert string source sang target nếu k thể thì return -1

Phần khó của bài toàn đó chính là có thể tại 1 ký tự nhưng có thể mất nhiều hơn 1 lần chuyển
kỹ thuật Floyd–Warshall
for k in 0..25:
    for i in 0..25:
        for j in 0..25:
            dist[i][j] = min(
                dist[i][j],
                dist[i][k] + dist[k][j]
            )
 */