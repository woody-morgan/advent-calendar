import { useRootState } from '@src/hooks/useRootState'
import moment, { Moment } from 'moment'
import React, { useCallback } from 'react'
import { ModifiersShape } from 'react-dates'

import { CalendarWithEmpty, CalendarWithFilled } from './CalendarContent/CalendarContent'

const HomePageTemplate = () => {
  const { isInit, calendarItems } = useRootState((state) => state.calendar)
  // const dispatch = useRootDispatch()

  // useEffect(() => {
  //   dispatch(fetchCalendarItems())
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  const renderDayContents = useCallback(
    (day: Moment, modifiers: ModifiersShape) => {
      const parsedDay = moment(day).format('YYYY-MM-DD')
      const result = calendarItems.find((item) => item.openDate === parsedDay)
      if (!result && modifiers.has('valid')) {
        return <CalendarWithEmpty day={day} onClick={() => {}} />
      }
      if (result && modifiers.has('highlighted-calendar')) {
        return <CalendarWithFilled day={day} data={result} onClick={() => {}} />
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [calendarItems, isInit]
  )
  return (
    <div className="flex flex-col items-center justify-center w-full py-10 px-0">
      {/*{isInit && (*/}
      {/*  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>*/}
      {/*    <Calendar*/}
      {/*      initialVisibleMonth={() => moment('2022-02-01')}*/}
      {/*      renderDayContents={renderDayContents}*/}
      {/*      renderWeekHeaderElement={CustomWeekHeaderElement}*/}
      {/*      renderCalendarInfo={CustomCalendarInfo}*/}
      {/*      isDayHighlighted={(day1) => {*/}
      {/*        const day = moment(day1).format('YYYY-MM-DD')*/}
      {/*        const result = calendarItems.find((item) => item.openDate === day)*/}
      {/*        if (result) return true*/}
      {/*        return false*/}
      {/*      }}*/}
      {/*      isOutsideRange={(day) =>*/}
      {/*        !isInclusivelyAfterDay(day, moment(process.env.REACT_APP_CALENDAR_START_DATE)) ||*/}
      {/*        !isInclusivelyBeforeDay(day, moment(process.env.REACT_APP_CALENDAR_END_DATE))*/}
      {/*      }*/}
      {/*    />*/}
      {/*  </motion.div>*/}
      {/*)}*/}
    </div>
  )
}

export default HomePageTemplate
