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
  wake: Time;
  startWork: Time;
  endWork: Time;
  sleep: Time;
}

interface WeekendSchedule {
  day: "Saturday" | "Sunday";
  wake: Time;
  familyMeal: Time;
  sleep: Time;
}

declare function printSchedule(schedule: WeekdaySchedule | WeekendSchedule);
