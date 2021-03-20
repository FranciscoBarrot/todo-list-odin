export default function todo(title, description, dueDate, priority) {
  const date = new Date()
  return { title, description, date, dueDate, priority }
}
