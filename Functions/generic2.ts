interface GoodsInfo {
  name: string;
  origin: string;
  price: number;
}

interface Vegetable extends GoodsInfo {
  freshness: number;
}

interface Fruit extends GoodsInfo {
  sugarContent: number;
}

function merge(a: Vegetable, b: Fruit): Vegetable & Fruit {
  const { price: vPrice } = a;
  const { price: fPrice } = b;
  const totalPrice = vPrice + fPrice;
  return {
    ...a,
    ...b,
    totalPrice,
  };
}

const cucumber: Vegetable = {
  name: "Pretty Cucumber",
  origin: "Japan",
  price: 50000,
  freshness: 100,
};

const melon: Fruit = {
  name: "Ugly Melon",
  origin: "Taiwan",
  price: 2500,
  sugarContent: 80,
};

console.log({ ...merge(cucumber, melon) });

function merge2<A, B>(a: A, b: B): A & B {
  return {
    ...a,
    ...b,
  };
}
