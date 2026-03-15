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
 * Your Fancy object will be instantiated and called as such:
 * var obj = new Fancy()
 * obj.append(val)
 * obj.addAll(inc)
 * obj.multAll(m)
 * var param_4 = obj.getIndex(idx)
 */