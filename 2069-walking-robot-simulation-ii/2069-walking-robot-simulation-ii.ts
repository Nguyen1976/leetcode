class Robot {
    private w: number = 0
    private h: number = 0
    private direct: number[][] = [[1, 0], [0, 1], [-1, 0], [0, -1]]//1: east, 2: north, 3:west, 4: south
    private resultDirect = ["East", "North", "West", "South"]
    private currDirect = 0
    private x = 0
    private y = 0
    private flag = false //tồn tại 1 điểm khởi đầu tại 0, 0 luôn là east nhưng sau lần di chuyển đầu tiên nếu robot ở điểm 0, 0 thì nó sẽ là south vì robot di chuyển theo chiều kim đồng hồ flag này sẽ cho biết robot đã di chuyển hay chưa

    constructor(w: number, h: number) {
        this.w = w
        this.h = h
    }

    step(num: number): void {
        this.flag = true
        let step = num % ((this.w - 1) * 2 + (this.h - 1) * 2)
        for(let i = 0; i < step; i++) {
            //ktra xem có phải quay không
            //định nghĩa quay là khi robot gặp hướng tường
            //tức ví dụ currDirect = 0 tức đang hướng bắc thì phải ktra x
            if((this.currDirect === 0 && this.x === this.w - 1) || 
                (this.currDirect === 1 && this.y === this.h - 1) ||
                (this.currDirect === 2 && this.x === 0) ||
                (this.currDirect === 3 && this.y === 0)
            ) {
                this.currDirect = Math.floor((this.currDirect + 1) % 4)
            }

            switch (this.currDirect) {
                case 0:
                    this.x += 1
                    break
                case 1:
                    this.y += 1
                    break
                case 2:
                    this.x -= 1
                    break
                case 3:
                    this.y -= 1
                    break
                default:
                    break
            }
        }

        //logic phía trên k ổn dẫn đến timelimit
    }

    getPos(): number[] {
        return [this.x, this.y]
    }

    getDir(): string {
        if(this.x === 0 && this.y === 0 && this.flag) {
            return "South"
        }
        return this.resultDirect[this.currDirect]
    }
}

/**
 * Your Robot object will be instantiated and called as such:
 * var obj = new Robot(w, h)
 * obj.step(num)
 * var param_2 = obj.getPos()
 * var param_3 = obj.getDir()
 */