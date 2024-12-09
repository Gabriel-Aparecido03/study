function quickSort(array = []) {
  return quick(array,0,array.length - 1)
}

function quick(array = [], left, right) {
  let index;
  if (array.length > 0) {
    index = partticion(array, left, right);
    
    if (left < index - 1) {
      quick(array, left, index - 1);
    }
    if (index < right) {
      quick(array, index, right);
    }
  }
  return array
}

function partticion(array = [],left,right) {
  const pivot = array[Math.floor((left + right) / 2)];
  let i = left;
  let j = right;

  while (i <= j) {
    while (array[i] < pivot) {
      i++;
    }
    while (array[j] > pivot) {
      j--;
    }

    if (i <= j) {
      [array[j], array[i]] = [array[i], array[j]];
      i++;
      j--;
    }
  }
  return i
}

const result = quickSort([64, 34, 25, 12, 22, 11, 90]);
console.log(result);
