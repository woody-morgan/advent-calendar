export const getMonth = (year: number, month: number) => {
  if (month === 4 || month === 6 || month === 9 || month === 11) {
    return 30
  }
  if (month === 2) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return 29
    }
    return 28
  }
  return 31
}

export const getTotalDays = (year: number, month: number, day: number) => {
  if (year < 0 || month < 0 || month > 12 || day < 0 || day > 31) {
    throw new Error('Invalid date')
  }
  const year_days =
    (year - 1) * 365 +
    Math.floor((year - 1) / 4) -
    Math.floor((year - 1) / 100) +
    Math.floor((year - 1) / 400)
  let month_days = 0
  for (let i = 1; i < month; i++) {
    month_days += getMonth(year, i)
  }
  return year_days + month_days + day
}

const calcDay: { [key in number]: string } = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
}

export const getWeekDay = (day: number): string => {
  day %= 7
  return calcDay[day]
}
