export function isLimitValid(limit) {
  const regex = /^\d+$/
  return !!limit && limit.match(regex) !== null
}
