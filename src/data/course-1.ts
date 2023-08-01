import type { Course } from './types/course'

export const course1: Course = {
  courseName: 'Course 1',
  details: [
    {
      id: 1,
      name: 'Topic name 1',
      date: '2023-08-15',
      description: 'Short topic description',
      type: 'lecture',
      completed: true,
    },
    {
      id: 2,
      name: 'Topic name 2',
      date: '2023-08-15',
      description: 'Short topic description',
      type: 'lecture',
      completed: true,
    },
    {
      id: 3,
      name: 'Topic name 3',
      date: '2023-08-15',
      description: 'Short topic description',
      type: 'practical session',
      completed: true,
    },
    {
      id: 4,
      name: 'Topic name 4',
      date: '2023-08-15',
      description: 'Short topic description',
      type: 'lecture',
      completed: false,
    },
    {
      id: 5,
      name: 'Topic name 5',
      date: '2023-08-15',
      description: 'Short topic description',
      type: 'practical session',
      completed: false,
    },
  ],
}
