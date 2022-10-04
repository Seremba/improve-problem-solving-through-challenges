const binarySearch = (array, target) => {
  // base case
  if (!array.length) return false;

  let midIndex = Math.floor(array.length / 2);

  let leftArray = array.slice(0, midIndex);
  let rightArray = array.slice(midIndex + 1);

  if (target < array[midIndex]) {
    return binarySearch(leftArray, target);
  } else if (target > array[midIndex]) {
    return binarySearch(rightArray, target);
  } else {
    return true;
  }
};
