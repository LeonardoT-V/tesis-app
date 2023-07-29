import { useTheme } from '@emotion/react'
import { Container, Table } from '@mantine/core'
import ModalFormCreateTable from './ModalFormCreateTable'

function CreateNewTable() {
  const theme = useTheme()
  return (
    <Container
      fluid
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.bg[3] : theme.colors.bg[0],
        width: '100%',
        borderRadius: theme.radius.sm
      })}
      p="xs"
    >
      <Table horizontalSpacing="xl" verticalSpacing="xs" mt="xs">
        <thead>
          <tr
            style={{
              backgroundColor:
                theme.colorScheme === 'dark' ? theme.colors.bg[5] : theme.colors.bg[2],
              color: theme.colors.primary[2]
            }}
          >
            <th
              style={{
                color:
                  theme.colorScheme === 'dark' ? theme.colors.primary[4] : theme.colors.primary[6]
              }}
            >
              Nombre
            </th>
            <th
              style={{
                color:
                  theme.colorScheme === 'dark' ? theme.colors.primary[4] : theme.colors.primary[6]
              }}
            >
              Tipo
            </th>
            <th
              style={{
                color:
                  theme.colorScheme === 'dark' ? theme.colors.primary[4] : theme.colors.primary[6]
              }}
            >
              Default
            </th>
            <th
              style={{
                color:
                  theme.colorScheme === 'dark' ? theme.colors.primary[4] : theme.colors.primary[6]
              }}
            >
              Null
            </th>
          </tr>
        </thead>
        <tbody>
          {/*  {results.rows?.map((row, index) => (
          <tr key={index}>
            {results.fields?.map((col) => (
              <td
                style={{
                  color: col.name === 'id' ? theme.colors.secondary[6] : theme.colors.black,
                  fontWeight: col.name === 'id' ? 'bold' : 'normal'
                }}
                key={`${row[col.name]}-${index}`}
              >
                {row[col.name]}
              </td>
            ))}
          </tr>
        ))} */}
          <tr>
            <td
              style={{
                color: 'name' === 'name' ? theme.colors.secondary[6] : theme.colors.black,
                fontWeight: 'name' === 'name' ? 'bold' : 'normal'
              }}
            >
              id
            </td>
            <td>numeric</td>
            <td>1</td>
            <td>true</td>
          </tr>
          <tr>
            <td
              style={{
                color: 'name' === 'name' ? theme.colors.secondary[6] : theme.colors.black,
                fontWeight: 'name' === 'name' ? 'bold' : 'normal'
              }}
            >
              id
            </td>
            <td>Text</td>
            <td>null</td>
            <td>false</td>
          </tr>
        </tbody>
      </Table>

      <ModalFormCreateTable />
    </Container>
  )
}

export default CreateNewTable
