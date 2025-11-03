function minCost(colors: string, neededTime: number[]): number {
    let i = 0
    let res = 0

    let arr = colors.split('')

    while(i < arr.length - 1) {

        let k = i + 1
        while(arr[k] === arr[i]) {
            k++
        }
        //k hiện tại sẽ khác với thằng i tức khoảng từ i -> k là giống nhau
        let max = neededTime[i]
        for(let j = i + 1; j < k ; j++) {
            if(max < neededTime[j]) {
                res += max
                max = neededTime[j]
            } else {
                res += neededTime[j]
            }
        }

        i = k
    }

    return res
};

//sẽ gom vùng những quả bóng cùng màu lại và chỉ giữ lại quả có time to nhất 