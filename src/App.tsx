import { Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage'
import CourseDetailsPage from './pages/CourseDetailsPage'
import LoginPage from './pages/LoginPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/course/:courseId" index element={<CourseDetailsPage />} />

      <Route path="/login" element={<LoginPage />} />

      <Route path="*" element={<HomePage />} />
    </Routes>
  )
}
