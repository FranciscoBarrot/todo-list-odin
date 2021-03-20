import todo from './modules/todo'
import project from './modules/project'
import { format, compareAsc } from 'date-fns'

const project1 = project()
const task1 = todo('task', 'very important', 'today', 'tomorrow', '10')
project1.addTodo(task1)

console.log(format(task1.date, 'MM/dd/yyyy'))
console.log(project1.getProject())
