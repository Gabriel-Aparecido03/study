function countingSort(array = []) {
  const max = Math.max(...array)
  const tempArrayCounting = new Array(max + 1)
  for(let number of array) {
    if(!tempArrayCounting[number])tempArrayCounting[number] = 0
    tempArrayCounting[number]++
  }
  const newSortedArray = []
  for (const [index, element] of  tempArrayCounting.entries()) {
    if(element) {
      for(let x = 1 ; x <= element ; x++) {
        newSortedArray.push(index)
      }
    }
  }

  return newSortedArray
}

const result = countingSort([64, 34, 25, 12, 22, 11, 90])
console.log(result)
