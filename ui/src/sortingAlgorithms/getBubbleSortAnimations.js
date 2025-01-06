export function getBubbleSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;

  const n = array.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      animations.push(["comparison1", j, j + 1]);
      animations.push(["comparison2", j, j + 1]);

      if (array[j] > array[j + 1]) {
        animations.push(["swap", j, array[j + 1]]);
        animations.push(["swap", j + 1, array[j]]);
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }

  return animations;
}
