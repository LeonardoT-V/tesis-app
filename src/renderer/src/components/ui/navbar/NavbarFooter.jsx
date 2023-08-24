import { IconDatabase } from '@tabler/icons-react'
import { useProject } from '../../../hooks/useProject'
import { useNavigate } from 'react-router-dom'
import { Button } from '@nextui-org/react'
import { IconDoorExit, IconSettings } from '@tabler/icons-react'

function NavbarFooter() {
  const { project, deleteProjectStore } = useProject()

  const navigate = useNavigate()

  return (
    <section className="flex flex-col gap-unit-xs ">
      <footer className="px-unit-md py-unit-xs rounded-small flex gap-unit-sm bg-primary-700/25">
        <IconDatabase size={48} className="mt-2 stroke-primary-400" />
        <div className="grow w-1">
          <h3 className="text-lg text-primary-400 font-bold truncate capitalize">
            {project?.name}
          </h3>
          <div className="flex text-xs text-gray-200">
            <p className="truncate">{project?.db?.hostname}</p>
            <p className="text-primary-500">:5432</p>
          </div>
          <p className="text-xs text-gray-400">
            en <span className="text-xs text-warning-500">{project?.db?.username}</span>
          </p>
        </div>
      </footer>
      <div className="flex gap-x-unit-xs">
        <Button isIconOnly size="sm" className="w-full" variant="faded" radius="sm">
          <IconSettings stroke={1.5} />
        </Button>
        <Button
          isIconOnly
          size="sm"
          className="w-full"
          color="danger"
          variant="faded"
          radius="sm"
          onPress={() => {
            deleteProjectStore()
            navigate('/')
          }}
        >
          <IconDoorExit stroke={1.5} />
        </Button>
      </div>
    </section>
  )
}

export default NavbarFooter
