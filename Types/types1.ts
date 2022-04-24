// basic types
const a: number[] = [1, 2];
const b: string[] = ["a", "b"];
const c: boolean[] = [true, false];

// optional types (Alies Type)
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

const playerMaker = (name: string, age?: number): Player => {
  return {
    name,
    age,
  };
};
// const playerMaker = (name: string, age?: number): Player => ({name, age})

const park = playerMaker("park");
park.age = 99;
