import { Trie } from "../src/trie";

describe("Trie testing", () => {
  const trie = new Trie();
  it("insert word", () => {
    expect(trie.insert('mango')).toBe(true);
    
  });

  it("return false if word already exist", () => {
    expect(trie.insert('mango')).toBe(false);
    console.log(trie.dict);
  });
});
