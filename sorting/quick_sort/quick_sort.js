const quickSort = (array) => {
  // base case
  if (array.length <= 1) {
    return array;
  }
  // remove the first element, and return it as pivot
  let pivot = array.shift();
  // partition the original array in relation to the pivot
  let left = array.filter((el) => el < pivot);
  let right = array.filter((el) => el >= pivot);

  // sort left and right partions, by calling them recursively
  let leftSorted = quickSort(left);
  let rightSorted = quickSort(right);

  // put everything back in the array
  return [...leftSorted, pivot, ...rightSorted];
};

let arr = [7, 3, 8, 9, 2];
console.log(quickSort(arr));
