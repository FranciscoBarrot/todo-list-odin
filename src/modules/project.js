export default function project(name) {
  let _name = name
  let _todosList = []
  const addTodo = (todo) => {
    _todosList.push(todo)
  }
  const deleteTodo = (todo) => {
    const index = _todosList.indexOf(todo)
    if (index > -1) {
      _todosList.splice(index, 1)
    }
  }
  const changeName = (newName) => {
    _name = newName
  }
  const getName = () => {
    return _name
  }
  const getProject = () => {
    return _todosList
  }
  const { forEach } = Array()
  return { addTodo, deleteTodo, changeName, getName, getProject, forEach }
}
