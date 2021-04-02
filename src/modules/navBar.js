export default function navBar(doc) {
  const content = doc.getElementById('content')

  const closePopup = () => {
    const projectPopup = document.querySelector('.project-popup')
    content.removeChild(projectPopup)
  }

  const addProjectPopup = () => {
    const projectPopup = doc.createElement('div')
    projectPopup.classList.add('project-popup')

    const popuptop = doc.createElement('div')
    popuptop.classList.add('popup-top')
    projectPopup.appendChild(popuptop)

    const p = doc.createElement('p')
    p.textContent = 'Project Name:'
    popuptop.appendChild(p)

    const deleteBtn = doc.createElement('i')
    deleteBtn.classList.add('fas')
    deleteBtn.classList.add('fa-times')
    deleteBtn.addEventListener('click', closePopup)
    popuptop.appendChild(deleteBtn)

    const form = doc.createElement('form')
    form.id = 'project-form'
    projectPopup.appendChild(form)

    const inputText = doc.createElement('input')
    inputText.type = 'text'
    inputText.id = 'project-text-form'
    form.appendChild(inputText)

    const inputSubmit = doc.createElement('input')
    inputSubmit.type = 'submit'
    inputSubmit.id = 'project-submit-form'
    inputSubmit.value = 'Ok!'
    form.appendChild(inputSubmit)

    content.appendChild(projectPopup)
  }

  const nav = doc.createElement('nav')
  nav.classList.add('nav-container')

  const addBtn = doc.createElement('button')
  addBtn.id = 'addBtn'
  addBtn.innerHTML = '<i class="fas fa-plus"></i>'
  addBtn.addEventListener('click', addProjectPopup)

  nav.appendChild(addBtn)
  content.appendChild(nav)
}
