import { useState } from 'react'
import {
  Box,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'

import { useAppSelector } from '../hooks/hooks'
import { sortBy } from '../utils/sortBy'
import DetailsList from './DetailsList'
import SearchBar from './SearchBar'
import IconButton from './IconButton'
import type { Detail, Order, SortKeys } from '../data/courses'
import Header from './Headet'

export default function CourseDetails({
  courseIndex,
}: {
  courseIndex: number
}) {
  const { courses } = useAppSelector((state) => state.course)
  const initialDetails = courses[courseIndex].details

  const [details, setDetails] = useState<{
    searchQuery: string
    sorted: Detail[]
    filtered: Detail[]
  }>({
    searchQuery: '',
    sorted: initialDetails,
    filtered: initialDetails,
  })

  const handleSearch = (inputValue: string) => {
    const searchQuery = inputValue.replace(/[^a-zA-Z]/g, '')
    const filtered = details.filtered.filter(({ topic }) =>
      topic.toLowerCase().includes(searchQuery.toLowerCase())
    )
    setDetails((prev) => ({ ...prev, searchQuery, filtered }))
  }

  const handleSort = (property: SortKeys, order: Order = 'asc') => {
    const sorted = sortBy(details.sorted, property, order)
    setDetails((prev) => ({ ...prev, sorted, filtered: sorted }))
  }

  return (
    <>
      <Header />

      <Typography align="center" fontWeight={700} component="h3">
        {courses[courseIndex].courseName}
      </Typography>

      <SearchBar
        searchQuery={details.searchQuery}
        filteredDetails={details.filtered}
        onChange={handleSearch}
      />

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <IconButton onClick={() => handleSort('id')} icon="#" />
              </TableCell>

              {[
                { label: 'Topic name', property: 'topic' as const },
                { label: 'Planned date', property: 'date' as const },
              ].map(({ label, property }) => (
                <TableCell key={property}>
                  {label}
                  <IconButton
                    icon={<ArrowUpwardIcon />}
                    onClick={() => handleSort(property)}
                  />
                  <IconButton
                    icon={
                      <ArrowUpwardIcon sx={{ transform: 'rotate(180deg)' }} />
                    }
                    onClick={() => handleSort(property, 'desc')}
                  />
                </TableCell>
              ))}

              {['Short description', 'Type', 'Status', 'Notes'].map((item) => (
                <TableCell key={item}> {item} </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <DetailsList
            courseIndex={courseIndex}
            filteredDetails={details.filtered}
          />
        </Table>
      </TableContainer>
    </>
  )
}
