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

interface Items<T> {
  list: T[];
}

const items: Items<string> = {
  list: ["a", "b", "c"],
};

function wrap<T>(param: T) {
  return {
    param,
  };
}

const wrapped = wrap(10);

// Constraints
type U = string | number | boolean;

// type 식별자 = 타입 구현
type MyType<T extends U> = string | T;

// interface 식별자 { 타입 구현 }
interface IUser<T extends U> {
  name: string;
  age: T;
}

// Conditional Types
// `T`는 `boolean` 타입으로 제한.
interface IUser2<T extends boolean> {
  name: string;
  age: T extends true ? string : number; // `T`의 타입이 `true`인 경우 `string` 반환, 아닌 경우 `number` 반환.
  isString: T;
}

const str: IUser2<true> = {
  name: "Neo",
  age: "12", // String
  isString: true,
};
const num: IUser2<false> = {
  name: "Lewis",
  age: 12, // Number
  isString: false,
};

// infer
type TReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;

function fn(num: number) {
  return num.toString();
}

const a: ReturnType<typeof fn> = "Hello";
