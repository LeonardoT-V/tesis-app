import MyDatabaseCreatedItem from './MyDatabaseCreatedItem'
import { Code, Divider, Spinner } from '@nextui-org/react'
import { useQuery } from '@tanstack/react-query'
import { projectService } from '../../service/projectService'
import { IconDatabaseOff } from '@tabler/icons-react'
function MyDatabaseCreated() {
  const { readAllProject } = projectService()
  const {
    isLoading,
    data = [],
    refetch
  } = useQuery({
    queryKey: ['myprojects:created'],
    queryFn: readAllProject
  })

  return (
    <div className="bg-content1 rounded-lg flex flex-col gap-unit-md w-full grow">
      <Divider />
      {isLoading && (
        <div className="justify-center  items-center flex-col flex grow">
          <Spinner size="lg" />
        </div>
      )}

      {!isLoading && data.length === 0 && <ErrorDialog />}

      {!isLoading && data.length > 0 && (
        <section className="flex flex-col overflow-y-scroll px-4 w-full grow h-1">
          {data.map((item) => (
            <MyDatabaseCreatedItem item={item} key={item.name} refetch={refetch} />
          ))}
        </section>
      )}
      <Divider />
    </div>
  )
}

export default MyDatabaseCreated

function ErrorDialog() {
  return (
    <Code size="lg" className="justify-center  items-center flex-col flex grow gap-unit-xl">
      <IconDatabaseOff size={64} stroke={1.5} />
      <div className="flex flex-col text-center">
        <h2 className="text-2xl text-primary-600">No has creado un</h2>
        <h2 className="text-4xl text-primary-500">Proyecto</h2>
      </div>
    </Code>
  )
}
