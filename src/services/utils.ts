export const dateToday = (): string => {
  const today = new Date()
  const day = today.getDate()
  const month = today.getMonth() + 1
  const year = today.getFullYear()

  return `${day}/${month}/${year.toString().slice(2, 4)}`
}
