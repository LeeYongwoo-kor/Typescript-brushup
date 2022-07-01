interface Words {
  [key: string]: string;
}

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
  get(term: string) {
    return console.log(this.words[term]);
  }
  delete(word: Word) {
    const target = word.term;
    if (target) {
      const { target, ...rest } = this.words;
      this.words = { ...rest };
    }
  }
  update(word: Word) {
    if (this.words[word.term] !== undefined) {
      this.words[word.term] = word.def;
    }
  }
  showAll() {
    return console.log(this.words);
  }
  count() {
    return console.log(Object.keys(this.words).length);
  }
}

class Word {
  constructor(public term: string, public def: string) {}
}

const sushi = new Word("Sushi", "Delicious");
const kimchi = new Word("Kimchi", "So Hot");
const hamburger = new Word("Hamburger", "BIGMAC!!");
const pizza = new Word("Pizza", "PIZZA!!!");
const newKimchi = new Word("Kimchi", "So Cool");

const dict = new Dict();
dict.add(sushi);
dict.get("Sushi");
dict.add(kimchi);
dict.add(hamburger);
dict.add(pizza);
dict.delete(kimchi);
dict.delete(sushi);
dict.update(newKimchi);
dict.add(kimchi);
dict.update(newKimchi);
dict.showAll();
dict.count();
