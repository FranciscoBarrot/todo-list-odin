/* export default function todo(title, description, dueDate, priority) {
  const date = new Date()
  const complete = false

  const changePriority = (newPriority) => {
    priority = newPriority
  }
  return { title, description, date, dueDate, priority, complete }
} */

export default function todo(title1) {
  let title = title1
  return { title }
}
