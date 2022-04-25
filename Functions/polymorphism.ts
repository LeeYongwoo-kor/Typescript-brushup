type ArrPrint = {
  <T, M>(arr: T[], secParam: M): T;
};

const arrPrint: ArrPrint = (arr) => arr[0];

const ap = arrPrint([1, 2, 3, 4], "hi");
const bp = arrPrint([true, false], 50000);
const cp = arrPrint(["hi", "hello"], { say: "hello" });
const dp = arrPrint([1, 2, true, false], [1, 2, 3]);
