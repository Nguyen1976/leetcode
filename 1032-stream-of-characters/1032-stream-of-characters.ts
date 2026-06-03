class TrieNode {
  children = new Map<string, TrieNode>()
  isEndOfWord = false
}

class Trie {
  root = new TrieNode()

  insert(word: string) {
    let current = this.root

    for (const char of word) {
      if (!current.children.has(char)) {
        current.children.set(char, new TrieNode())
      }

      current = current.children.get(char)!
    }

    current.isEndOfWord = true
  }

  matchPrefix(input: string): boolean {
    let current = this.root

    for (const char of input) {
      if (!current.children.has(char)) {
        return false
      }

      current = current.children.get(char)!

      // chỉ cần match được 1 word
      if (current.isEndOfWord) {
        return true
      }
    }

    return false
  }
}

function reverseString(str: string): string {
  const chars = Array.from(str)

  for (
    let i = 0, j = chars.length - 1;
    i < j;
    i++, j--
  ) {
    [chars[i], chars[j]] = [chars[j], chars[i]]
  }

  return chars.join('')
}

class StreamChecker {
    private trie: Trie
    private s = ''
    constructor(words: string[]) {
        this.trie = new Trie()
        for(let w of words) {
            this.trie.insert(reverseString(w))
        }
    }

    query(letter: string): boolean {
        this.s = letter + this.s
        return this.trie.matchPrefix(this.s)
    }
}


/**
 * Your StreamChecker object will be instantiated and called as such:
 * var obj = new StreamChecker(words)
 * var param_1 = obj.query(letter)
 */