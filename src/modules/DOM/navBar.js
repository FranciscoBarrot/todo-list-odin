export default function navBar(doc) {
  const nav = doc.createElement('nav')
  nav.classList.add('nav-container')

  /* ADD PROJECT */
  const addBtn = doc.createElement('button')
  addBtn.id = 'add-project-btn'
  addBtn.innerHTML = '<i class="fas fa-plus"></i>'
  nav.appendChild(addBtn)

  /* HOME */
  const homeBtn = doc.createElement('button')
  homeBtn.id = 'home-btn'
  homeBtn.innerHTML = '<i class="fas fa-home"></i>'
  nav.appendChild(homeBtn)

  return nav
}
