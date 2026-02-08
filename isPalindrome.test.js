import { describe, test, expect } from "vitest";
import { isPalindrome } from "./isPalindrome.js"; // This will fail initially — that's the point!

describe("isPalindrome function", () => {
  test("returns true for a palindrome", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  test("returns false for a non-palindrome", () => {
    expect(isPalindrome("hello")).toBe(false);
  });
});
