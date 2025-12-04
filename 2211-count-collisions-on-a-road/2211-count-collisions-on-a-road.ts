function countCollisions(directions: string): number {
    let stack: string[] = [];
    let collision = 0;

    for (let curr of directions) {
        if (curr === 'R') {
            stack.push('R');
            continue;
        }

        if (curr === 'S') {
            // R -> S : tất cả R trước đó dừng lại
            while (stack.length && stack[stack.length - 1] === 'R') {
                collision += 1;
                stack.pop();
            }
            stack.push('S');
            continue;
        }

        if (curr === 'L') {
            if (stack.length === 0) {
                stack.push('L');
                continue;
            }

            let top = stack[stack.length - 1];

            if (top === 'S') {
                // L -> S : L va vào S
                collision += 1;
                stack.push('S');
            } else if (top === 'R') {
                // R -> L : đối đầu
                collision += 2;
                stack.pop();           
                // Sau khi va chạm, tất cả R liên tục phía trước cũng thành S
                while (stack.length && stack[stack.length - 1] === 'R') {
                    collision += 1;
                    stack.pop();
                }
                stack.push('S');
            } else { 
                // L gặp L trước đó
                stack.push('L');
            }
        }
    }

    return collision;
}
