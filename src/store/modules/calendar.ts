import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getAllCalendars } from '@src/core/api/advent-calendar'
import { CalendarItemShape } from '@src/core/types/advent-calendar'

export type CalendarInfoShape = {
  isInit: boolean
  calendarItems: CalendarItemShape[]
}

const initialState: CalendarInfoShape = {
  isInit: false,
  calendarItems: [],
}

export const fetchCalendarItems = createAsyncThunk('calendar/fetchCalendarItems', async () => {
  const data = await getAllCalendars()
  return data
})

const calendarReducer = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    addCalendarItem: (
      state,
      action: PayloadAction<{
        item: CalendarItemShape
      }>
    ) => {
      const { item } = action.payload
      state.calendarItems.push(item)
    },
    updateCalendarItem: (
      state,
      action: PayloadAction<{
        item: CalendarItemShape
      }>
    ) => {
      const { item } = action.payload
      const index = state.calendarItems.findIndex(
        (calendarItem) => calendarItem.openDate === item.openDate
      )
      if (index !== -1) {
        state.calendarItems[index] = item
      }
    },
    deleteCalendarItem: (
      state,
      action: PayloadAction<{
        key: string
      }>
    ) => {
      const { key } = action.payload
      const index = state.calendarItems.findIndex((calendarItem) => calendarItem.openDate === key)
      if (index !== -1) {
        state.calendarItems.splice(index, 1)
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCalendarItems.fulfilled, (state, action) => {
      state.calendarItems = action.payload
      state.isInit = true
    })
    builder.addCase(fetchCalendarItems.rejected, (state) => {
      state.isInit = true
    })
  },
})

// Create Action
export const { addCalendarItem, updateCalendarItem, deleteCalendarItem } = calendarReducer.actions
// Reducer
export default calendarReducer.reducer
