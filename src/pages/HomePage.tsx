import { Navigate } from 'react-router-dom'

import { useAppSelector } from '../hooks/hooks'
import CoursesList from '../components/CoursesList'

export default function HomePage() {
  const isLogined = useAppSelector((state) => state.auth.isLogined)

  return (
    <>{isLogined ? <CoursesList /> : <Navigate to="/login" replace={true} />}</>
  )
}
