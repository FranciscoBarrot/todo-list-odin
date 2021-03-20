export default function project() {
  const todosList = []
  const addTodo = (todo) => {
    todosList.push(todo)
  }
  const getProject = () => {
    return todosList
  }
  return { addTodo, getProject }
}
