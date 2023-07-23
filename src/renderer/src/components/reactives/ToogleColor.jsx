import { Button, useMantineColorScheme } from '@mantine/core'
import { IconMoon } from '@tabler/icons-react'
import { IconSun } from '@tabler/icons-react'

function ToogleColor() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  return (
    <Button
      onClick={() => toggleColorScheme()}
      variant="light"
      color={colorScheme === 'dark' ? 'yellow' : 'grape'}
    >
      {colorScheme === 'dark' ? <IconSun size="1.1rem" /> : <IconMoon size="1.1rem" stroke={1.5} />}
    </Button>
  )
}

export default ToogleColor
