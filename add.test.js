import { describe, test, expect } from 'vitest';
import { add } from './add.js';   // This import will fail for now — normal!

describe('add function', () => {
  test('adds two positive numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('handles negative numbers', () => {
    expect(add(-4, 7)).toBe(3);
  });
});