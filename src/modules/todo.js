export default function todo(title, description, dueDate, priority) {
  const date = new Date()
  const complete = false

  const changePriority = (newPriority) => {
    priority = newPriority
  }
  return { title, description, date, dueDate, priority, complete }
}
