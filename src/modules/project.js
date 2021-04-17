export default function project(name1) {
  let name = name1
  let todosList = []
  /* const addTodo = (todo) => {
    todosList.push(todo)
  }
  const deleteTodo = (index) => {
    if (index > -1) {
      todosList.splice(index, 1)
    }
  }
  const changeName = (newName) => {
    name = newName
  }
  const getName = () => {
    return name
  }
  const getProject = () => {
    return _todosList
  }
  const setProject = (actProject) => {
    _todosList = actProject
  }
  const { forEach } = Array() */
  return {
    name,
    todosList,
    /* addTodo,
    deleteTodo,
    changeName,
    getName,
    getProject,
    setProject,
    forEach, */
  }
}
