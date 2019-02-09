// Given an upper limit, return list of prime numbers
function getPrimeNumbers(limit) {
  const numbers = new Array(limit).fill(true)
  const primes = []

  for (let i = 2; i <= Math.sqrt(limit); i++) {
    if (numbers[i]) {
      for (let j = i * i; j < limit; j += i) {
        numbers[j] = false
      }
    }
  }

  for (let i = 2; i < limit; i++) {
    if (numbers[i]) {
      primes.push(i)
    }
  }

  return primes
}

// Given ascending sorted inputArray. return median
function getArrayMedian(inputArray) {
  if (inputArray === undefined || inputArray.length === 0) {
    return []
  }

  if (inputArray.length === 1) {
    return inputArray
  }

  const midPoint = Math.floor(inputArray.length / 2)

  return inputArray.length % 2 === 0
    ? [inputArray[midPoint - 1], inputArray[midPoint]]
    : [inputArray[midPoint]]
}

module.exports = { getPrimeNumbers, getArrayMedian }
