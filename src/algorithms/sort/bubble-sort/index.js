function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if(array[j] > array[j + 1]) [array[j],array[j+1]] = [array[j+1],array[j]]
    }
  }

  return array
}

const result = bubbleSort([64, 34, 25, 12, 22, 11, 90])
