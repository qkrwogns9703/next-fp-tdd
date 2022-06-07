import { filter } from "./";

const testValue = [1, 2, 3, 5, 6];

const overTwo = (number: number) => number > 2;

describe("filter test", () => {
  it("filter correctly", () => {
    const result = [];
    for (const value of filter(testValue, overTwo)) {
      result.push(value);
    }
    expect(result).toEqual([3, 5, 6]);
  });
});
