import projectAPI from '../api/projectAPI'
import { useNavigate } from 'react-router-dom'
import { useDatabaseStore } from '../store/databaseStore'

export const projectService = () => {
  const navigate = useNavigate()
  const [setDatabase] = useDatabaseStore((state) => [state.setDatabase])

  const createNewProject = async ({ form }) => {
    const res = await projectAPI.createNewProject({ form })
    if (!res) return
    navigate('/app/home')
  }
  const readAllProject = async () => {
    const data = await projectAPI.readAllProject()
    return data
  }
  const deleteOneProject = async ({ project }) => {
    await projectAPI.deleteOneProject({ project })
    return
  }
  const openSelectedProject = async ({ project }) => {
    const res = await projectAPI.openSelectedProject({ project })
    if (!res) return
    setDatabase(res)
    navigate('/app/home')
    return
  }

  return {
    createNewProject,
    readAllProject,
    deleteOneProject,
    openSelectedProject
  }
}
