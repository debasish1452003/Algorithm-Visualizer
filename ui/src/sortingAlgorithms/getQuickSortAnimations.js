export function getQuickSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  quickSortHelper(array, 0, array.length - 1, animations);
  return animations;
}

function quickSortHelper(array, low, high, animations) {
  if (low < high) {
    const pivotIndex = partition(array, low, high, animations);
    animations.push(["pivot", pivotIndex, array[pivotIndex]]);
    quickSortHelper(array, low, pivotIndex - 1, animations);
    quickSortHelper(array, pivotIndex + 1, high, animations);
    animations.push(["pivotchange", pivotIndex, array[pivotIndex]]);
  }
}

function partition(array, low, high, animations) {
  const pivot = array[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    animations.push(["comparison1", j, high]);
    animations.push(["comparison2", j, high]);

    if (array[j] < pivot) {
      i++;
      animations.push(["swap", i, array[j]]);
      animations.push(["swap", j, array[i]]);
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  animations.push(["swap", i + 1, array[high]]);
  animations.push(["swap", high, array[i + 1]]);
  [array[i + 1], array[high]] = [array[high], array[i + 1]];

  return i + 1;
}
