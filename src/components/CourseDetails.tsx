import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from '@mui/material'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'

import ActionButton from './ActionButton'
import { course1 } from '../data/course-1'

export default function CourseDetails() {
  return (
    <Box>
      <TextField label="Search topic by name" />
      <TableContainer component={Paper}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>
                Topic name
                <ActionButton icon={ArrowUpwardIcon} />
                <ActionButton icon={ArrowDownwardIcon} />
              </TableCell>
              <TableCell>
                Planned date
                <ActionButton icon={ArrowUpwardIcon} />
                <ActionButton icon={ArrowDownwardIcon} />
              </TableCell>
              <TableCell> Short description </TableCell>
              <TableCell> Type </TableCell>
              <TableCell> Status </TableCell>
              <TableCell> Notes </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {course1.details.map(
              ({ id, name, date, description, type, completed }) => (
                <TableRow key={id}>
                  <TableCell> {name} </TableCell>
                  <TableCell> {date} </TableCell>
                  <TableCell> {description} </TableCell>
                  <TableCell> {type}</TableCell>
                  <TableCell>{completed ? 'Passed' : 'Upcoming'}</TableCell>
                  <TableCell> Notes </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}
