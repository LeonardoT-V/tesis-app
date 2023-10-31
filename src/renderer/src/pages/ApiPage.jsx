import TitleContainer from '../components/ui/TitleContainer'
import { IconSignRight } from '@tabler/icons-react'
import ApiActions from '../components/PageApi/ApiActions'
import { useTables } from '../hooks/useTables'
import { useApiStore } from '../store/apiStore'
import JsonFormat from '../components/ui/JsonFormat'

function ApiPage() {
  const { displayTableName } = useTables()
  const apiResult = useApiStore((state) => state.apiResult)
  return (
    <>
      <TitleContainer
        title="Prueba tus rutas"
        className="text-4xl"
        Icon={<IconSignRight stroke={1.5} size={44} />}
      />

      <section className="flex gap-unit-md">
        <section className="bg-content1 w-96 p-unit-sm rounded-small flex flex-col gap-unit-sm">
          <h2 className="text-primary-500 font-bold text-2xl">Tus Tablas</h2>
          {displayTableName.map((i) => (
            <ApiActions table={i} key={i} />
          ))}
        </section>
        <section className="grow bg-content2 p-unit-sm rounded-small">
          <JsonFormat result={apiResult.result} title={apiResult.table} />
        </section>
      </section>
    </>
  )
}

export default ApiPage
