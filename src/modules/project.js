export default function project(name) {
  const todosList = []
  const addTodo = (todo) => {
    todosList.push(todo)
  }
  const deleteTodo = (todo) => {
    const index = todosList.indexOf(todo)
    if (index > -1) {
      todosList.splice(index, 1)
    }
  }
  const getProject = () => {
    return todosList
  }
  return { name, addTodo, deleteTodo, getProject }
}
