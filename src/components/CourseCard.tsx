import { Link } from 'react-router-dom'
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Grid,
} from '@mui/material'

export default function CourseCard({
  course,
  courseIndex,
}: {
  course: { courseName: string; courseDescription: string }
  courseIndex: number
}) {
  return (
    <Grid item>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://www.sectorlink.com/img/blog/web-devel-important.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {course.courseName}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {course.courseDescription}
          </Typography>
        </CardContent>

        <CardActions>
          <Link to={`/course/${courseIndex + 1}`}>
            <Button size="small"> View course dertails </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  )
}
