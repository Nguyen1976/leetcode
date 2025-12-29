function pyramidTransition(bottom: string, allowed: string[]): boolean {
    const map = new Map<string, string[]>()

    for(const a of allowed) {
        const key = a[0] + a[1]
        if (!map.has(key)) map.set(key, [])
        map.get(key)!.push(a[2])
    }

    const dfs = (curr: string): boolean => {
        if (curr.length === 1) return true

        const nextLevels: string[] = []

        function build(pos: number, path: string) {
            if (pos === curr.length - 1) {
                nextLevels.push(path)
                return
            }

            const key = curr[pos] + curr[pos + 1]
            if (!map.has(key)) return

            for (const ch of map.get(key)!) {
                build(pos + 1, path + ch)//sẽ tiếp tục build cái cây ở từng trường hợp
            }
        }

        build(0, '')

        for (const next of nextLevels) {
            if (dfs(next)) return true
        }

        return false
    }

    return dfs(bottom)
};

/**
Phân tích đề bài mình sẽ xem những khối kim tự tháp con và cái bottom của kim tự tháp lớn
Dựa vào đó để biết những kim tự tháp con nó có thể xây dựng lên cái kim tự tháp lớn k

tự duy sẽ xây dựng từ dưới lên 
giả sử có 1 cái mảng nó sẽ lưu các tầng của kim tự tháp tàng 0 tầng 1 tầng 2 chẳng hạn và mỗi tầng thì ít đi 1 ký tự
giả dụ có bottom bcd là 0 thì 1 phải có 2 ký tự và 2 phải có 1 ký tự
như ở example 1;
khi gặp BCD mình sẽ xét từng cặp 
BC và CD
với BC và CD sẽ tìm trong allowed có thằng nào có đầu là BC và CD k và cộng dồn vào 1 biến 
trong trường hợp chúng ta có nhiều thằng allowed nó đúng thì cần phải backtracking
để dễ dàng trong việc tìm trong allowed thì có thể sử dụng map
và cứ lặp tiếp và dựa vào cái tầng mới xây dựng được
giả sử bottom là 3 thì có 3 tầng cần 1 mảng với kích cỡ là 3
 */