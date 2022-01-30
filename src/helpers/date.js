const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
]

export const formatDate = (date = new Date()) => {
  const dateFormat = new Date(date)
  const day = dateFormat.getDate()
  const month = dateFormat.getMonth()
  const year = dateFormat.getFullYear()

  const format = `${day} ${months[month]} ${year}`
  return format
}
