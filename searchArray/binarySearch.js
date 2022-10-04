function binarySearch(array, target) {
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
}

// console.log(binarySearch([5, 10, 12, 15, 20, 30, 70], 12));
// console.log(binarySearch([1, 2, 2, 3], 1));

function binarySearchIndex(array, target) {
  if (!array.length) return -1;

  let midIndex = Math.floor(array.length / 2);

  let leftArray = array.slice(0, midIndex);
  let rightArray = array.slice(midIndex + 1);

  if (target < array[midIndex]) {
    return binarySearchIndex(leftArray, target);
  } else if (target > array[midIndex]) {
    return binarySearchIndex(rightArray, target);
  } else {
    return midIndex;
  }
}

console.log(binarySearchIndex([5, 10, 12, 15, 20, 30, 70], 12));
console.log(binarySearchIndex([1, 2, 2, 3], 1));
