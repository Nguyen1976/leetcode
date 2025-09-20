interface Dict {
  [key: string]: Dict
}

class WordDictionary {
  private dict: Dict
  constructor() {
    this.dict = {}
  }

  addWord(word: string): void {
    const chars = word.split('')

    let acc = this.dict

    for (let i = 0; i < chars.length; i++) {
      const char = chars[i]

      if (!acc[char]) acc[char] = {}

      acc = acc[char]
    }

    acc['_'] = {} //tức là đánh dấu kết thúc
  }

  search(word: string, acc: Dict = this.dict): boolean {
    const chars = word.split('')
    const char = chars[0]

    if (chars.length === 0 && acc['_']) return true

    if (char === '.') {
      for (let key in acc) {
        if (this.search(word.slice(1), acc[key])) return true
      }
      return false
    } else if (!acc[char]) return false

    return this.search(word.slice(1), acc[char])
  }
}
var obj = new WordDictionary()

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)

sử dụng map hoặc object sẽ lưu dưới dạng string và object
dữ liệu sẽ lưu dưới dạng như sau  
data: any = {
    'b': {
      'a': {
        'd': {
          '_': {
          }
        }
      },
    },
  }

  nghiệp vụ là search ta sẽ phải đệ quy đầu tiên nếu như gặp dấu chấm tức là bỏ qua cấp hiện tại sẽ tự động nhay vào cấp sau tức là nhảy vào tất cả các key của cấp hiện tại
  và gọi đệ quy với các phần từ tiếp theo và ở cái con trỏ trỏ đến bên trong các key con của key hiện tại
  Nếu không phải dấu chấm mà phần tử sai return false
  còn đùng thì sẽ đệ quy ở phần tử còn lại với key tiếp theo

 */
