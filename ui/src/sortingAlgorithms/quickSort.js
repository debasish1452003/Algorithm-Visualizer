export function quickSortAnimation(array) {
  const quickSortAnimation = [];

  if (array.length() <= 1) {
    return array;
  }
  const auxiliaryArray = array.slice();

  quickSortHelper();

  return quickSortAnimation;
}
