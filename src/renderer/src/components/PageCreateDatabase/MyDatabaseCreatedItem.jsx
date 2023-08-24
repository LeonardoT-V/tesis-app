import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react'
import { IconTrash, IconDatabase, IconDotsVertical } from '@tabler/icons-react'
import { projectService } from '../../service/projectService'
import { IconEdit } from '@tabler/icons-react'

function MyDatabaseCreatedItem({ item, refetch }) {
  const { openSelectedProject, deleteOneProject } = projectService()
  return (
    <div
      className="py-unit-xs px-unit-sm flex items-center gap-unit-sm hover:bg-primary-700/25 rounded-small hover:scale-105 hover:cursor-pointer transition-transform"
      onClick={() => {
        openSelectedProject({ project: item })
      }}
    >
      <IconDatabase size={48} className="stroke-primary-400" />
      <article className="grow w-1">
        <h4 className={`text-md font-bold text-primary-400 truncate`}>{item.name}</h4>
        <div className="flex text-sm text-default-500">
          <p className="truncate">{item.db.hostname}</p>
          <p className="text-primary-500">:5432</p>
        </div>
        <div className="flex gap-unit-xs text-xs">
          <p className="text-default-500 truncate">{item.db.username}</p>
          <p className="text-warning-700">{item.db.database}</p>
        </div>
      </article>
      <Dropdown>
        <DropdownTrigger>
          <Button variant="light" isIconOnly>
            <IconDotsVertical />
          </Button>
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownItem
            startContent={<IconEdit />}
            onClick={() => {
              deleteOneProject({ project: item.name })
              refetch()
            }}
          >
            Editar Configuración
          </DropdownItem>
          <DropdownItem
            className="text-danger"
            color="danger"
            startContent={<IconTrash />}
            onClick={() => {
              deleteOneProject({ project: item.name })
              refetch()
            }}
          >
            Delete file
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}

export default MyDatabaseCreatedItem
