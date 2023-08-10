import type { Detail } from '../data/courses'

export const searchBy = (
  array: Detail[],
  property: 'topic',
  searchQuery: string
) => {
  return array.filter((item) => {
    return item[property].toLowerCase().includes(searchQuery.toLowerCase())
  })
}
