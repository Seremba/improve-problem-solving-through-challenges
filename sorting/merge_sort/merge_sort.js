const merge = (array1, array2) => {
  let merged = [];

  while (array1.length || array2.length) {
    let el1 = array1.length ? array1[0] : Infinity;
    let el2 = array2.length ? array2[0] : Infinity;

    let next;

    if (el1 < el2) {
      next = array1.shift();
    } else {
      next = array2.shift();
    }

    merged.push(next);
  }

  return merged;
};

const mergeSort = (array) => {
  if (array.length <= 1) {
    return array;
  }

  let midIndex = Math.floor(array.length / 2);
  let leftHalf = array.slice(0, midIndex);
  let rightHalf = array.slice(midIndex);

  let sortedLeft = mergeSort(leftHalf);
  let sortedRight = mergeSort(rightHalf);

  return merge(sortedLeft, sortedRight);
};

console.log(mergeSort([15, 5, 24, 8, 1, 3, 16, 10, 20]));
