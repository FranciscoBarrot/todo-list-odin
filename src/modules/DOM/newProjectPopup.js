export default function newProjectPop(doc) {
  const projectPopup = doc.createElement('div')
  projectPopup.classList.add('project-popup')
  projectPopup.classList.add('undisplayed')

  const popuptop = doc.createElement('div')
  popuptop.classList.add('popup-top')
  projectPopup.appendChild(popuptop)

  const p = doc.createElement('p')
  p.textContent = 'Project Name:'
  popuptop.appendChild(p)

  const cancelBtn = doc.createElement('i')
  cancelBtn.classList.add('fas')
  cancelBtn.classList.add('fa-times')
  cancelBtn.id = 'cancel-project-btn'
  popuptop.appendChild(cancelBtn)

  const form = doc.createElement('form')
  form.id = 'project-form'
  projectPopup.appendChild(form)

  const inputText = doc.createElement('input')
  inputText.type = 'text'
  inputText.required = true
  inputText.id = 'project-text-form'
  inputText.placeholder = 'Add A Name'
  form.appendChild(inputText)

  const inputSubmit = doc.createElement('input')
  inputSubmit.type = 'submit'
  inputSubmit.id = 'project-submit-form'
  inputSubmit.value = 'Ok!'
  form.appendChild(inputSubmit)

  return projectPopup
}
