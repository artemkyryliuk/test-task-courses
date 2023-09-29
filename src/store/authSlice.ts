import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type Auth = {
  isLogined: boolean
}

const initialState: Auth = {
  isLogined: false,
}

export const authSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    setIsLogined: (state: Auth, action: PayloadAction<boolean>) => {
      state.isLogined = action.payload
    },
  },
})

export const { setIsLogined } = authSlice.actions

export default authSlice.reducer
