import { CalendarItemShape } from '@src/interface/advent-calendar'
import type { Moment } from 'moment'
import moment from 'moment'

import styles from './CalendarContent.module.scss'

export const CustomWeekHeaderElement = (day: string) => {
  return <div>{day}</div>
}

export const CustomCalendarInfo = () => {
  return <ol className="flex px-20"></ol>
}

export const CalendarWithEmpty = ({
  day,
  onClick,
}: {
  day: Moment
  onClick: (day: Moment) => void
}) => {
  return (
    <div className={styles.day_cell_cnt} onClick={() => onClick(day)}>
      <div className={styles.day_cell_header}>
        <div>{day.format('D')}</div>
      </div>
      <div className={styles.day_cell_body}>
        <div className={styles.avail}>+</div>
      </div>
    </div>
  )
}

export const CalendarWithFilled = ({
  day,
  data,
  onClick,
}: {
  day: Moment
  data: CalendarItemShape
  onClick: (data: CalendarItemShape) => void
}) => {
  return (
    <div className={styles.day_cell_cnt} onClick={() => onClick(data)}>
      <div className={styles.day_cell_header}>
        <div>{day.format('D')}</div>
        <div className={styles.profile}>
          <img
            src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=30&h=30&q=80"
            width={20}
            height={20}
            alt=""
          />
          <span>{data?.name}</span>
        </div>
      </div>
      <div className={styles.day_cell_body}>
        <div className={styles.highlighted}>
          {day.isAfter(moment(), 'day') ? '오픈일이 아닙니다' : data?.title ?? ''}
        </div>
      </div>
    </div>
  )
}
