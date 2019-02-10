import { isLimitValid } from '../validation.utils'

describe('is limit valid', () => {
  test('checks if single digit is valid', () => {
    expect(isLimitValid('8')).toBe(true)
  })

  test('checks if multiple digits is valid', () => {
    expect(isLimitValid('36')).toBe(true)
  })

  test('checks if non-digits are invalid', () => {
    expect(isLimitValid('abc!@#')).toBe(false)
  })

  test('checks if a combination if digits and non-digits is invalid', () => {
    expect(isLimitValid('abc!@#123')).toBe(false)
  })

  test('checks if undefined is invalid', () => {
    expect(isLimitValid(undefined)).toBe(false)
  })
})
