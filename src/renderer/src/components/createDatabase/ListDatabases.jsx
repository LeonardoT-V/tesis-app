import { ActionIcon, Box, Divider, Flex, Text, Title, UnstyledButton } from '@mantine/core'
import { IconReload } from '@tabler/icons-react'
import { IconEdit } from '@tabler/icons-react'
import { IconTrash } from '@tabler/icons-react'
import { IconDatabase } from '@tabler/icons-react'

function ListDatabases() {
  const a = false
  if (true === a) {
    return (
      <Flex bg={'red'} p="sm" direction="column" gap="sm" h="100%" justify="center">
        <Title order={2} color="secondary">
          No existen proyectos
        </Title>
        <Divider label="O" labelPosition="center" />
        <IconReload />
      </Flex>
    )
  }

  return (
    <UnstyledButton
      sx={(theme) => ({
        transition: '.1s all',
        padding: `${theme.spacing.xs} ${theme.spacing.xl}`,
        ':hover': {
          scale: '102%',
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.fn.darken(theme.colors.primary[2], 0.83)
              : theme.fn.lighten(theme.colors.primary[4], 0.85)
        }
      })}
    >
      <Flex align="center" gap="sm" justify="center">
        <Box
          sx={(theme) => ({
            color: theme.colorScheme === 'dark' ? theme.colors.primary[1] : theme.colors.primary[8]
          })}
        >
          <IconDatabase size={48} />
        </Box>

        <Flex direction="column" w="60%">
          <Title
            order={4}
            transform="capitalize"
            truncate
            sx={(theme) => ({
              color:
                theme.colorScheme === 'dark' ? theme.colors.primary[2] : theme.colors.primary[5]
            })}
          >
            docker
          </Title>
          <Flex>
            <Text color="dimmed" fz="xs" transform="capitalize" truncate>
              localhost localhost localhost localhost localhost
            </Text>
            <Text color="dimmed" fz="xs">
              :5432
            </Text>
          </Flex>
          <Text color="dimmed" fz="xs" truncate>
            postgres
          </Text>
        </Flex>
        <Flex gap="xs">
          <ActionIcon color="lime">
            <IconEdit />
          </ActionIcon>
          <ActionIcon color="red">
            <IconTrash />
          </ActionIcon>
        </Flex>
      </Flex>
    </UnstyledButton>
  )
}

export default ListDatabases
