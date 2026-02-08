import { describe, test, expect } from "vitest";
import { divide } from "./divide.js"; // This will fail initially — good!

describe("divide function", () => {
  test("divides two numbers correctly", () => {
    expect(divide(20, 5)).toBe(4);
  });

  test("returns null when dividing by zero", () => {
    expect(divide(100, 0)).toBe(null);
  });
});
