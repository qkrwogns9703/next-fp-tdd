import { map } from "./";

const testValue = [2, 4, 6, 8, 10];

const divideTwo = (number: number) => number / 2;

describe("map test", () => {
  it("map correctly", () => {
    const result = [];
    for (const value of map(testValue, divideTwo)) {
      result.push(value);
    }
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
});
