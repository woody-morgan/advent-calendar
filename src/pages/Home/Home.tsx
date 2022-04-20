import { FC, useCallback } from 'react'
import styles from './home.module.scss'
import { PageLayout } from '@src/components/layout'
import { Calendar } from '@src/components/common'
import { Moment } from 'moment'
import moment from 'moment'
import {
  isInclusivelyAfterDay,
  isInclusivelyBeforeDay,
  isSameDay,
  ModifiersShape,
} from 'react-dates'
import { useCalendar } from '@src/store/modules/CalendarStore'
import {
  CalendarWithEmpty,
  CalendarWithFilled,
  CustomCalendarInfo,
  CustomWeekHeaderElement,
} from './CalendarContent/CalendarContent'
import { useRootDispatch } from '@src/hooks/useRootState'
import { open } from '@src/store/modules/modal'

const Home: FC = () => {
  const { isInit, calendarItems } = useCalendar()
  const dispatch = useRootDispatch()

  const renderDayContents = useCallback(
    (day: Moment, modifiers: ModifiersShape) => {
      if (!isInit) return <div />
      const result = calendarItems.get(day.format('YYYY-MM-DD'))
      if (!result && modifiers.has('valid')) {
        return (
          <CalendarWithEmpty
            day={day}
            onClick={() =>
              dispatch(
                open({
                  name: 'CALENDAR-CREATE',
                  title: '새로운 일정 추가',
                  option: day,
                })
              )
            }
          />
        )
      }
      if (result && modifiers.has('highlighted-calendar')) {
        return (
          <CalendarWithFilled
            day={day}
            data={result}
            onClick={() =>
              dispatch(
                open({
                  name: 'CALENDAR-INFO',
                  title: '캘린더 정보',
                  option: result,
                })
              )
            }
          />
        )
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [calendarItems, isInit]
  )

  return (
    <PageLayout enablePageTransition>
      <div className={styles.container}>
        <Calendar
          initialVisibleMonth={() => moment('2022-02-01')}
          renderDayContents={renderDayContents}
          renderWeekHeaderElement={CustomWeekHeaderElement}
          renderCalendarInfo={CustomCalendarInfo}
          isDayHighlighted={(day1) =>
            Array.from(calendarItems.keys()).some((day2) => isSameDay(day1, moment(day2)))
          }
          isOutsideRange={(day) =>
            !isInclusivelyAfterDay(day, moment(process.env.REACT_APP_CALENDAR_START_DATE)) ||
            !isInclusivelyBeforeDay(day, moment(process.env.REACT_APP_CALENDAR_END_DATE))
          }
        />
      </div>
    </PageLayout>
  )
}

export default Home
