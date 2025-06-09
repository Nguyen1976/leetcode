var Trie = function () {
  this.root = {}
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let node = this.root
  for(let char of word) {
    if(!node[char]) {//Nếu chưa có tạo mới
      node[char] = {}
    }
    node = node[char] //di chuyển xuống node con
  }
  node.isEnd = true//đánh dấu đây là node kết thúc
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let node = this._findNode(word)//tìm node và trả về node cuối
  return node !== null && node.isEnd === true
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  return this._findNode(prefix) !== null
};

Trie.prototype._findNode = function (str) {
  let node = this.root
  for(let char of str) {
    if(!node[char]) {
      return null//nếu k tìm thấy
    }
    node = node[char] //di chuyển sang node tiếp theo
  }

  return node
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

var trie = new Trie();
trie.insert('apple');
trie.search('apple'); // return True
trie.search('app'); // return False
trie.startsWith('app'); // return True
trie.insert('app');
trie.search('app'); // return True

console.log(trie)