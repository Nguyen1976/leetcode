function findDifferentBinaryString(nums: string[]): string {
    let result = ''
    let found = false
    let generateBinString = (currString: string) => {
        if(found) return
        if(currString.length === nums.length) {     
            if(!nums.includes(currString)) {
                result = currString
                found = true
            }
            return
        } 

        generateBinString(currString + '0')
        generateBinString(currString + '1')
    }

    generateBinString('')
    return result
};
/**
tìm số k xuất hiện trong mảng
điều kiện độ dài số phải dài bằng độ dài mảng
 */