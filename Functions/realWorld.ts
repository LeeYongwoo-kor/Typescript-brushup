type Player<E> = {
  name: string;
  extraInfo: E;
};

const lee: Player<{ favFood: string }> = {
  name: "lee",
  extraInfo: {
    favFood: "bigmac",
  },
};

const kim: Player<null> = {
  name: "lee",
  extraInfo: null,
};

function printAllNumbers(arr: Array<number>) {}
// = function printAllNumbers(arr: number[]) {}
