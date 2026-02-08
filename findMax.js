export function findMax(arr) {
  if (arr.length === 0) return undefined; // Optional safety
  return Math.max(...arr);
}
