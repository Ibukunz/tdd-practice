import { describe, test, expect } from "vitest";
import { multiply } from "./multiply.js"; // This import will fail initially — that's expected!

describe("multiply function", () => {
  test("multiplies two positive numbers", () => {
    expect(multiply(6, 7)).toBe(42);
  });

  test("multiplies by zero gives zero", () => {
    expect(multiply(99, 0)).toBe(0);
  });
});
