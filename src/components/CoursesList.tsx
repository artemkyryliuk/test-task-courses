import { Container, Grid } from '@mui/material'

import Header from './Header'
import CourseCard from './CourseCard'
import { courses } from '../data/courses'

export default function CoursesList() {
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
