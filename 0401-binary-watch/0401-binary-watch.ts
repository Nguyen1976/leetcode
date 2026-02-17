function readBinaryWatch(turnedOn: number): string[] {
    const result: string[] = []
    const leds = [8,4,2,1,32,16,8,4,2,1] // 4 giờ + 6 phút

    function backtrack(start: number, count: number, hour: number, minute: number) {
        // đủ số LED
        if (count === turnedOn) {
            if (hour < 12 && minute < 60) {
                result.push(`${hour}:${minute.toString().padStart(2, "0")}`)
            }
            return
        }

        for (let i = start; i < leds.length; i++) {
            if (i < 4) {
                backtrack(i + 1, count + 1, hour + leds[i], minute)
            } else {
                backtrack(i + 1, count + 1, hour, minute + leds[i])
            }
        }
    }

    backtrack(0, 0, 0, 0)
    return result
}
