import { notifications } from '@mantine/notifications'

class API {
  async createNewProject(form, callback) {
    notifications.show({
      id: 'project-notify',
      title: 'Comprobando...',
      message: 'Verificando la conexion y existencia del proyecto',
      radius: 'md',
      loading: true,
      withCloseButton: false,
      autoClose: false
    })
    const { error, response } = await window.project.createNewProject(form)
    if (error) {
      notifications.update({
        id: 'project-notify',
        title: `${error?.data.code} ${error?.data.description}`,
        message: error?.data.details,
        color: 'red',
        autoClose: 3000
      })
      return
    }

    notifications.update({
      id: 'project-notify',
      title: 'Proyecto creado',
      message: 'Su proyecto ha sido creado correctamente',
      autoClose: 3000
    })
    callback(response)
  }

  async readAllProject() {
    const { error, response } = await window.project.readAllProject()
    if (error) {
      return error
    }
    return response
  }

  async readOneProject() {
    console.log('read one')
  }

  async updateOneProject() {
    console.log('update')
  }

  async deleteOneProject() {
    console.log('delete')
  }

  async openSelectedProject(project, callback) {
    notifications.show({
      id: 'project-notify',
      title: 'Comprobando...',
      message: 'Verificando la conexion y existencia del proyecto',
      radius: 'md',
      loading: true,
      withCloseButton: false,
      autoClose: false
    })
    const db = await window.project.tryconectionToDB(project)
    if (db?.error) {
      notifications.update({
        id: 'project-notify',
        title: `${db?.error.data.details}`,
        message: 'Intente modificar su archivo de conexión',
        color: 'red',
        autoClose: 3000
      })
      return
    }

    notifications.update({
      id: 'project-notify',
      title: `Conectado a ${project.database}`,
      message: `Bienvenido de vuelta ${project.username}`,
      autoClose: 1000
    })

    callback()
  }
}

const projectAPI = new API()

export default projectAPI
