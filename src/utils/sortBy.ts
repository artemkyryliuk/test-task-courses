import type { Detail, Order, SortKeys } from '../data/courses'

export const sortBy = (
  array: Detail[],
  property: SortKeys,
  order: Order = 'asc'
) => {
  const arrayCopy = [...array]

  return arrayCopy.sort((a, b) => {
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
