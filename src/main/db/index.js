import { Pool } from 'pg'
// import fs from 'fs'

export function createPool(project) {
  // seleccionar el uri
  const pool = new Pool({
    connectionString: `postgresql://${project.username}:${project.password}@${project.hostname}:${project.port}/${project.database}`
  })
  pool.on('remove', () => console.log('close pool'))
  return pool
}
