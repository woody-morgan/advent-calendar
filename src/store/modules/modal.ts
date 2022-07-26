import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type CalendarSampleModal = 'CALENDAR-SAMPLE'

export type ModalType = CalendarSampleModal

export type ModalShape = {
  transitionKey?: number
  name: ModalType | null
  title: string | null
  option?: unknown
}

const initialState: ModalShape = {
  transitionKey: Math.random(),
  name: null,
  title: null,
  option: null,
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<ModalShape>) => {
      document.body.style.overflow = 'hidden'
      state.transitionKey = action.payload.transitionKey || Math.random()
      state.name = action.payload.name
      state.title = action.payload.title
      state.option = action.payload.option
    },
    closeModal: (state) => {
      document.body.style.overflow = 'auto'
      state.transitionKey = 0
      state.name = null
      state.title = null
      state.option = null
    },
  },
})

// Create Action
export const { openModal, closeModal } = modalSlice.actions
// Reducer
export default modalSlice.reducer
