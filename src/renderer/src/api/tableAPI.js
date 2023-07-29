class API {
  // web
  async addNewColumnToStore(store, column) {
    console.log('create')
  }

  async readAllProject() {
    console.log('response')
  }

  // backend

  async readOneProject() {
    console.log('read one')
  }

  async updateOneProject() {
    console.log('update')
  }

  async deleteOneProject() {
    console.log('delete')
  }
}

const tableAPI = new API()

export default tableAPI
