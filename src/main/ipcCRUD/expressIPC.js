import express from 'express'
import cors from 'cors'
import { createPool } from '../db'
import { Pool } from 'pg'

const app = express()

app.use(express.json())
app.use(cors())

app.on('close', () => {
  console.log('se ha cerrado')
})

app.post('/api/:tabla/:id', (req, res) => {
  const { tabla, id } = req.params
  const body = req.body
  console.log('post')
  // const p = createPool()
  console.log(body)
  console.log(req.body)

  res.json({ post: 'hola que paso aqui' })
})
app.get('/api/:tabla/', async (req, res) => {
  try {
    const { tabla } = req.params
    // console.log(global.projectKey)
    const { projectKey } = global
    const pool = new Pool({
      connectionString: `postgresql://${projectKey.username}:${projectKey.password}@${projectKey.hostname}:${projectKey.port}/${projectKey.database}`
    })
    const query = await pool.query(`SELECT * FROM ${tabla}`)
    res.status(200).json({ command: query.command, results: query.rows, total: query.rowCount })
  } catch (error) {
    console.log(error)
    res.json(error)
  }
})
app.get('/api/:tabla/:id', async (req, res) => {
  try {
    const { tabla, id } = req.params
    // console.log(global.projectKey)
    const { projectKey } = global
    const pool = new Pool({
      connectionString: `postgresql://${projectKey.username}:${projectKey.password}@${projectKey.hostname}:${projectKey.port}/${projectKey.database}`
    })
    const query = await pool.query(`SELECT * FROM ${tabla} WHERE id=${id}`)
    res.status(200).json({ command: query.command, results: query.rows, total: query.rowCount })
  } catch (error) {
    console.log(error)
    res.json(error)
  }
})

const server = app.listen(3000, () => {
  console.log('firs int')
  server.close()
})

export function stopExpressServer() {
  server.close()
  console.log('stop manual server')
}

export function openExpressServer() {
  server.listen(3000, () => {
    console.log('reanude server')
  })
}
