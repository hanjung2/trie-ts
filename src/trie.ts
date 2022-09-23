export class Trie {
  nodes: TrieNode[];
  dict: string[];
  constructor() {
    this.nodes = [];
    this.dict = [];
  }

  insert(word: string): boolean {
    if (this.dict.includes(word)) return false;

    this.dict.push(word);
    return true;
  }
}

export class TrieNode {
  char: string = "";
}
