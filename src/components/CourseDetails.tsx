import {
  Box,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'

import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { sortProperty } from '../store/courseSlice'
import type { Sort } from '../store/courseSlice'
import DetailsList from './DetailsList'
import SearchBar from './SearchBar'
import IconButton from './IconButton'

export default function CourseDetails() {
  const dispatch = useAppDispatch()

  const { mutatedDetails } = useAppSelector((state) => state.course)

  const sort = (config: Sort) => {
    const { prop, order } = config
    dispatch(sortProperty({ prop, order }))
  }

  return (
    <Box marginTop={10}>
      <SearchBar />

      <TableContainer component={Paper}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>
                <IconButton
                  onClick={() => sort({ prop: 'id', order: 'asc' })}
                  icon="#"
                />
              </TableCell>

              <TableCell>
                Topic name
                <IconButton
                  icon={<ArrowUpwardIcon />}
                  onClick={() => sort({ prop: 'name', order: 'asc' })}
                />
                <IconButton
                  icon={<ArrowDownwardIcon />}
                  onClick={() => sort({ prop: 'name', order: 'desc' })}
                />
              </TableCell>

              <TableCell>
                Planned date
                <IconButton
                  icon={<ArrowUpwardIcon />}
                  onClick={() => sort({ prop: 'date', order: 'asc' })}
                />
                <IconButton
                  icon={<ArrowDownwardIcon />}
                  onClick={() => sort({ prop: 'date', order: 'desc' })}
                />
              </TableCell>

              <TableCell> Short description </TableCell>
              <TableCell> Type </TableCell>
              <TableCell> Status </TableCell>
              <TableCell> Notes </TableCell>
            </TableRow>
          </TableHead>

          <DetailsList mutatedDetails={mutatedDetails} />
        </Table>
      </TableContainer>
    </Box>
  )
}
