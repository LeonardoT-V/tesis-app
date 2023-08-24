const { exec, execSync } = require('node:child_process')
class ExampleIPC {
  constructor(app) {
    this.app = app
    this.APPDATA = this.app.getPath('userData') + '/Projects'
  }

  async executeLocalCommand(project) {
    /* let result = []
    exec('node --version', (error, stdout, stderr) => {
      if (error) {
        // console.error(`Error al ejecutar el comando: ${error.message}`)
        result = result + error
        return error
      }
      if (stderr) {
        // console.error(`Error en la salida estándar del comando: ${stderr}`)
        result = result + stderr
        return stderr
      }
      console.log(`Salida del comando:\n${stdout}`)
      //result = result + stdout
      // result = 'mundo'
      result.push(stdout)
    })
    console.log({ result })
    return result */
    const cmdDocker = 'docker exec frosty_yalow pg_dump postgres > backup'
    try {
      const hola = execSync(cmdDocker, {
        encoding: 'utf8'
      })
      console.log(hola)
      return hola
    } catch (err) {
      return err.message.toString()
    }
  }

  async updateOneProject(project) {
    console.log('update', project)
  }

  async deleteOneProject(project) {
    console.log('delete', project)
  }
}

export default ExampleIPC
