export default function projectHeader(name) {
  const projectHeader = document.createElement('div')
  projectHeader.classList.add('project-header')

  const projectName = document.createElement('h2')
  projectName.id = 'project-title'
  projectName.textContent = 'Project: ' + name
  projectHeader.appendChild(projectName)

  const btnContainer = document.createElement('div')
  btnContainer.classList.add('todo-btn-container')
  projectHeader.appendChild(btnContainer)

  const chengeBtn = document.createElement('button')
  chengeBtn.textContent = 'Change'
  chengeBtn.classList.add('todo-btn')
  chengeBtn.id = 'change-project-btn'
  btnContainer.appendChild(chengeBtn)

  const deleteBtn = document.createElement('button')
  deleteBtn.textContent = 'Delete'
  deleteBtn.classList.add('todo-btn')
  deleteBtn.id = 'delete-project-btn'
  btnContainer.appendChild(deleteBtn)

  return projectHeader
}
