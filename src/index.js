import './styles.css'
import project from './modules/project'
import allProjects from './modules/allProjects'
import UI from './modules/DOM/UI'
import { format, compareAsc, add } from 'date-fns'

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
  projectPopup.classList.toggle('undisplayed')
})

document.getElementById('cancel-project-btn').addEventListener('click', () => {
  projectPopup.classList.add('undisplayed')
})

const form = document.getElementById('project-form')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const inputText = document.getElementById('project-text-form')
  let name = inputText.value
  let newProject = project(name)
  allProjects.addProject(newProject)
  localStorage.setItem('tasks', JSON.stringify(allProjects.getAllProjects()))

  /* display projects */
  updateProjects()

  projectPopup.classList.add('undisplayed')
  form.reset()
})

/* projects */
content.appendChild(UI.projectsContainer)
const projectsContainer = document.querySelector('.projects-container')

const updateProjects = () => {
  projectsContainer.innerHTML = ''
  allProjects.getAllProjects().forEach((project, index) => {
    projectsContainer.appendChild(
      UI.displayProjectCard(project.getName(), index)
    )
  })

  document.querySelectorAll('.project-container').forEach((container) => {
    container.addEventListener('click', () => {
      alert(container.dataset.index)
    })
  })
}
