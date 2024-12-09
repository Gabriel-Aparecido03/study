function mergeSort(array = []) {
  if (array.length > 1) {
    const { length } = array;
    const middle = Math.floor(length / 2);
    const left = mergeSort(array.slice(0, middle));
    const right = mergeSort(array.slice(middle, length));
    array = merge(left,right)
  }
  return array
}

function merge(left = [],right = []) {
  
  let i = 0,j = 0
  const result = []
  while(i < left.length && j < right.length) {
    if(left[i] < right[j]) {
      result.push(left[i])
      i++
    }
    else {
      result.push(right[j])
      j++
    }
  }
  return result.concat(i < left.length ? left.slice(i) : right.slice(j));
}

const result = mergeSort([64, 34, 25, 12, 22, 11, 90]);
console.log(result);
