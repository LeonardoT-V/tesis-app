import { useParams } from 'react-router-dom'
import { useTables } from '../hooks/useTables'

function TablesColumnPage() {
  const { data = {} } = useTables()
  const { table } = useParams()
  console.log(data[table])

  return (
    <>
      <div>You Columns</div>
      <h2>hola</h2>

      {data[table] &&
        data[table].map((i) => (
          <div key={i.column_name}>
            <h1>{i.column_name}</h1>
          </div>
        ))}
    </>
  )
}

export default TablesColumnPage
