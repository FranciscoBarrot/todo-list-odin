export default function todoContainer(name, index) {
  const todo = document.createElement('div')
  todo.classList.add('todo')

  const todoBtn = document.createElement('btn')
  todoBtn.classList.add('todo-check-btn')
  todoBtn.dataset.index = index
  todo.appendChild(todoBtn)

  const rightSide = document.createElement('div')
  rightSide.classList.add('todo-container-right-side')
  todo.appendChild(rightSide)

  const todoName = document.createElement('h4')
  todoName.textContent = name
  todoName.classList.add('todo-name')
  rightSide.appendChild(todoName)

  return todo
}
