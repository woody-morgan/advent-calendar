import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type CalendarInfoModal = 'CALENDAR-INFO'
export type CalendarCreateModal = 'CALENDAR-CREATE'

export type ModalType = CalendarInfoModal | CalendarCreateModal

export type ModalShape = {
  name: ModalType | null
  title: string | null
  option?: unknown
}

const initialState: ModalShape = {
  name: null,
  title: null,
  option: null,
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    open: (state, action: PayloadAction<ModalShape>) => {
      document.body.style.overflow = 'hidden'
      state.name = action.payload.name
      state.title = action.payload.title
      state.option = action.payload.option
    },
    close: (state) => {
      document.body.style.overflow = 'auto'
      state.name = null
      state.title = null
      state.option = null
    },
  },
})

// Create Action
export const { open, close } = modalSlice.actions
// Reducer
export default modalSlice.reducer
