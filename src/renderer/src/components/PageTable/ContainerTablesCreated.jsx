import { IconTableOff, IconTableColumn } from '@tabler/icons-react'
import useBackgroundColor from '../../hooks/useBackgroundColor'
import { Link } from 'react-router-dom'
import { useTables } from '../../hooks/useTables'

function ContainerTablesCreated() {
  const { displayTableName: tables } = useTables()

  return (
    <nav className="px-unit-md">
      {tables.length > 0 && (
        <ul className=" gap-unit-md justify-center flex flex-wrap">
          {tables.map((table) => (
            <TablasItem colName={table} key={table} />
          ))}
        </ul>
      )}
      {tables.length === 0 && <NotData />}
    </nav>
  )
}

export default ContainerTablesCreated

function TablasItem({ colName }) {
  const { bg, text } = useBackgroundColor({ color: 'primary', returnAll: true, addHover: true })
  return (
    <Link to={`/app/tables/${colName}`}>
      <li
        className={`lg:min-w-[21rem] min-w-[16rem] flex gap-unit-md p-unit-md rounded-small hover:scale-105 transition-all cursor-pointer items-center ${bg} ${text}`}
      >
        <IconTableColumn size={32} />
        <p className="text-xl truncate capitalize font-bold">{colName}</p>
      </li>
    </Link>
  )
}

function NotData() {
  return (
    <div className="flex flex-col gap-unit-md text-gray-400 items-center bg-primary-700/25 mx-14 py-unit-md rounded-small">
      <IconTableOff size={64} stroke={1.5} />
      <h2 className="text-primary text-3xl font-bold">No hay tablas</h2>
    </div>
  )
}
