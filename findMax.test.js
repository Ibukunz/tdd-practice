import { describe, test, expect } from "vitest";
import { findMax } from "./findMax.js"; // This will fail at first — expected!

describe("findMax function", () => {
  test("finds the maximum in an array of positive numbers", () => {
    expect(findMax([3, 1, 4, 1, 5, 9])).toBe(9);
  });

  test("finds the maximum when array includes negative numbers", () => {
    expect(findMax([-10, -3, 0, -25, 2])).toBe(2);
  });
});
