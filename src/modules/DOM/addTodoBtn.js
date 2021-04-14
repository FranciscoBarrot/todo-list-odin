export default function addTodoBtn(doc) {
  const btnContainer = doc.createElement('div')
  btnContainer.classList.add('add-todo-container')

  const btn = doc.createElement('button')
  btn.textContent = 'Add Todo'
  btn.id = 'add-todo-btn'
  btnContainer.appendChild(btn)

  return btnContainer
}
