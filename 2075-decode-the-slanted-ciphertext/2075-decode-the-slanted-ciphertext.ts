function decodeCiphertext(encodedText: string, rows: number): string {
    const len = encodedText.length, cols = len / rows
    let plainText = ""
    for(let i = 0; i < cols; i++) {
        //start tại 0, i
        for(let j = 0; j + i < cols && j < rows; j++) {
            const idx = j * cols + j + i
            plainText = plainText + encodedText[idx]
        }
    }

    return plainText.trimEnd()
};

/**
lenght / row => col
cách duyệt
bắt đầu từ những ký tự từ hàng đầu tiên
ví dụ khi bắt đầu tại 0 0 thì tiếp theo sẽ là 1 1 
khi bắt đầu từ 0, 1 tiếp theo sẽ là 1, 2

 */