import fs from 'fs'
import { Pool } from 'pg'
import searchCodeErrorPg from '../utils/postgresErrorCode'

class ProjectIPC {
  constructor(app) {
    this.app = app
    this.APPDATA = this.app.getPath('userData') + '/Projects'
  }

  async createNewProject(project) {
    try {
      const conection = await this.tryconectionToDB(project)

      if (conection) {
        return conection
      }

      // si no existe el directorio se crea
      if (!fs.existsSync(`${this.APPDATA}`)) {
        fs.mkdirSync(`${this.APPDATA}`)
      }

      // verifica la existencia del proyecto
      if (fs.existsSync(`${this.APPDATA}/${project.namefile}.json`)) {
        return {
          error: {
            data: {
              code: '',
              description: `El proyecto ${project.namefile} ya existe`,
              details: 'Intente crear un nuevo proyecto con otro nombre'
            }
          }
        }
      }

      const newJson = {
        name: project.namefile,
        db: {
          username: project.username,
          password: project.password,
          hostname: project.hostname,
          port: project.port,
          database: project.database
        }
      }

      // crea el archivo json con la configuracion de la base de datos
      fs.writeFile(
        `${this.APPDATA}/${project.namefile}.json`,
        JSON.stringify(newJson, null, 2),
        (err) => {
          if (err) return console.log(err)
          console.log('file create')
        }
      )

      return { response: newJson }
    } catch (error) {
      const errorStatus = searchCodeErrorPg(error)
      return JSON.stringify({ error: { data: errorStatus } })
    }
  }

  async readAllProject() {
    if (!fs.existsSync(`${this.APPDATA}`)) {
      fs.mkdirSync(`${this.APPDATA}`)
    }

    const files = fs.readdirSync(this.APPDATA, {
      encoding: 'utf-8',
      withFileTypes: false
    })

    if (files.length === 0) {
      /* throw new Error('No projects found', {
        cause: { msg: 'hay cero' }
      }) */
      return { error: { msg: 'No se encontraron proyectos', data: [] } }
    }

    const projects = files.map((project) => {
      const newJson = fs.readFileSync(`${this.APPDATA}/${project}`, { encoding: 'utf-8' })
      const parse = JSON.parse(newJson)
      return parse
    })

    return { response: { data: projects } }
  }

  async readOneProject(project) {
    console.log('read one', project)
  }

  async updateOneProject(project) {
    console.log('update', project)
  }

  async deleteOneProject(project) {
    console.log('delete', project)
  }

  async tryconectionToDB(project) {
    const pool = new Pool({
      connectionString: `postgresql://${project.username}:${project.password}@${project.hostname}:${project.port}/${project.database}`
    })

    const dataConnect = await pool.connect().catch((er) => er)

    if (dataConnect.code) {
      const errorStatus = searchCodeErrorPg(dataConnect)
      return { error: { data: errorStatus } }
    }
    return false
  }
}

export default ProjectIPC
