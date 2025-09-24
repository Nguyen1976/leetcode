function generateParenthesis(n: number): string[] {
    const allCombos = []
    const stackWithData: {open: number, close: number, str: string}[] = [{open: 0, close: 0, str:""}]

    while(stackWithData.length) {
        let {open, close, str} = stackWithData.pop()
        
        if(str.length === n * 2) allCombos.push(str)//điều kiện dừng tức đủ các cặp ngoạc r


        //cơ chế hoạt động sẽ luôn tìm cách cân bằng giữa ( )
        if(open > close) stackWithData.push({open, close: close + 1, str: str + ')'})

        if(open < n) stackWithData.push({open: open + 1, close, str: str + '('})
    }

    return allCombos
};

//Tạo n cặp ngoặc hợp lệ