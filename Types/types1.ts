// basic types
const a: number[] = [1, 2];
const b: string[] = ["a", "b"];
const c: boolean[] = [true, false];

// optional types
type Player = {
  name: string;
  age?: number;
};
const lee: Player = {
  name: "lee",
};
const kim: Player = {
  name: "kim",
  age: 12,
};
