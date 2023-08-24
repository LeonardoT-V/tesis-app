import { LOCAL_KEY_PROJECT } from '../utils/env'

class API {
  async tablesCreatedDb() {
    const { db } = this.project
    const res = await window.database.tablesCreatedDb({ project: db })
    const par = JSON.parse(res)
    console.log(par)
    return par.rows
  }

  async columnsCreatedDb() {
    const { db } = this.project

    const response = await window.database.columnsCreatedDb({ project: db })
    const sd = JSON.parse(response)
    console.log(sd)
  }
  async allAtributesDatabase() {
    const store = sessionStorage.getItem(LOCAL_KEY_PROJECT)
    const parse = JSON.parse(store)
    console.log(parse)
    const response = await window.database.allAtributesDatabase({ project: parse.db })
    console.log(response)
    return response
  }
}

const databaseAPI = new API()

export default databaseAPI
