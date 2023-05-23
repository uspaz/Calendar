import moment from 'moment'

export const formatDate = () => {
  const date = []
  const daysOfMonth = moment().daysInMonth()
  for (let i = 0; i <= daysOfMonth; i++) {
    date.push(i)
  }
  return date
}
