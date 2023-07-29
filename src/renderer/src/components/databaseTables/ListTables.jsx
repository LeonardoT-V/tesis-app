import { Flex, Grid, Title, UnstyledButton, useMantineTheme } from '@mantine/core'
import { IconTableColumn } from '@tabler/icons-react'
import { IconTable } from '@tabler/icons-react'
import { IconPlus } from '@tabler/icons-react'

function ListTables() {
  const theme = useMantineTheme()

  return (
    <Grid justify="center" gutter="sm" align="stretch">
      <Grid.Col span={12}>
        <Flex
          justify="center"
          align="center"
          gap="sm"
          sx={{
            padding: theme.spacing.sm,
            color:
              theme.colorScheme === 'dark' ? theme.colors.secondary[4] : theme.colors.secondary[6],
            backgroundColor: theme.colors.bg[theme.colorScheme === 'dark' ? 5 : 2],
            borderRadius: theme.radius.sm
          }}
        >
          <IconTable size={40} stroke={1.5} />
          <Title order={1}>Tus Tablas</Title>
        </Flex>
      </Grid.Col>
      <ItemTableCol />
      <ItemTableCol name="docente" />
      <ItemTableCol name="materia" />
      <ItemTableCol name="registro" />
      <ItemTableCol name="pension" />

      <Grid.Col span={10}>
        <Flex>
          <UnstyledButton
            w="60%"
            mx="auto"
            sx={{
              padding: theme.spacing.sm,
              borderRadius: theme.radius.sm,
              transition: '.1s all',
              color:
                theme.colorScheme === 'dark'
                  ? theme.colors.secondary[2]
                  : theme.colors.secondary[6],
              backgroundColor:
                theme.colorScheme === 'dark'
                  ? theme.fn.rgba(theme.colors.secondary[8], 0.2)
                  : theme.fn.rgba(theme.colors.secondary[0], 1),
              ':hover': {
                scale: '102%'
              },
              ':active': {
                scale: '98%'
              }
            }}
          >
            <Flex justify="center" direction="column" align="center">
              <IconPlus size={48} stroke={1} />
              <Title order={4} ta="center">
                Crear Tabla
              </Title>
            </Flex>
          </UnstyledButton>
        </Flex>
      </Grid.Col>
    </Grid>
  )
}

function ItemTableCol({ name = 'estudiantes' }) {
  const theme = useMantineTheme()

  return (
    <Grid.Col md={4} span={6}>
      <Flex>
        <UnstyledButton
          w="100%"
          mx="auto"
          sx={{
            padding: theme.spacing.sm,
            borderRadius: theme.radius.sm,
            transition: '.1s all',
            color: theme.colorScheme === 'dark' ? theme.colors.primary[2] : theme.colors.primary[6],
            backgroundColor:
              theme.colorScheme === 'dark'
                ? theme.fn.rgba(theme.colors.primary[8], 0.2)
                : theme.fn.rgba(theme.colors.primary[0], 1),
            ':hover': {
              scale: '102%'
            },
            ':active': {
              scale: '98%'
            }
          }}
        >
          <Flex gap="xs" align="center">
            <IconTableColumn size={32} stroke={1} />
            <Title order={4} truncate>
              {name}
            </Title>
          </Flex>
        </UnstyledButton>
      </Flex>
    </Grid.Col>
  )
}

export default ListTables
