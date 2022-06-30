type Last = <T>(a: T[]) => T;
type Prepend = <T, M>(a: T[], b: M) => T;

const last: Last = (arr) => {
  return arr[arr.length - 1];
};

const prepend: Prepend = (arr, item) => {
  return [item, ...arr];
};

console.log(last([1, 2, 3, 4]));
