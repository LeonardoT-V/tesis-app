import { Box, Flex, Text, Title } from '@mantine/core'
import { IconHttpPost } from '@tabler/icons-react'
import { IconHttpPut } from '@tabler/icons-react'
import { IconHttpDelete } from '@tabler/icons-react'
import { IconHttpGet } from '@tabler/icons-react'

function ApiTablesPreview() {
  return (
    <Flex
      direction="column"
      gap="md"
      sx={(theme) => ({
        border:
          theme.colorScheme === 'dark'
            ? `1px solid ${theme.colors.gray[8]}`
            : `1px solid ${theme.colors.gray[3]}`,
        padding: theme.spacing.sm,
        borderRadius: theme.radius.sm
      })}
    >
      <Box>
        <Title
          order={3}
          sx={(theme) => ({
            color: theme.colorScheme === 'dark' ? theme.colors.primary[3] : theme.colors.primary[6]
          })}
        >
          API Endpoints
        </Title>
      </Box>

      <Flex direction="column" gap="md" px="xl">
        <Box>
          <Title
            order={4}
            sx={(theme) => ({
              color:
                theme.colorScheme === 'dark' ? theme.colors.secondary[4] : theme.colors.secondary[6]
            })}
          >
            Consultas por Id
          </Title>
          <Text fz="xs" inline color="dimmed">
            Accede a estas rutas haciendo uso del id
          </Text>
        </Box>

        <Flex direction="column" gap="xs" px="xl">
          <ItemsApiEndpoint tableName="awesome" color="lime" Icon={IconHttpGet} />
          <ItemsApiEndpoint tableName="awesome" color="teal" Icon={IconHttpPost} />
          <ItemsApiEndpoint tableName="awesome" color="grape" Icon={IconHttpPut} />
          <ItemsApiEndpoint tableName="awesome" color="red" Icon={IconHttpDelete} />
        </Flex>
      </Flex>
      <Flex direction="column" px="xl" gap="xs">
        <Box>
          <Title
            order={4}
            sx={(theme) => ({
              color:
                theme.colorScheme === 'dark' ? theme.colors.secondary[4] : theme.colors.secondary[6]
            })}
          >
            Consultas General
          </Title>
          <Text fz="xs" inline color="dimmed">
            Extraer todos los datos de la tabla
          </Text>
        </Box>
        <Flex direction="column" gap="xs" px="xl">
          <ItemsApiEndpoint isId={false} tableName="awesome" color="lime" Icon={IconHttpGet} />
        </Flex>
      </Flex>
    </Flex>
  )
}

function ItemsApiEndpoint({ color, Icon, isId = true, tableName }) {
  return (
    <Flex gap="md" align="center">
      <Flex
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.fn.rgba(theme.colors[color][9], 0.3)
              : theme.fn.rgba(theme.colors[color][4], 0.5),
          color: theme.colorScheme === 'dark' ? theme.colors[color][4] : theme.colors[color][6],
          borderRadius: theme.radius.xl,
          padding: `0 ${theme.spacing.md}`
        })}
      >
        <Icon size={24} />
      </Flex>
      <Text inline fz="sm">
        {`/api/${tableName}${isId ? '/:id' : ''}`}{' '}
      </Text>
    </Flex>
  )
}

export default ApiTablesPreview
