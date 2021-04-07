import './styles.css'
import allProjects from './modules/allProjects'
import UI from './modules/DOM/UI'
import { format, compareAsc, add } from 'date-fns'
import project from './modules/project'

/* if (localStorage.getItem('tasks') === null) {
  const defaultProject = project('default')
  defaultProject.addTodo(
    todo('Run', 'Run in the park with Fred', 'Tomorrow', 'Low')
  )
  defaultProject.addTodo(
    todo('Cook', 'Buy the ingredientes for lasagna', 'Today', 'Medium')
  )
  defaultProject.addTodo(
    todo(
      'Sleep',
      'Go to sleep early, tomorrow is an important day',
      'Today',
      'High'
    )
  )
  console.log(defaultProject.getProject())
} */

const content = document.getElementById('content')

/* NAVBAR */
content.appendChild(UI.loadNavBar)
const addProjectBtn = document.getElementById('add-project-btn')
content.appendChild(UI.loadProjectPopup)
const projectPopup = document.querySelector('.project-popup')

addProjectBtn.addEventListener('click', () => {
  projectPopup.classList.remove('undisplayed')
})

document.getElementById('cancel-project-btn').addEventListener('click', () => {
  projectPopup.classList.add('undisplayed')
})

const form = document.getElementById('project-form')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const inputText = document.getElementById('project-text-form')
  let name = inputText.value
  allProjects.addProject(name)
  setTimeout(1000)
  displayProjects()
  projectPopup.classList.add('undisplayed')
  form.reset()
})

/* projects */
content.appendChild(UI.projectsContainer)
const projectsContainer = document.querySelector('.projects-container')

function displayProjects() {
  allProjects.getAllProjects().forEach((project) => {
    const projectContainer = UI.newProjectContainer
    projectContainer.textContent = project.getName()
    projectsContainer.appendChild(projectContainer)
  })
}
