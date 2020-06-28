const TODAY = new Date()

export function getWeekDay(date: number) {
  return [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ][date]
}

export function getFullMonth(month: number) {
  return [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ][month]
}

export function getWeek() {
  const date = TODAY.getDate()
  const month = TODAY.getMonth()
  const year = TODAY.getFullYear()
  const start = new Date(year, 0, 1).valueOf()
  const end = new Date(year, month, date).valueOf()
  const dayOfYear = (end - start + 86400000) / 86400000
  return Math.ceil(dayOfYear / 7)
}

export function getFullDate() {
  const day = TODAY.getDate()
  const year = TODAY.getFullYear()
  const weekDay = getWeekDay(TODAY.getDay())
  const month = getFullMonth(TODAY.getMonth())
  return `${weekDay}, ${month} ${day}, ${year}, `
}
