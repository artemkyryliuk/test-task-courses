import { Container, Grid } from '@mui/material'

import { useAppSelector } from '../hooks/hooks'
import Header from './Headet'
import CourseCard from './CourseCard'

export default function CoursesList() {
  const { courses } = useAppSelector((state) => state.course)

  return (
    <>
      <Header />

      <Container>
        <Grid container spacing={5} mt={6}>
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} courseIndex={index} />
          ))}
        </Grid>
      </Container>
    </>
  )
}
