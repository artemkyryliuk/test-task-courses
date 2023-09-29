import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { Course } from '../data/courses'
import { courses } from '../data/courses'

export type Prop = 'id' | 'topic' | 'date'
export type Order = 'asc' | 'desc'

export const courseSlice = createSlice({
  name: 'course',
  initialState: courses as Course[],
  reducers: {
    updateCourses: (_, action: PayloadAction<Course[]>) => {
      return action.payload
    },
  },
})

export const { updateCourses } = courseSlice.actions

export default courseSlice.reducer
