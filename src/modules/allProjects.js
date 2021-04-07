import project from './project'

export default (function allProjects() {
  let _allProjects = []
  const getAllProjects = () => {
    return _allProjects
  }
  const addProject = (name) => {
    const newProject = project(name)
    _allProjects.push(newProject)
  }
  const { forEach } = Array()
  return { forEach, getAllProjects, addProject }
})()
