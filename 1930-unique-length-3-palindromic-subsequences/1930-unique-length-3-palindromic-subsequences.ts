function countPalindromicSubsequence(s: string): number {
    let result = 0

    for (let ch = 0; ch < 26; ch++) {
        const char = String.fromCharCode(97 + ch); 
        let first = s.indexOf(char);
        let last = s.lastIndexOf(char);

        if (first === -1 || first === last) continue; // không đủ 2 ký tự

        // Set các ký tự giữa first và last
        const midSet = new Set<string>();
        for (let i = first + 1; i < last; i++) {
            midSet.add(s[i]);
        }

        result += midSet.size;
    }

    return result
};

/**
vì giới hạn là chuỗi đối xứng với 3 ký tự
ta chỉ cần theo dõi ở 2 đầu của chuỗi tức xbx thì là đối xứng ở giữa có thể là bất cứ cái nào

nếu ta đếm các ký tự xuất hiện trong chuỗi và lưu bằng hashtable

VD: aabca
a: 3
b: 1
c: 1

Nếu a chỉ có 2 thì sẽ là số lượng ký tự khác(key) xuất hiện trong table như trên là 2
còn nếu lớn hơn 3 thì sẽ +1 có thể hiểu là size của map lúc đó 
còn <= 1 thì là 0
và ta sẽ lặp qua các key của table với logic tương tự

Xảy ra lỗi với ví dụ thứ 3
Map(3) { 'b' => 4, 'c' => 1, 'a' => 2 }
expected là 4 thay vì 5

ta có bbb bcb bab aca aba

ta đã bỏ qua 1 vấn đề là phải theo dõi vị trí của nó tức trường hợp aca thì c đang xuất hiện 1 bên và a 1 bên 
ta phải check thêm 1 trường họp về vị trí của các chữ cái giả sử với aca thì phải có 1 ký tự a trước c và sau c trong chuỗi thật

ta sẽ lưu các vị trí thay vì số lượng xuất hiện

khi gặp a xuất hiện 3 lần thì ta sẽ có aaa là chắc chắn và kiểm tra các thằng còn lại trong map
khi lặp qua 1 thằng khác trong map có 2 cái cần phải ktra đầu tiên là phải có 1possition a nhỏ hơn 1 position của thằng kia và 1 cái lớn hơn thì hợp lệ

với cách này về space complex k có j đáng ngại vì cấu trúc sẽ là Map<string, number[]>()
khi lặp qua ta sẽ cần lặp qua map trước và trong map sẽ phải lặp qua thêm 1 map nữa và trong map nữa sẽ có 1 phương thức some sẽ lặp qua thằng của map trong và lấy ra value từng thằng tức array và some sẽ phù hợp điều kiện k

tức với cách này giả sử xuất hiện k phần tử trong map thì sẽ là O(k * k * n) vì xuất hiện thằng some

cách ổn nhưng timelimit 


thử suy nghĩ hướng khác giả sử khi lưu a thì mình sẽ tìm cách lưu luôn cả những thằng nằm giữa nó và chỉ quan tâm số lượng và vị trí bắt đầu và kết thúc của a
=> design ra 1 cấu trúc dữ liệu khác
{
    key: {
        length: number,
        start: ...
        end: ...
        midElement: []
        //khi bắt đầu đọc a thì sẽ lưu start khi lại gặp a thì sẽ update end 
    },
    key2: {

    }
}
vẫn phải 2 lần lặp 1 lần build start và end
lần 3 build midElement
bới vì việc ghi nhớ vị trí start và end rồi lên mỗi lần lặp qua 1 key thì chỉ cần tìm những thằng nằm trong nó là xong 
vậy lên O(n * k) so với cách trên nếu 


sau khi đi 1 vòng thì nhận ra chỉ cần start và end là quá đủ vì dựa vào đó hoàn toàn có thể đưa ra lenght vật lên k cần đến data constructure tư duy như cũ nhưng không cần quá cầu kì
 */