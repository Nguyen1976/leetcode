function earliestFinishTime(landStartTime: number[], landDuration: number[], waterStartTime: number[], waterDuration: number[]): number {
     let ans = Infinity

    let minLandEnd = Infinity

    for (let i = 0; i < landStartTime.length; i++) {
        minLandEnd = Math.min(
            minLandEnd,
            landStartTime[i] + landDuration[i]
        )
    }

    for (let i = 0; i < waterStartTime.length; i++) {
        ans = Math.min(
            ans,
            Math.max(minLandEnd, waterStartTime[i]) + waterDuration[i]//phải max vì phải kết thúc land mới được water
        )
    }

    let minWaterEnd = Infinity

    for (let i = 0; i < waterStartTime.length; i++) {
        minWaterEnd = Math.min(
            minWaterEnd,
            waterStartTime[i] + waterDuration[i]
        )
    }

    for (let i = 0; i < landStartTime.length; i++) {
        ans = Math.min(
            ans,
            Math.max(minWaterEnd, landStartTime[i]) + landDuration[i]
        )
    }

    return ans
};