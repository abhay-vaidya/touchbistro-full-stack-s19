import { getPrimeNumbers, getArrayMedian } from '../prime.utils'

describe('get prime numbers', () => {
  test('checks primes of limit', () => {
    expect(getPrimeNumbers(10)).toEqual([2, 3, 5, 7])
  })

  test('checks primes of 0 limit', () => {
    expect(getPrimeNumbers(0)).toEqual([])
  })
})

describe('get array median', () => {
  test('checks median of odd length array', () => {
    expect(getArrayMedian([2, 6, 9, 11, 13])).toEqual([9])
  })

  test('checks median of even length array', () => {
    expect(getArrayMedian([2, 6, 9, 11])).toEqual([6, 9])
  })

  test('checks median of empty array is empty', () => {
    expect(getArrayMedian([])).toEqual([])
  })

  test('checks median of single element array is same array', () => {
    expect(getArrayMedian([1])).toEqual([1])
  })

  test('checks median of undefined is empty', () => {
    expect(getArrayMedian(undefined)).toEqual([])
  })
})
