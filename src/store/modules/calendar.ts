import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getAllCalendars } from '@src/core/api/advent-calendar'
import { CalendarItemShape } from '@src/core/interface/advent-calendar'
import moment from 'moment'

export type CalendarInfoShape = {
  isInit: boolean
  calendarItems: Map<string, CalendarItemShape>
}

const initialState: CalendarInfoShape = {
  isInit: false,
  calendarItems: new Map(),
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
      state.calendarItems.set(moment(item.openDate).format('YYYY-MM-DD'), item)
    },
    updateCalendarItem: (
      state,
      action: PayloadAction<{
        item: CalendarItemShape
      }>
    ) => {
      const { item } = action.payload
      state.calendarItems.set(moment(item.openDate).format('YYYY-MM-DD'), item)
    },
    deleteCalendarItem: (
      state,
      action: PayloadAction<{
        key: string
      }>
    ) => {
      const { key } = action.payload
      state.calendarItems.delete(key)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCalendarItems.fulfilled, (state, action) => {
      const newMap = new Map()
      action.payload.forEach((item) => {
        newMap.set(moment(item.openDate).format('YYYY-MM-DD'), item)
      })
      state.calendarItems = newMap
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
