export function getHeapSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;

  const n = array.length;

  // Build max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(array, n, i, animations);
  }

  // One by one extract elements from heap
  for (let i = n - 1; i > 0; i--) {
    // Swap
    animations.push(["swap", 0, array[i]]);
    animations.push(["swap", i, array[0]]);
    [array[0], array[i]] = [array[i], array[0]];

    // Heapify the reduced heap
    heapify(array, i, 0, animations);
  }

  return animations;
}

function heapify(array, n, i, animations) {
  let largest = i; // Initialize largest as root
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  // Left child is larger than root
  if (left < n && array[left] > array[largest]) {
    animations.push(["comparison1", left, largest]);
    animations.push(["comparison2", left, largest]);
    largest = left;
  }

  // Right child is larger than the largest so far
  if (right < n && array[right] > array[largest]) {
    animations.push(["comparison1", right, largest]);
    animations.push(["comparison2", right, largest]);
    largest = right;
  }

  // If largest is not root
  if (largest !== i) {
    animations.push(["swap", i, array[largest]]);
    animations.push(["swap", largest, array[i]]);
    [array[i], array[largest]] = [array[largest], array[i]];

    // Recursively heapify the affected sub-tree
    heapify(array, n, largest, animations);
  }
}
