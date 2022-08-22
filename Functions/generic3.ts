// 1. Generic Function
function sort<T>(item: T[]): T[] {
  return item.sort();
}

const nums: number[] = [1, 2, 3, 4];
const chars: string[] = ["a", "b", "c", "d", "e", "f", "g"];

sort<number>(nums);
sort<string>(chars);

// 2. Generic Interface
interface GenericLogTextFn {
  <T>(text: T): T;
}
function logText<T>(text: T): T {
  return text;
}
let myString: GenericLogTextFn = logText; // Okay

// 인터페이스에 인자 타입을 강조
interface GenericLogTextFn2<T> {
  (text: T): T;
}
function logText2<T>(text: T): T {
  return text;
}
let myString2: GenericLogTextFn2<string> = logText2;

// 3. Generic Class
class Queue<T> {
  protected data: Array<T> = [];

  push(item: T) {
    this.data.push(item);
  }

  pop(): T | undefined {
    return this.data.shift();
  }
}

const numberQueue = new Queue<number>();

numberQueue.push(0);
numberQueue.push("1"); // 의도하지 않은 실수를 사전 검출 가능
numberQueue.push(+"1"); // 실수를 사전 인지하고 수정할 수 있다.

// 4. Union Type
function getAge(age: number | string) {
  if (typeof age === "number") {
    age.toFixed(); // 정상 동작, age의 타입이 `number`로 추론되기 때문에 숫자 관련된 API를 쉽게 자동완성 할 수 있다.
    return age;
  }
  if (typeof age === "string") {
    return age;
  }
  return new TypeError("age must be number or string");
}

// 5. Generic Constraints
const printMessage = <T extends string | number>(message: T): T => {
  return message;
};

printMessage<string>("1");
printMessage<number>(1);
printMessage<boolean>(false); // error : Type 'boolean' does not satisfy the constraint 'string | number'.

// 6. Generic Keyof
const getProperty = <T extends object, U extends keyof T>(obj: T, key: U) => {
  return obj[key];
};

getProperty({ a: 1, b: 2, c: 3 }, "a");
getProperty({ a: 1, b: 2, c: 3 }, "z"); // error : Argument of type '"z"' is not assignable to parameter of type '"a" | "b" | "c"'.

// 7. Factory Pattern with Generics
interface Car {
  drive(): void;
  park(): void;
}

class Bus implements Car {
  drive(): void {}
  park(): void {}
}

class Taxi implements Car {
  drive(): void {}
  park(): void {}
}

class Suv implements Car {
  drive(): void {}
  park(): void {}
}

class CarFactory {
  static getInstance<T extends Car>(type: { new (): T }): T {
    return new type();
  }
}

const newBus = CarFactory.getInstance(Bus);
const newTaxi = CarFactory.getInstance(Taxi);
