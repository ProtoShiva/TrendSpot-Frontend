import { format, parseISO } from "date-fns"

export const formatDate = (dateString) => {
  try {
    const date = parseISO(dateString)
    return format(date, "dd MMMM yyyy")
  } catch (error) {
    console.error("Invalid date format:", error)
    return "Invalid date"
  }
}
