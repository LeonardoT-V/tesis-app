import { readFileSync } from 'fs'
import { createPool } from '../db'
import searchCodeErrorPg from '../utils/postgresErrorCode'

class EditorIPC {
  constructor(app) {
    this.app = app
    this.APPDATA = this.app.getPath('userData') + '/Projects'
  }

  async executeSqlCommand(project, code) {
    try {
      const pool = createPool(project)
      const res = await pool.query(code)
      return JSON.stringify({ response: { data: res } })
    } catch (error) {
      const errorStatus = searchCodeErrorPg(error)
      return JSON.stringify({ error: { data: { ...error, ...errorStatus } } })
    }
  }

  async executeFileCommand(project, filePath) {
    try {
      const fileQuery = readFileSync(filePath, { encoding: 'utf-8' })
      const pool = createPool(project)
      const res = await pool.query(fileQuery)
      return JSON.stringify({ response: { data: res, code: fileQuery } })
    } catch (error) {
      const errorStatus = searchCodeErrorPg(error)
      return JSON.stringify({ error: { data: { ...error, ...errorStatus } } })
    }
  }

  async executeApiRestQuery({ project, table, queryId, method, isId }) {
    console.log({ project, table, queryId, method, isId })
  }
}

export default EditorIPC
