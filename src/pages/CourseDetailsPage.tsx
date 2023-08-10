import { useParams } from 'react-router-dom'

import CourseDetails from '../components/CourseDetails'

export default function CourseDetailsPage() {
  const { courseId } = useParams()

  return <CourseDetails courseIndex={Number(courseId) - 1} />
}
