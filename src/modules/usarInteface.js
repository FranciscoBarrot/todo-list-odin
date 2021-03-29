import { add } from 'date-fns'

export default (function interfaceManipulator(doc) {
  const content = doc.getElementById('content')

  const navBar = () => {
    const nav = doc.createElement('nav')
    nav.classList.add('nav-container')
    const addBtn = doc.createElement('button')
    addBtn.id = 'addBtn'
    addBtn.innerHTML = '<i class="fas fa-plus"></i>'

    nav.appendChild(addBtn)
    content.appendChild(nav)
  }
  return { navBar }
})(document)
