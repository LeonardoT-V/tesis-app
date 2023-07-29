/* eslint-disable react/prop-types */
import { Container, Flex, Table, Text, Title, useMantineTheme } from '@mantine/core'
import { IconCheck } from '@tabler/icons-react'

function TableResults({ results }) {
  const theme = useMantineTheme()

  return (
    <>
      <Container
        fluid
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.fn.rgba(theme.colors.primary[8], 0.2)
              : theme.fn.rgba(theme.colors.primary[0], 1),
          borderRadius: theme.radius.xs,
          padding: theme.spacing.xs
        })}
      >
        <Flex gap="xl" align="center">
          <Flex
            sx={(theme) => ({
              backgroundColor:
                theme.colorScheme === 'dark'
                  ? theme.fn.rgba(theme.colors.primary[6], 0.3)
                  : theme.fn.rgba(theme.colors.primary[3], 0.4),
              color:
                theme.colorScheme === 'dark' ? theme.colors.primary[4] : theme.colors.primary[6],
              borderRadius: theme.radius.lg,
              padding: theme.spacing.sm
            })}
          >
            <IconCheck size={32} />
          </Flex>
          <Flex direction="column">
            <Title order={4}>{results?.command}</Title>
            <Text
              sx={(theme) => ({
                color:
                  theme.colorScheme === 'dark' ? theme.colors.primary[4] : theme.colors.primary[6]
              })}
            >
              Rows : {results?.rowCount}
            </Text>
          </Flex>
        </Flex>
      </Container>

      <Table horizontalSpacing="xl" verticalSpacing="xs" mt="xs">
        <thead>
          <tr
            style={{
              backgroundColor:
                theme.colorScheme === 'dark' ? theme.colors.bg[5] : theme.colors.bg[2],
              color: theme.colors.primary[2]
            }}
          >
            {results.fields?.map((col) => (
              <th
                key={col.name}
                style={{
                  color:
                    theme.colorScheme === 'dark' ? theme.colors.primary[4] : theme.colors.primary[6]
                }}
              >
                {col.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {results.rows?.map((row, index) => (
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
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default TableResults
