function selectionSort(array = []) {
  if(!array) return null
  let minIndex

  for (let i = 0; i < array.length - 1; i++) {
    minIndex = i
    for (let j = i + 1; j < array.length; j++) {
      if(array[minIndex] > array[j]) {
        minIndex = j
      }
    }
    if(minIndex !== i) {
      [array[i],array[minIndex]] = [array[minIndex],array[i]]
    }
  }
  return array
}

const result = selectionSort([64, 34, 25, 12, 22, 11, 90])
console.log(result)
