import { sum } from "../sum";

test("Should return sum of two numbers", () => {
  const result = sum(2, 3);
  //Assertion
  expect(result).toBe(5);
});
