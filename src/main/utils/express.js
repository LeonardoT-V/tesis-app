import express from 'express'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.json())

app.on('close', () => {
  console.log('se ha cerrado')
})

app.get('/*/:tabla', (req, res) => {
  const param = req.params
  res.send(param)
})

const server = app.listen(3000, () => {
  console.log('open')
})

export function stopExpressServer() {
  console.log('stop manual server')
  server.close()
}

export function openExpressServer() {
  server.listen(3000, () => {
    console.log('reanude server')
  })
}
