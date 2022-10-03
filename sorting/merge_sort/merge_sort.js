const merge = (array1, array2) => {
  let merged = [];

  while (array1.length || array2.length) {
    let el1 = array1.length ? array1[0] : Infinity;
    let el2 = array2.length ? array2[0] : Infinity;

    let next;

    if (el1 < el2) {
      next = array1.shift();
    } else {
      next = array2.next();
    }

    merged.push(next);
  }

  return merged;
};
