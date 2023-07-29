import { Alert, Flex, Text, Title } from '@mantine/core'
import { IconDatabaseCog } from '@tabler/icons-react'
import { useProjectStore } from '../../store/projectStore'

function InfoNavSection() {
  const [project] = useProjectStore((state) => [state.project])

  return (
    <Alert icon={<IconDatabaseCog stroke={1.5} />} p="xs">
      <Flex direction="column" w="80%">
        <Title order={3} fz="sm" truncate>
          {project?.name}
        </Title>
        <Text
          fz="xs"
          truncate
          color="primary.5"
          sx={(theme) => ({
            color: theme.colorScheme === 'dark' ? theme.colors.primary[2] : theme.colors.primary[6]
          })}
        >
          {project?.db.username} en
          <Text
            span
            sx={(theme) => ({
              color:
                theme.colorScheme === 'dark' ? theme.colors.secondary[2] : theme.colors.secondary[6]
            })}
          >
            {''} {project?.db.database}
          </Text>
        </Text>

        <Text fz="xs" color="dimmed" truncate>
          {project?.db.hostname}
        </Text>
      </Flex>
    </Alert>
  )
}

export default InfoNavSection
