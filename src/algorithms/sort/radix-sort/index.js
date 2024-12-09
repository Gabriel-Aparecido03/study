function radixSort(array = [],radixBase = 10) {
  if(array.length < 2) {
    return array
  }
  const minValue = Math.min(...array)
  const maxValue = Math.max(...array)
  let significantDigit = 1;
  while((maxValue - minValue) / significantDigit >= 1) {
    array = countingSortForRadix(array,radixBase,significantDigit,minValue)
    significantDigit *= radixBase
  }
  return array
}

function countingSortForRadix(array = [] , radixBase , significantDigit , minValue ) {
  let bucketIndex;
  const buckets = []
  const aux = []

  for(let i = 0;i < radixBase ;i++) {
    buckets[i] = 0;
  }

  for(let i = 0;i < array.length;i++) {
    bucketIndex = Math.floor(((array[i] - minValue) / significantDigit) % radixBase)
    buckets[bucketIndex]++
  }
  
  for(let i = 1;i < radixBase;i++) {
    buckets[i] += buckets[i - 1]
  }

  for(let i = array.length - 1; i >= 0;i--) {
    bucketIndex = Math.floor(((array[i] - minValue) / significantDigit ) % radixBase)
    aux[--buckets[bucketIndex]] = array[i]
  }

  for(let i = 0; i < array.length;i++) {
    array[i] = aux[i]
  }

  return array
}

const result = radixSort([64, 34, 25, 12, 22, 11, 90])
console.log(result)
