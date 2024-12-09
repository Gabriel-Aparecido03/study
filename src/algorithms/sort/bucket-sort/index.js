import { insertionSort } from "../insertion-sort/index.js"

const BUCKET_SIZE = 5

function bucketSort(array = []) {
  const max = Math.max(...array)
  const min = Math.min(...array)

  const bucketCount = Math.floor((max - min)/ BUCKET_SIZE)
  const buckets = Array.from({ length: bucketCount }, () => [])

  array.forEach((x) => {
    const bucketIndex = Math.floor((x - min)/ BUCKET_SIZE)
    buckets[bucketIndex]?.push(x)
  })

  const sortedArray = []

  for(const bucket of buckets) {
    if(bucket) {
      const sortedBucket = insertionSort(bucket)
      sortedArray.push(...sortedBucket)
    }
  }
  
  return sortedArray
}

const result = bucketSort([64, 34, 25, 12, 22, 11, 90])
console.log(result)
