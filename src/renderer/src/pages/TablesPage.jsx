import TitleContainer from '../components/ui/TitleContainer'
import FormAddNameTable from '../components/PageTable/ActionsTableSection/FormAddNameTable'
import { useTableStore } from '../store/tableStore'
import GroupButtonTableSection from '../components/PageTable/ActionsTableSection/GroupButtonTableSection'
import TableBasic from '../components/ui/TableBasic'
import { IconTable, IconTableColumn } from '@tabler/icons-react'
import ModalSelectTypeTable from '../components/PageTable/ModalTablePage/ModalSelectTypeTable'
import TabTableLayoutMain from '../components/PageTable/TabTableLayout/TabTableLayoutMain'
import CodePreviewTableCreation from '../components/PageTable/CodePreviewTableCreation'
import ContainerTablesCreated from '../components/PageTable/ContainerTablesCreated'
import { useEffect } from 'react'
import { Button } from '@nextui-org/react'

function TablesPage() {
  const [tableName, field, rows, resetTable] = useTableStore((state) => [
    state.tableName,
    state.field,
    state.rows,
    state.resetTable
  ])
  useEffect(() => {
    return resetTable()
  }, [])
  return (
    <>
      <section className="flex flex-col gap-unit-md">
        {!tableName && (
          <>
            <TitleContainer
              title="Tus Tablas"
              className="text-4xl justify-center"
              Icon={<IconTable stroke={1.5} size={44} />}
            />
            <ContainerTablesCreated />
          </>
        )}

        <div className="flex gap-unit-md px-unit-2xl lg:px-unit-4xl justify-center">
          {!tableName ? <FormAddNameTable /> : <GroupButtonTableSection />}
        </div>
      </section>

      {tableName && (
        <>
          <TitleContainer
            className=" text-3xl text-white/80"
            title={`Creando Tabla [ ${tableName} ]`}
            Icon={<IconTableColumn stroke={1.5} size={40} />}
          />
          <section className="bg-content1 p-unit-md rounded-small gap-unit-sm flex flex-col">
            <div className="border border-content2 rounded-md">
              <TableBasic cols={field} rows={rows} />
            </div>

            <div className="flex gap-unit-md">
              <Button color="warning" variant="faded" radius="sm" className="w-64 lg:w-96 ml-auto">
                Añadir relaciones
              </Button>
              <ModalSelectTypeTable />
            </div>
          </section>
          <section className="flex flex-col gap-unit-md lg:flex-row-reverse">
            <CodePreviewTableCreation />
            <TabTableLayoutMain />
          </section>
        </>
      )}
    </>
  )
}

export default TablesPage
