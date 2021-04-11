import projectsContainer from './projectsContainer'
import newProjectPopup from './newProjectPopup'
import projectCard from './projectCard'
import projectHeader from './projectHeader'

export default (function UI(doc) {
  const loadProjectContainer = projectsContainer(doc)
  const loadProjectPopup = newProjectPopup(doc)

  const projectDisplay = document.createElement('div')
  projectDisplay.classList.add('projects-displayer')

  const displayProjectCard = projectCard

  const loadTodo = (name) => {
    const todo = doc.createElement.createElement('div')
    todo.classList.add('todo')
    todo.textContent = name

    return todo
  }

  const loadTodoContainer = doc.createElement('div')
  loadTodoContainer.classList.add('todos-container')

  const loadProjectHeader = projectHeader

  return {
    loadProjectContainer,
    loadProjectPopup,
    projectDisplay,
    displayProjectCard,
    loadTodoContainer,
    projectHeader,
  }
})(document)
