function minCost(colors: string, neededTime: number[]): number {
    let i = 0
    let res = 0


    while(i < colors.length - 1) {

        let k = i + 1
        let max = neededTime[i]
        while(colors[k] === colors[i]) {
            if(max < neededTime[k]) {
                res += max
                max = neededTime[k]
            } else {
                res += neededTime[k]
            }
            k++
        }
        

        i = k
    }

    return res

};

//sẽ gom vùng những quả bóng cùng màu lại và chỉ giữ lại quả có time to nhất 
/**


 */