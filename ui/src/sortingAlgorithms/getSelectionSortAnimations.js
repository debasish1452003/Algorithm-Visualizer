export function getSelectionSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;

  const n = array.length;

  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;

    for (let j = i + 1; j < n; j++) {
      animations.push(["comparison1", j, minIdx]); // Color change for comparison
      animations.push(["comparison2", j, minIdx]); // Revert color after comparison

      if (array[j] < array[minIdx]) {
        minIdx = j;
      }
    }

    // Swap the found minimum element with the first element
    animations.push(["swap", i, array[minIdx]]);
    animations.push(["swap", minIdx, array[i]]);
    [array[i], array[minIdx]] = [array[minIdx], array[i]];
  }

  return animations;
}
