export default (function interfaceManipulator(doc) {
  const content = doc.getElementById('content')

  const navBar = () => {
    const nav = doc.createElement('nav')
    nav.textContent = 'puto el que lee'

    content.appendChild(nav)
  }
  return { navBar }
})(document)
