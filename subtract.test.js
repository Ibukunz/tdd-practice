import { describe, test, expect } from "vitest";
import { subtract } from "./subtract.js"; // This will fail for now — expected!

describe("subtract function", () => {
  test("subtracts smaller number from larger", () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test("subtracting a negative number is like adding", () => {
    expect(subtract(5, -3)).toBe(8);
  });
});
