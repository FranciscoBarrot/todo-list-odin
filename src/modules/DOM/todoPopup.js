export default function todoPopup(doc) {
  const container = doc.createElement('div')
  container.classList.add('popup-container')
  container.id = 'todo-popup'
  container.classList.add('undisplayed')

  const popuptop = doc.createElement('div')
  popuptop.classList.add('popup-top')
  container.appendChild(popuptop)

  const p = doc.createElement('p')
  p.textContent = 'Todo Name:'
  popuptop.appendChild(p)

  const cancelBtn = doc.createElement('i')
  cancelBtn.classList.add('fas')
  cancelBtn.classList.add('fa-times')
  cancelBtn.id = 'cancel-todo-btn'
  popuptop.appendChild(cancelBtn)

  const form = doc.createElement('form')
  form.classList.add('form')
  form.id = 'todo-form'
  container.appendChild(form)

  const inputText = doc.createElement('input')
  inputText.type = 'text'
  inputText.required = true
  inputText.classList.add('form-text')
  inputText.id = 'todo-text-form'
  inputText.placeholder = 'Add A Name'
  form.appendChild(inputText)

  const inputSubmit = doc.createElement('input')
  inputSubmit.type = 'submit'
  inputSubmit.classList.add('form-input')
  inputSubmit.id = 'todo-submit-form'
  inputSubmit.value = 'Ok!'
  form.appendChild(inputSubmit)

  return container
}
