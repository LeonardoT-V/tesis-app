import { Flex } from '@mantine/core'
import ApiTablesPreview from '../components/databaseTables/ApiTablesPreview'
import CreateNewTable from '../components/databaseTables/CreateNewTable'
import ListTables from '../components/databaseTables/ListTables'

function TablesDatabasePage() {
  return (
    <>
      <ListTables />
      <Flex gap="xl">
        <CreateNewTable />
        <ApiTablesPreview />
      </Flex>
    </>
  )
}

export default TablesDatabasePage
