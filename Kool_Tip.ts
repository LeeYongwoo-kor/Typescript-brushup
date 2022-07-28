// https://codepen.io/pen/ 에서 test가능
// 1. Union Type rather than Enum
const enum Fruit {
  Apple,
  Banana,
  Oragnge,
}

// Union Type
type Fruit2 = "Apple" | "Banana" | "Orange";

// 2. Mapped Type is batter than Index Signature
const PRICE_MAP: { [fruit: string]: number } = {
  Apple: 100,
  Banana: 150,
  Orange: 200,
};

// Mapped Type
const PRICE_MAP2: { [fruit in Fruit2]: number } = {
  Apple: 100,
  Banana: 150,
  Orange: 200,
};

function getDiscountedPrice(fruit: Fruit, discount: number) {
  return PRICE_MAP2[fruit] - discount;
}

// 3. Base type rather than Union
interface WeekdaySchedule {
  day: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday";
  wake: Date;
  startWork: Date;
  endWork: Date;
  sleep: Date;
}

interface WeekendSchedule {
  day: "Saturday" | "Sunday";
  wake: Date;
  familyMeal: Date;
  sleep: Date;
}

declare function printSchedule(schedule: WeekdaySchedule | WeekendSchedule);
// ->
interface Schedule {
  day:
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday";
  wake: Date;
  sleep: Date;
}

interface WeekdaySchedule extends Schedule {
  day: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday";
  startWork: Date;
  endWork: Date;
}

interface WeekendSchedule extends Schedule {
  day: "Saturday" | "Sunday";
  familyMeal: Date;
}

declare function printSchedule(schedule: Schedule);

// 4. Type Guard
function assert(value: any, errorMsg: string): asserts value {
  if (!value) throw new Error(errorMsg);
}

function toString(value?: number) {
  assert(value !== undefined, "value is not always undefined");
  return value.toFixed(2);
}

console.log(toString(30.3563));
console.log(toString());
