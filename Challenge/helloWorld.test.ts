import { HelloWorld } from "./helloWorld";
test("Type Test", () => {
  expect(HelloWorld).toBeInstanceOf(String);
});
