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
}: {
  course: { courseName: string; courseDescription: string }
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
          <Button size="small"> View course dertails </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}
