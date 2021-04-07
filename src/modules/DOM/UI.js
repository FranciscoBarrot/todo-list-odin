import navBar from './navBar'
import newProjectPopup from './newProjectPopup'
import projectContainer from './projectUI'

export default (function UI(doc) {
  const loadNavBar = navBar(doc)
  const loadProjectPopup = newProjectPopup(doc)

  const projectsContainer = document.createElement('div')
  projectsContainer.classList.add('projects-container')

  const newProjectContainer = projectContainer(doc)

  return {
    loadNavBar,
    loadProjectPopup,
    projectsContainer,
    newProjectContainer,
  }
})(document)
