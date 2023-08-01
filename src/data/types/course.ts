export type CourseDetails = {
  id: number
  name: string
  date: string
  description: string
  type: 'lecture' | 'practical session'
  completed: boolean
}[]

export type Course = {
  courseName: string
  details: CourseDetails
}
