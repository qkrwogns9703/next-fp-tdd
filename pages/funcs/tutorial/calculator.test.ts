import { add } from "./calculator";

describe("add test", () => {
  it("add correctly", () => {
    expect(add(3, 5)).toBe(8);
  });
});
