export interface Detail {
  id: number
  name: string
  date: string
  description: string
  type: 'Lecture' | 'Practical session'
  completed: boolean
  notes?: string
}

export interface Course {
  courseName: string
  details: Detail[]
  mutatedDetails: Detail[]
}
