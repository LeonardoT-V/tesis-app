import { ActionIcon, Box, Flex, Text, Title } from '@mantine/core'
import { IconEdit } from '@tabler/icons-react'
import { IconTrash } from '@tabler/icons-react'
import { IconDatabase } from '@tabler/icons-react'
import projectAPI from '../../api/projectAPI'
import { useEffect, useState } from 'react'
import { useLocation } from 'wouter'
import { useProjectStore } from '../../store/projectStore'

function ListDatabases() {
  const [projects, setProjects] = useState(null)
  // eslint-disable-next-line no-unused-vars
  const [_, setLocation] = useLocation()
  const projectStore = useProjectStore((state) => state)

  useEffect(() => {
    async function fetchData() {
      const results = await projectAPI.readAllProject()
      setProjects(results)
    }
    fetchData()
  }, [])

  if (projects?.data.length === 0) {
    return (
      <Flex p="sm" direction="column" gap="xl" h="100%" justify="center" align="center">
        <Box
          sx={(theme) => ({
            color: theme.colorScheme === 'dark' ? theme.colors.primary[5] : theme.colors.primary[7]
          })}
        >
          <IconDatabase size={94} />
        </Box>
        <Title order={4} color="dimmed">
          {projects?.msg}
        </Title>
      </Flex>
    )
  }

  return (
    <>
      {projects?.data.map((project) => (
        <Box
          key={project.name}
          sx={(theme) => ({
            transition: '.1s all',
            padding: `${theme.spacing.xs} ${theme.spacing.xl}`,
            ':hover': {
              scale: '102%',
              backgroundColor:
                theme.colorScheme === 'dark'
                  ? theme.fn.rgba(theme.colors.primary[8], 0.2)
                  : theme.fn.rgba(theme.colors.primary[0], 1),
              cursor: 'pointer'
            }
          })}
          onClick={() =>
            projectAPI.openSelectedProject(project.db, () => {
              projectStore.setProject(project)
              setLocation('/app')
            })
          }
        >
          <Flex align="center" gap="sm" justify="center">
            <Box
              sx={(theme) => ({
                color:
                  theme.colorScheme === 'dark' ? theme.colors.primary[1] : theme.colors.primary[8]
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
                {project.name}
              </Title>
              <Flex>
                <Text color="dimmed" fz="xs" truncate>
                  {project.db.hostname}
                </Text>
                <Text color="dimmed" fz="xs">
                  :{project.db.port}
                </Text>
              </Flex>
              <Text color="dimmed" fz="xs" truncate>
                {project.db.username}{' '}
                <Text span color="secondary.5" truncate>
                  {project.db.database}
                </Text>
              </Text>
            </Flex>
            <Flex gap="xs">
              <ActionIcon color="lime" onClick={() => console.log('edit')}>
                <IconEdit />
              </ActionIcon>
              <ActionIcon color="red" onClick={() => console.log('remove')}>
                <IconTrash />
              </ActionIcon>
            </Flex>
          </Flex>
        </Box>
      ))}
    </>
  )
}

export default ListDatabases
