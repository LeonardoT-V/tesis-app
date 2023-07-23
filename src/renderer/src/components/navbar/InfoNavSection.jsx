import { Flex, Text, Title } from '@mantine/core'
import { IconDatabaseCog } from '@tabler/icons-react'

function InfoNavSection() {
  return (
    <Flex gap="xs" align="center">
      <Flex sx={(theme) => ({ color: theme.colors.primary[7] })}>
        <IconDatabaseCog size={48} />
      </Flex>

      <Flex direction="column" sx={{ overflow: 'hidden' }}>
        <Title order={3} fz="sm" color="secondary.7" truncate>
          Supermaxiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
        </Title>
        <Text fz="xs" color="dimmed" truncate>
          postgres
        </Text>
        <Text fz="xs" color="dimmed" truncate>
          v13.0.4
        </Text>
      </Flex>
    </Flex>
  )
}

export default InfoNavSection
