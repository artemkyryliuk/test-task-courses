import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { sortBy } from '../utils/sortBy'
import { course1 } from '../data/course-1'
import type { Detail } from '../data/types/course'

export type Sort = {
  prop: 'id' | 'name' | 'date'
  order: 'asc' | 'desc'
}

interface ICourseState {
  courseName: string
  details: Detail[]
  mutatedDetails: Detail[]
  searchQuery: string
  editiingIDs: number[]
}

const initialState: ICourseState = {
  courseName: course1.courseName,
  details: course1.details,
  mutatedDetails: course1.details,
  searchQuery: '',
  editiingIDs: [],
}

export const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    searchTopic: (state, action: PayloadAction<string>) => {
      const replacedQuery = action.payload.replace(/[^a-zA-Z]/g, '')
      state.searchQuery = action.payload

      state.mutatedDetails = state.details.filter(({ name }) =>
        name.toLowerCase().includes(replacedQuery.toLowerCase())
      )
    },

    sortProperty: (state, action: PayloadAction<Sort>) => {
      const sortedDetails = sortBy(
        state.details,
        action.payload.prop,
        action.payload.order === 'asc' ? 'asc' : 'desc'
      )
      state.mutatedDetails = sortedDetails
    },

    editNote: (state, action: PayloadAction<number>) => {
      state.editiingIDs = [...state.editiingIDs, action.payload]
      console.log(state.editiingIDs)
    },

    saveNote: (
      state,
      action: PayloadAction<{ editId: number; text: string }>
    ) => {
      const { editId, text } = action.payload

      state.mutatedDetails = state.mutatedDetails.map((detail) =>
        detail.id === editId ? { ...detail, notes: text } : detail
      )

      state.editiingIDs = state.editiingIDs.filter((id) => id !== editId)
    },
  },
})

export const { searchTopic, sortProperty, editNote, saveNote } =
  courseSlice.actions

export default courseSlice.reducer
