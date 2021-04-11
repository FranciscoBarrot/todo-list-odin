export default function projectsContainer(doc) {
  const container = doc.createElement('div')
  container.classList.add('projects-container')

  const projectsTop = doc.createElement('div')
  projectsTop.classList.add('projects-top')
  container.appendChild(projectsTop)

  const projectText = doc.createElement('h2')
  projectText.classList.add('nav-text')
  projectText.textContent = 'Projects'
  projectsTop.appendChild(projectText)

  const addBtn = doc.createElement('button')
  addBtn.id = 'add-project-btn'
  addBtn.innerHTML = '<i class="fas fa-plus"></i>'

  projectsTop.appendChild(addBtn)

  return container
}
