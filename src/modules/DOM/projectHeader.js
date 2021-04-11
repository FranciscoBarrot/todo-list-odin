export default function projectHeader(name) {
  const projectHeader = document.createElement('div')
  projectHeader.classList.add('project-header')

  const projectName = document.createElement('h2')
  projectName.textContent = 'Project: ' + name
  projectHeader.appendChild(projectName)

  return projectHeader
}
