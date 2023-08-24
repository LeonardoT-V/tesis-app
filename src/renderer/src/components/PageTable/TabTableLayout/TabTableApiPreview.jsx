import { IconHttpGet } from '@tabler/icons-react'
import useBackgroundColor from '../../../hooks/useBackgroundColor'
import { useTableStore } from '../../../store/tableStore'
import { IconHttpDelete } from '@tabler/icons-react'
import { IconHttpPut } from '@tabler/icons-react'
import { IconHttpPost } from '@tabler/icons-react'

function TabTableApiPreview() {
  const [tableName] = useTableStore((state) => [state.tableName])
  return (
    <div className="w-full flex flex-col px-unit-md gap-unit-sm">
      <h3 className="text-lg text-warning-600 font-bold">Api Preview</h3>
      <div className="flex flex-col gap-unit-sm">
        <p className="text-gray-400 text-sm">Por un id</p>
        <div className="flex flex-col gap-unit-xs pl-unit-xs">
          <ItemApi tableName={tableName} method="get" color="sky" />
          <ItemApi tableName={tableName} method="post" color="lime" />
          <ItemApi tableName={tableName} method="delete" color="red" />
          <ItemApi tableName={tableName} method="put" color="purple" />
        </div>
      </div>
      <div className="flex flex-col gap-unit-sm">
        <p className="text-gray-400 text-sm">Buscar toda la tabla</p>
        <div className="flex flex-col gap-unit-xs pl-unit-xs">
          <ItemApi tableName={tableName} isId={false} method="get" color="sky" />
        </div>
      </div>
    </div>
  )
}

export default TabTableApiPreview

function ItemApi({ color, tableName, isId = true, method }) {
  const { text, bg } = useBackgroundColor({ returnAll: true, color })
  const IconList = {
    delete: IconHttpDelete,
    get: IconHttpGet,
    put: IconHttpPut,
    post: IconHttpPost
  }
  const Icon = IconList[method]

  return (
    <div className="flex gap-unit-xs items-center">
      <div className={`${text} ${bg} rounded-small px-5`}>
        <Icon />
      </div>
      <div className="flex grow w-1 ">
        <p>/api/</p>
        <p className="truncate">{tableName}</p>
        <span className="text-primary-400">{isId && '/:id'}</span>
      </div>
    </div>
  )
}
