import React, { FC, createContext, useContext, useState, useCallback, useLayoutEffect } from 'react'
import { CalendarItemShape } from '../../interface/advent-calendar'
import { getAllCalendars } from '@src/api/advent-calendar'
import moment, { Moment } from 'moment'

interface ICalendarContext {
  isInit: boolean
  calendarItems: Map<string, CalendarItemShape>
  getNewData: () => void
  addCalendarItem: (key: Moment, item: CalendarItemShape) => void
  updateCalendarItem: (key: Moment, item: CalendarItemShape) => void
  deleteCalendarItem: (key: Moment) => void
}

export const CalendarContext = createContext<ICalendarContext>({
  isInit: false,
  calendarItems: new Map(),
  getNewData: () => {},
  addCalendarItem: () => {},
  updateCalendarItem: () => {},
  deleteCalendarItem: () => {},
})

export const useCalendar = (): ICalendarContext => useContext(CalendarContext)

export const CalendarProvider: FC = ({ children }) => {
  const [isInit, setInit] = useState<boolean>(false)
  const [calendarItems, setCalendarsItems] = useState<Map<string, CalendarItemShape>>(new Map())

  // Logics for Data Fetching
  const getCalendarItemsData = useCallback(async () => {
    const data = await getAllCalendars()
    const mapObj = new Map<string, CalendarItemShape>()
    for (const key in data) {
      const newKey = moment(data[Number(key)].openDate).format('YYYY-MM-DD')
      mapObj.set(newKey, data[Number(key)])
    }
    setCalendarsItems(mapObj)
    setInit(true)
  }, [])

  const addCalendarItem = useCallback((key: Moment, item: CalendarItemShape) => {
    setCalendarsItems((prev) => new Map(prev).set(key.format('YYYY-MM-DD'), item))
  }, [])

  const updateCalendarItem = useCallback(
    (key: Moment, item: CalendarItemShape) => {
      addCalendarItem(key, item)
    },
    [addCalendarItem]
  )

  const deleteCalendarItem = useCallback((key: Moment) => {
    setCalendarsItems((prev) => {
      const tempMap = new Map(prev)
      tempMap.delete(key.format('YYYY-MM-DD'))
      return tempMap
    })
  }, [])

  useLayoutEffect(() => {
    getCalendarItemsData()
  }, [getCalendarItemsData])

  return (
    <CalendarContext.Provider
      value={{
        isInit,
        calendarItems,
        getNewData: getCalendarItemsData,
        addCalendarItem,
        updateCalendarItem,
        deleteCalendarItem,
      }}
    >
      {children}
    </CalendarContext.Provider>
  )
}
