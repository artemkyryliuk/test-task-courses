import { Link } from 'react-router-dom'
import { Box, Button } from '@mui/material'

import { useAppSelector } from '../hooks/hooks'

export default function Header() {
  const { courses } = useAppSelector((state) => state.course)

  return (
    <Box display="flex" justifyContent="space-between" p={2} bgcolor="#eee">
      <Link to="/">
        <Button variant="contained"> Home </Button>
      </Link>

      {courses.map((course, index) => (
        <Link key={course.courseName} to={`/course/${index + 1}`}>
          <Button variant="contained"> {course.courseName} </Button>
        </Link>
      ))}
    </Box>
  )
}
