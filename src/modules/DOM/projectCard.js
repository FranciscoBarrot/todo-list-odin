export default function projectCard(name, index) {
  const projectContainer = document.createElement('article')
  projectContainer.classList.add('project-container')
  projectContainer.dataset.index = index

  const projectName = document.createElement('h3')
  projectName.textContent = name
  projectContainer.appendChild(projectName)

  return projectContainer
}
