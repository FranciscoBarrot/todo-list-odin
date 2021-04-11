export default (function allProjects() {
  let _allProjects = []
  const getAllProjects = () => {
    return _allProjects
  }
  const setAllProjects = (projects) => {
    _allProjects = projects
  }
  const addProject = (project) => {
    _allProjects.push(project)
  }
  const { forEach } = Array()
  return { forEach, getAllProjects, setAllProjects, addProject }
})()
