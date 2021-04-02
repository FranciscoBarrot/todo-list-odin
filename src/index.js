import './styles.css'
import todo from './modules/todo'
import project from './modules/project'
import interfaceManipulator from './modules/usarInteface'
import { format, compareAsc, add } from 'date-fns'

if (localStorage.getItem('tasks') === null) {
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
}

interfaceManipulator.loadNavBar
