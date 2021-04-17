import projectsContainer from './projectsContainer'
import newProjectPopup from './newProjectPopup'
import projectCard from './projectCard'
import projectHeader from './projectHeader'
import addTodoBtn from './addTodoBtn'
import todoPopup from './todoPopup'
import todoContainer from './todoContainer'

export default (function UI(doc) {
  const loadProjectContainer = projectsContainer(doc)
  const loadProjectPopup = newProjectPopup(doc)

  const projectDisplay = document.createElement('div')
  projectDisplay.classList.add('projects-displayer')

  const displayProjectCard = projectCard

  const loadTodo = todoContainer

  const loadActualProject = doc.createElement('div')
  loadActualProject.classList.add('actual-project-container')

  const loadTodoContainer = doc.createElement('div')
  loadTodoContainer.classList.add('todos-container')

  const loadProjectHeader = projectHeader

  const loadAddTodoBtn = addTodoBtn

  const loadTodoPopup = todoPopup(doc)

  return {
    loadProjectContainer,
    loadProjectPopup,
    projectDisplay,
    displayProjectCard,
    loadActualProject,
    loadTodoContainer,
    loadTodo,
    projectHeader,
    loadAddTodoBtn,
    loadTodoPopup,
  }
})(document)
