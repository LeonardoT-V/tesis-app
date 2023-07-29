class API {
  async createNewProject() {
    console.log('create')
  }

  async readAllProject() {
    console.log('response')
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
}

const projectAPI = new API()

export default projectAPI
