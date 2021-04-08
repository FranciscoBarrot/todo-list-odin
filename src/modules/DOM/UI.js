import navBar from './navBar'
import newProjectPopup from './newProjectPopup'

export default (function UI(doc) {
  const loadNavBar = navBar(doc)
  const loadProjectPopup = newProjectPopup(doc)

  const projectsContainer = document.createElement('div')
  projectsContainer.classList.add('projects-container')

  const displayProjectCard = (name, index) => {
    const projectContainer = document.createElement('article')
    projectContainer.classList.add('project-container')
    projectContainer.textContent = name
    projectContainer.dataset.index = index
    return projectContainer
  }

  return {
    loadNavBar,
    loadProjectPopup,
    projectsContainer,
    displayProjectCard,
  }
})(document)
