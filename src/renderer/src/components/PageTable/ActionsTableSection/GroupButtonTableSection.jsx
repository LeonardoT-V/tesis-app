import FormAddNameTable from './FormAddNameTable'
import { IconTablePlus, IconTrash } from '@tabler/icons-react'
import { useTableStore } from '../../../store/tableStore'

function GroupButtonTableSection() {
  const [tableName, field, rows, setTableName] = useTableStore((state) => [
    state.tableName,
    state.field,
    state.rows,
    state.setTableName
  ])
  return (
    <>
      <button
        className="w-80 flex flex-col gap-unit-xs p-unit-md items-center rounded-large transition-all ring-0 hover:scale-105 bg-danger-400/20 text-danger-600"
        onClick={() => setTableName('')}
      >
        <IconTrash stroke={1.5} size={54} />
        <p className="text-xl">Descartar tabla</p>
      </button>
      <FormAddNameTable />
      <button
        className="w-80 flex flex-col gap-unit-xs p-unit-md items-center rounded-large transition-all ring-0 hover:scale-105 bg-success-400/20 text-success-600"
        onClick={() => setTableName('')}
      >
        <IconTablePlus stroke={1.5} size={54} />
        <p className="text-xl">Crear tabla</p>
      </button>
    </>
  )
}

export default GroupButtonTableSection
