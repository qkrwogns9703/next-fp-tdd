import { reduce } from "./";

const testValue = [1, 2, 3, 4, 5];

const sum = (number1: number, number2: number) => number1 + number2;

describe("reduce test", () => {
  it("reduce correctly", () => {
    expect(reduce(testValue, sum)).toEqual(15);
  });
  it("reduce init value correctly", () => {
    expect(reduce(testValue, sum, 10)).toEqual(25);
  });
});
