export function getInsertionSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;

  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > key) {
      animations.push(["comparison1", j, j + 1]); // Color change for comparison
      animations.push(["comparison2", j, j + 1]); // Revert color after comparison

      animations.push(["swap", j + 1, array[j]]); // Swap to show the shift
      array[j + 1] = array[j];
      j = j - 1;
    }

    animations.push(["swap", j + 1, key]); // Insert the key at the right position
    array[j + 1] = key;
  }

  return animations;
}
