import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import { course1 } from '../data/course-1'

export default function CourseDetails() {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="right"> Topic name </TableCell>
            <TableCell align="right"> Planned date </TableCell>
            <TableCell align="right"> Short description </TableCell>
            <TableCell align="right"> Type </TableCell>
            <TableCell align="right"> Status </TableCell>
            <TableCell align="right"> Notes </TableCell>
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
  )
}
