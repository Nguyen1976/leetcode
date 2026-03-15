class Fancy {
    private mod: bigint;
    private values: bigint[];
    private a: bigint;
    private b: bigint;

    constructor() {
        this.mod = BigInt(10 ** 9 + 7);  
        this.values = [];                
        this.a = 1n;                    
        this.b = 0n;                    
    }

    private power(base: bigint, exp: bigint): bigint {
        let res = 1n;
        base %= this.mod;
        while (exp > 0n) {
            if (exp % 2n === 1n) res = (res * base) % this.mod;
            base = (base * base) % this.mod;
            exp /= 2n;
        }
        return res;
    }

    private modInverse(n: bigint): bigint {
        return this.power(n, this.mod - 2n);
    }

    public append(val: number): void {
        let valBI = BigInt(val);
        let invA = this.modInverse(this.a);
        let x = ((valBI - this.b + this.mod) % this.mod * invA) % this.mod;
        this.values.push(x);
    }

    public addAll(inc: number): void {
        this.b = (this.b + BigInt(inc)) % this.mod;
    }

    public multAll(m: number): void {
        let mBI = BigInt(m);
        this.a = (this.a * mBI) % this.mod;
        this.b = (this.b * mBI) % this.mod;
    }

    public getIndex(idx: number): number {
        if (idx >= this.values.length) 
            return -1;
        let result = (this.a * this.values[idx] + this.b) % this.mod;
        return Number(result);
    }
}

/**
Hướng giải quyết bài toán này thay vì mỗi lần chúng ta thực hiện 1 thao tác ta phải biến đổi mảng gây ra tình trạng timeout 
thì ta chỉ cần lưu các operation dưới dạng a và b
khi lấy ra thì real là a*x + b
nếu có operation là + thì tăng b
nếu là nhận thì nhân và a và b với m
giả dụ ta có 2 phần từ và đã có a và b của riêng nó 
nếu thêm phần từ mới thì a và b sẽ k dùng để lấy ra real của phần tử mới vì a và b k phải của nó
vậy thì ta sẽ biến đổi sao cho ví dụ append 4 thì hãy lưu giá trị mà sau khi biến đổi với a và b cũ thì nó sẽ ra 4
ví dụ a = 2 b = 3
=> cần lưu giá trị 0,5

nhưng đề bài yêu cầu mọi thứ phải tính theo mod 1e9 + 7
và trong số học mod thì k có phép chia vì nó k có nghĩa

ví dụ trên 1/2 ta phải biến đổi thành 1 * 2^-1
sau đó ta phải tìm mod inverse của 2
 */