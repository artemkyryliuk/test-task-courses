import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { courses } from '../data/courses'
import { Course } from '../data/courses'

export type Prop = 'id' | 'topic' | 'date'
export type Order = 'asc' | 'desc'

interface ICourseState {
  courses: Course[]
  editiingIDs: number[]
}

const initialState: ICourseState = {
  courses,
  editiingIDs: [],
}

export const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    editNote: (state: ICourseState, action: PayloadAction<number>) => {
      state.editiingIDs = [...state.editiingIDs, action.payload]
    },

    saveNote: (
      state,
      action: PayloadAction<{
        courseIndex: number
        editId: number
        text: string
      }>
    ) => {
      const { courseIndex, editId, text } = action.payload

      const updatedCourses = state.courses.map((course, index) => {
        return index === courseIndex
          ? {
              ...course,
              details: course.details.map((detail) => {
                return detail.id === editId
                  ? { ...detail, notes: text }
                  : detail
              }),
            }
          : course
      })

      const updatedEditingIds = state.editiingIDs.filter((id) => {
        return id !== editId
      })

      return {
        ...state,
        courses: updatedCourses,
        editiingIDs: updatedEditingIds,
      }
    },
  },
})

export const { editNote, saveNote } = courseSlice.actions

export default courseSlice.reducer
