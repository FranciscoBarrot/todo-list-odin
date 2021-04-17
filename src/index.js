import './styles.css'
import project from './modules/project'
import todo from './modules/todo'
import UI from './modules/DOM/UI'
import { format, compareAsc, add } from 'date-fns'

let allProjects = []
/* load stored projecs */

const content = document.getElementById('content')

/* PROJECTS CONTAINER */
content.appendChild(UI.loadProjectContainer)
const addProjectBtn = document.getElementById('add-project-btn')
content.appendChild(UI.loadProjectPopup)
const projectPopup = document.querySelector('.project-popup')
const form = document.getElementById('project-form')

addProjectBtn.addEventListener('click', () => {
  form.dataset.index = -1
  projectPopup.classList.toggle('undisplayed')
})

document.getElementById('cancel-project-btn').addEventListener('click', () => {
  projectPopup.classList.add('undisplayed')
})

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const inputText = document.getElementById('project-text-form')
  let name = inputText.value
  let newProject = project(name)
  if (form.dataset.index === '-1') {
    allProjects.push(newProject)
  } else {
    newProject.todosList = allProjects[form.dataset.index].todosList
    allProjects[form.dataset.index] = newProject
    const projectTitle = document.getElementById('project-title')
    projectTitle.textContent = 'Project: ' + name
  }
  updateProjects()
  projectPopup.classList.add('undisplayed')
  form.reset()

  localStorage.setItem('tasks', JSON.stringify(allProjects))
})

/* PROJECTS */
content.childNodes[0].appendChild(UI.projectDisplay)
const projectsContainer = document.querySelector('.projects-displayer')

function updateProjects() {
  projectsContainer.innerHTML = ''
  allProjects.forEach((actProject, index) => {
    projectsContainer.appendChild(UI.displayProjectCard(actProject.name, index))
  })

  document.querySelectorAll('.project-container').forEach((container) => {
    container.addEventListener('click', () => {
      displayTodos(container.dataset.index)
    })
  })
}

/* TODOS */
content.appendChild(UI.loadActualProject)
const actProject = document.querySelector('.actual-project-container')

content.appendChild(UI.loadTodoPopup)
const todoPopupContainer = document.getElementById('todo-popup')

const todoForm = document.getElementById('todo-form')
todoForm.addEventListener('submit', (e) => {
  e.preventDefault()
  let title = document.getElementById('todo-text-form').value
  allProjects[todoForm.dataset.index].todosList.push(todo(title))
  displayTodos(todoForm.dataset.index)
  todoPopupContainer.classList.add('undisplayed')
  todoForm.reset()

  localStorage.setItem('tasks', JSON.stringify(allProjects))
})

document.getElementById('cancel-todo-btn').addEventListener('click', () => {
  todoPopupContainer.classList.add('undisplayed')
})

function displayTodos(projectIndex) {
  actProject.innerHTML = ''
  const thisProject = allProjects[projectIndex]
  actProject.appendChild(UI.projectHeader(thisProject.name))

  actProject.appendChild(UI.loadAddTodoBtn(document))

  actProject.appendChild(UI.loadTodoContainer)
  const todoContainer = document.querySelector('.todos-container')

  /* change and delete btn */
  document
    .getElementById('change-project-btn')
    .addEventListener('click', () => {
      form.dataset.index = projectIndex
      projectPopup.classList.toggle('undisplayed')
    })

  document
    .getElementById('delete-project-btn')
    .addEventListener('click', () => {
      allProjects.splice(projectIndex, 1)
      actProject.innerHTML = ''
      localStorage.setItem('tasks', JSON.stringify(allProjects))
      updateProjects()
    })

  /* add todo btn */
  document.getElementById('add-todo-btn').addEventListener('click', () => {
    todoPopupContainer.classList.toggle('undisplayed')
    todoForm.dataset.index = projectIndex
  })

  todoContainer.innerHTML = ''
  thisProject.todosList.forEach((todo, index) => {
    todoContainer.appendChild(UI.loadTodo(todo.title, index))
  })
  document.querySelectorAll('.todo-check-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      thisProject.todosList.splice(btn.dataset.index, 1)
      localStorage.setItem('tasks', JSON.stringify(allProjects))
      displayTodos(projectIndex)
    })
  })
}

/* load previous projects */
if (localStorage.getItem('tasks') !== null) {
  allProjects = JSON.parse(localStorage.getItem('tasks'))
  updateProjects()
}
