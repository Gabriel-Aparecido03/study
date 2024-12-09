export function insertionSort(array = []) {
  if(!array) return null
  let temp;
  for (let i = 1; i < array.length; i++) {
    let j = i 
    temp = array[i]
    while(j > 0 && array[j - 1] > temp) {
      array[j] = array[j - 1]
      j--
    }
    array[j] = temp
  }
  return array
}

const result = insertionSort([64, 34, 25, 12, 22, 11, 90])
console.log(result)