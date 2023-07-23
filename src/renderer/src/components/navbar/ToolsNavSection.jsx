import { Button, Flex } from '@mantine/core'
import ToogleColor from '../reactives/ToogleColor'
import { IconTools } from '@tabler/icons-react'
import { IconLogout } from '@tabler/icons-react'
import { Link } from 'wouter'

function ToolsNavSection() {
  return (
    <Flex justify="space-between">
      <ToogleColor />
      <Button variant="light" color="lime">
        <IconTools size="1.1rem" stroke={1.5} />
      </Button>
      <Link href="/init">
        <Button variant="light" color="red">
          <IconLogout size="1.1rem" stroke={1.5} />
        </Button>
      </Link>
    </Flex>
  )
}

export default ToolsNavSection
