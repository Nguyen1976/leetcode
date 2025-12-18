function maxProfit(prices: number[], strategy: number[], k: number): number {
    const n = strategy.length

    let base = prices.reduce(
        (acc, curr, idx) => acc + curr * strategy[idx], 0
    )

    let half = k/2

    const preA = new Array(n + 1).fill(0);//gain của A nếu i bị đổi thành 0
    const preB = new Array(n + 1).fill(0);//nếu bị đổi thành sell

    for (let i = 0; i < n; i++) {
        const A = -strategy[i] * prices[i];
        const B = (1 - strategy[i]) * prices[i];

        preA[i + 1] = preA[i] + A;
        preB[i + 1] = preB[i] + B;
    }

    let maxGain = 0
    for (let l = 0; l + k <= n; l++) {
        const gainFirstHalf =
            preA[l + half] - preA[l];
        const gainSecondHalf =
            preB[l + k] - preB[l + half];

        const totalGain = gainFirstHalf + gainSecondHalf;
        maxGain = Math.max(maxGain, totalGain);
    }


    return base + maxGain;
};

/**
prices[i] là giá cổ phiếu tại ngày i
strategy[i] đại diện cho hành động trao đổi vào ngày i
-1 chỉ ra mua 1 đơn vị cổ phiếu
0 là giữ cổ phiếu
1 là bán

Bạn cũng được cấp một số nguyên k chẵn và có thể thực hiện nhiều nhất một sửa đổi đối với chiến lược. Một sửa đổi bao gồm
Chọn đúng k phần tử liên tiếp trong chiến lược.
Đặt k/2 phần tử đầu tiên thành 0 (giữ).
Đặt k/2 phần tử cuối cùng thành 1 (bán)

lợi nhuận được xác định là tổng của strategy[i] * prices[i] qua các ngày
mọi hành động mua bán đều khả thi keer cả trong quá khứ

approach
tính lợi nhuận ban đầu

 */