type Words = {
  [key: string]: string;
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
}

class Word {
  constructor(public term: string, public def: string) {}
}

const sushi = new Word("sushi", "oisii");

const dict = new Dict();
dict.add(sushi);
