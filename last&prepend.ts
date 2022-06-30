type Last = <T>(a: T[]) => T;
type Prepend = <T, M>(a: T[], b: M) => (T | M)[];

const last: Last = (arr) => arr[arr.length - 1];

const prepend: Prepend = (arr, item) => [item, ...arr];

console.log(last([1, 2, 3, 4]));
console.log(prepend([1, 2, 3, 4], 5));
