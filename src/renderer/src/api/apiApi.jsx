class API {
  async executeApiRestQuery({ table, queryId, method, body = '' }) {
    const options = {
      method,
      body: body || undefined
    }
    if (queryId) {
      const hola = await fetch(`http://localhost:3000/api/${table}/${queryId}`, options)
      const res = await hola.json()
      return res
    }

    const hola = await fetch(`http://localhost:3000/api/${table}`)
    const res = await hola.json()
    return res
  }
}

const apiAPI = new API()

export default apiAPI
