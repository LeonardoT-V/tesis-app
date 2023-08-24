import { LOCAL_KEY_PROJECT } from '../utils/env'
import toast from '../utils/toast'

class API {
  async createNewProject({ form }) {
    const idToast = toast.loadingToast('Cargando...', 'Configurando su proyecto')

    const { error, response } = await window.project.createNewProject(form)
    if (error) {
      toast.errorToast(idToast, error?.data.description, error?.data.details)
      return
    }
    sessionStorage.setItem(LOCAL_KEY_PROJECT, JSON.stringify(response))
    toast.successToast(idToast, 'paso', 'todo bien')
    return true
  }

  async readAllProject() {
    const { error, response } = await window.project.readAllProject()
    if (error) {
      return error.data
    }

    return response.data
  }

  async deleteOneProject({ project }) {
    const { error, response } = await window.project.deleteOneProject({ namefile: project })
    if (error) {
      toast.errorToast(0, 'Ha ocurrido un error', error?.description)
      return
    }
    toast.successToast(0, 'Borrado Correctamente', response?.description)
  }

  async openSelectedProject({ project }) {
    const { db: projectDb } = project
    const idToast = toast.loadingToast(
      'Comprobando...',
      'Verificando la conexion y existencia del proyecto'
    )
    const db = await window.project.tryconectionToDB(project.db)
    if (db?.error) {
      toast.errorToast(idToast, db?.error.data.details, 'Intente modificar su archivo de conexión')
      return false
    }
    const holita = await window.database.allAtributesDatabase({ project: project.db })
    sessionStorage.setItem(LOCAL_KEY_PROJECT, JSON.stringify(project))
    toast.successToast(
      idToast,
      `Conectado a ${projectDb.database}`,
      `Bienvenido de vuelta ${projectDb.username}`
    )
    sessionStorage.setItem('database:conf', JSON.stringify(holita))
    return holita
  }
}

const projectAPI = new API()

export default projectAPI
