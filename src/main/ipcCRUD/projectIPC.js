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

      // si no existe una conexión, enviar al cliente el error presentado
      if (conection) {
        return conection
      }

      // si no existe el directorio para los proyecto se crea la carpeta
      if (!fs.existsSync(`${this.APPDATA}`)) {
        fs.mkdirSync(`${this.APPDATA}`)
      }

      // verifica si existe el un proyecto con el mismo nombre
      if (fs.existsSync(`${this.APPDATA}/${project.file}.json`)) {
        return {
          error: {
            data: {
              code: '',
              description: `El proyecto ${project.file} ya existe`,
              details: 'Intente crear un nuevo proyecto con otro nombre'
            }
          }
        }
      }

      const newJson = {
        name: project.file,
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
        `${this.APPDATA}/${project.file}.json`,
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
    const allFiles = fs.readdirSync(this.APPDATA, {
      encoding: 'utf-8',
      withFileTypes: false
    })

    if (!fs.existsSync(`${this.APPDATA}/${project.namefile}.json`)) {
      return { error: { description: `El projecto ${project.namefile} no existe` } }
    }

    if (allFiles.includes(`${project.newNameFile}.json`)) {
      if (project.newNameFile !== project.namefile) {
        return {
          error: { description: `El projecto ${project.newNameFile} ya existe, use otro nombre` }
        }
      }
    }

    const projectParse = JSON.parse(
      fs.readFileSync(`${this.APPDATA}/${project.namefile}.json`, {
        encoding: 'utf-8'
      })
    )

    if (project.newNameFile !== project.namefile) {
      fs.renameSync(
        `${this.APPDATA}/${project.namefile}.json`,
        `${this.APPDATA}/${project.newNameFile}.json`
      )
    }
    projectParse.name = project.newNameFile
    projectParse.db = {
      username: project.username,
      password: project.password,
      hostname: project.hostname,
      port: project.port,
      database: project.database
    }

    fs.writeFileSync(
      `${this.APPDATA}/${project.newNameFile}.json`,
      JSON.stringify(projectParse, null, 2)
    )

    return {
      response: { description: `El projecto ha sido ${project.newNameFile} ha sido actualizado` }
    }
  }

  async deleteOneProject(project) {
    if (!fs.existsSync(`${this.APPDATA}/${project.namefile}.json`)) {
      return { error: { description: `El projecto ${project.namefile} no existe` } }
    }

    fs.rmSync(`${this.APPDATA}/${project.namefile}.json`)

    return { response: { description: `Project ${project.namefile} deleted` } }
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
    global.projectKey = project
    return false
  }
}

export default ProjectIPC
