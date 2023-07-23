import { Button, Flex, TextInput } from '@mantine/core'
import { Icon123 } from '@tabler/icons-react'
import { IconServer2 } from '@tabler/icons-react'
import { IconLock, IconPlus, IconUser, IconDatabase } from '@tabler/icons-react'

function FormCreateDatabase() {
  return (
    <Flex direction="column" gap="xs">
      <TextInput variant="filled" label="Username" placeholder="postgres" icon={<IconUser />} />
      <TextInput
        variant="filled"
        label="Password"
        placeholder="postgres"
        type="password"
        icon={<IconLock />}
      />
      <TextInput variant="filled" label="Hostname" placeholder="localhost" icon={<IconServer2 />} />
      <TextInput variant="filled" label="Port" placeholder="5432" icon={<Icon123 />} />
      <TextInput variant="filled" label="Database" placeholder="admin" icon={<IconDatabase />} />
      <Button fullWidth leftIcon={<IconPlus stroke={1.5} />}>
        Agregar
      </Button>
    </Flex>
  )
}

export default FormCreateDatabase
