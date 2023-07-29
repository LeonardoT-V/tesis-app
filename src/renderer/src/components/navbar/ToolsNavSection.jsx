import { Button, Flex } from '@mantine/core'
import ToogleColor from '../reactives/ToogleColor'
import { IconTools } from '@tabler/icons-react'
import { IconLogout } from '@tabler/icons-react'
import { useLocation } from 'wouter'
import { useProjectStore } from '../../store/projectStore'

function ToolsNavSection() {
  // eslint-disable-next-line no-unused-vars
  const [_, setLocation] = useLocation()
  const projectStore = useProjectStore((state) => state)

  return (
    <Flex justify="space-between">
      <ToogleColor />
      <Button variant="light" color="lime" onClick={() => console.log(projectStore.project)}>
        <IconTools size="1.1rem" stroke={1.5} />
      </Button>
      <Button
        variant="light"
        color="red"
        onClick={() => {
          projectStore.removeProject()
          setLocation('/')
        }}
      >
        <IconLogout size="1.1rem" stroke={1.5} />
      </Button>
    </Flex>
  )
}

export default ToolsNavSection
