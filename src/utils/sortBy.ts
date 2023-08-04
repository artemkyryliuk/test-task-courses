export const sortBy = <T extends Record<K, string | number>, K extends keyof T>(
  array: T[],
  property: K,
  order: 'asc' | 'desc'
) => {
  return array.sort((a, b) => {
    const aValue = a[property]
    const bValue = b[property]

    if (typeof aValue === 'string' && typeof bValue === 'string') {
      if (order === 'asc') {
        return aValue.localeCompare(bValue)
      } else {
        return bValue.localeCompare(aValue)
      }
    }

    if (typeof aValue === 'number' && typeof bValue === 'number') {
      if (order === 'asc') {
        return aValue - bValue
      } else {
        return bValue - aValue
      }
    }

    return 0
  })
}
