class TrieNode {
    children: Record<string, TrieNode>;
    idx: number;
    len: number;

    constructor() {
        this.children = {};
        this.idx = Infinity;
        this.len = Infinity;
    }
}

class Trie {
    root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    update(node: TrieNode, len: number, idx: number) {
        // ưu tiên length nhỏ hơn
        // nếu bằng nhau ưu tiên index nhỏ hơn
        if (
            len < node.len ||
            (len === node.len && idx < node.idx)
        ) {
            node.len = len;
            node.idx = idx;
        }
    }

    insert(word: string, idx: number) {
        let node = this.root;

        this.update(node, word.length, idx);

        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }

            node = node.children[char];

            this.update(node, word.length, idx);
        }
    }

    search(word: string): number {
        let node = this.root;

        for (const char of word) {
            if (!node.children[char]) {
                break;
            }

            node = node.children[char];
        }

        return node.idx;
    }
}

function reverseStr(s: string): string {
    return s.split('').reverse().join('');
}

function stringIndices(
    wordsContainer: string[],
    wordsQuery: string[]
): number[] {

    const trie = new Trie();

    // build trie
    for (let i = 0; i < wordsContainer.length; i++) {
        trie.insert(reverseStr(wordsContainer[i]), i);
    }

    const ans: number[] = [];

    // query
    for (const word of wordsQuery) {
        ans.push(trie.search(reverseStr(word)));
    }

    return ans;
}