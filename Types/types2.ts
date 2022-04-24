const numbers: readonly number[] = [1, 2, 3, 4];
// Immutable

const tuple: [string, number, boolean] = ["hi", 1, true];

const jscode: any[] = [];
// escaped from typescript!

let unknown: unknown;
if (typeof unknown === "number") unknown++;

const hello = () => console.log("hello");
// void : can be skip declare

function hello2(): never {
  throw new Error("HELLO");
  // return "HELLO"; -> error!
}

function hello3(name: string | number) {
  if (typeof name === "string") {
    name; // type: string
  } else if (typeof name === "number") {
    name; // type: number
  } else {
    name; // type: never, never ever run
  }
}
