const validationUtil = require('../validation.utils')

describe('is limit valid', () => {
  test('checks if single digit is valid', () => {
    expect(validationUtil.isLimitValid('8')).toBe(true)
  })

  test('checks if multiple digits is valid', () => {
    expect(validationUtil.isLimitValid('36')).toBe(true)
  })

  test('checks if non-digits are invalid', () => {
    expect(validationUtil.isLimitValid('abc!@#')).toBe(false)
  })

  test('checks if a combination if digits and non-digits is invalid', () => {
    expect(validationUtil.isLimitValid('abc!@#123')).toBe(false)
  })

  test('checks if undefined is invalid', () => {
    expect(validationUtil.isLimitValid(undefined)).toBe(false)
  })
})
