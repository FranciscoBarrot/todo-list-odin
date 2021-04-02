import { add } from 'date-fns'
import navBar from './navBar'

export default (function interfaceManipulator(doc) {
  const loadNavBar = navBar(doc)

  return Object.assign({}, loadNavBar)
})(document)
