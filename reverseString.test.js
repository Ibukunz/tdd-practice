import { describe, test, expect } from "vitest";
import { reverseString } from "./reverseString.js"; // This will fail at first — expected!

describe("reverseString function", () => {
  test("reverses a simple word", () => {
    expect(reverseString("hello")).toBe("olleh");
  });

  test("handles an empty string", () => {
    expect(reverseString("")).toBe("");
  });
});
