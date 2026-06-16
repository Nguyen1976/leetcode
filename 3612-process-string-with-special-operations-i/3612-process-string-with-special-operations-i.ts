function processStr(s: string): string {
    let result = ''
    for(let o of s) {
        switch(o) {
            case '#':
                result = result + result
                break
            case '*':
                result = result.slice(0, -1)
                break
            case '%':
                result = result.split('').reverse().join('');
                break
            default:
                result += o
                break
        }
    }

    return result
};