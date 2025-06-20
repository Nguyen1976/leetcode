/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxDistance = function(s, k) {
    let max = 0
    let north = 0, south = 0, east = 0, west = 0
    for(let i = 0; i < s.length; i++) {
        const c = s[i]
        switch(c) {
            case 'N':
                north++;
                break
            case 'S':
                south++;
                break
            case 'E':
                east++;
                break
            case 'W':
                west++;
                break
            default:
                break
        }
        const x = Math.abs(north - south)
        const y = Math.abs(east - west)

        const MD = x + y
        const dis = MD + Math.min(2 * k, i + 1 - MD);
        max = Math.max(max, dis)
    }
    return max
};

//N:bắc
//S: nam
//E: đông
//W: tây