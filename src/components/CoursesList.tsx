import Grid from '@mui/material/Grid'
import CourseCard from './CourseCard'

import { useAppSelector } from '../hooks/hooks'

export default function CoursesList() {
  const { courses } = useAppSelector((state) => state.course)

  console.log(courses)
  return (
    <Grid container spacing={2}>
      {courses.map((course, index) => (
        <CourseCard key={index} course={course} />
      ))}
    </Grid>
  )
}
