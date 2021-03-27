export default function todo(title, description, dueDate, priority) {
  const date = new Date()
  const complete = false
  return { title, description, date, dueDate, priority, complete }
}
