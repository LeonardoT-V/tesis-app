import { Container, Flex, Text, Title } from '@mantine/core'
import { IconZoomExclamation } from '@tabler/icons-react'

function ErrorResults({ results }) {
  return (
    <Container
      fluid
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.fn.rgba(theme.colors.red[8], 0.2)
            : theme.fn.rgba(theme.colors.red[2], 0.5),
        borderRadius: theme.radius.xs,
        padding: theme.spacing.xl
      })}
    >
      <Flex justify="center" gap="xl" align="center">
        <Flex
          sx={(theme) => ({
            backgroundColor:
              theme.colorScheme === 'dark'
                ? theme.fn.rgba(theme.colors.red[9], 0.3)
                : theme.fn.rgba(theme.colors.red[4], 0.5),
            color: theme.colorScheme === 'dark' ? theme.colors.red[4] : theme.colors.red[6],
            borderRadius: theme.radius.lg,
            padding: theme.spacing.sm
          })}
        >
          <IconZoomExclamation size={64} />
        </Flex>
        <Flex direction="column">
          <Title>
            {results?.code} <Text span>{results?.description}</Text>
          </Title>
          <Text
            sx={(theme) => ({
              color: theme.colorScheme === 'dark' ? theme.colors.red[4] : theme.colors.red[6]
            })}
          >
            {results?.details}
          </Text>
          <Text
            sx={(theme) => ({
              color: theme.colorScheme === 'dark' ? theme.colors.red[4] : theme.colors.red[6]
            })}
          >
            error en linea : {results?.position}
          </Text>
        </Flex>
      </Flex>
    </Container>
  )
}

export default ErrorResults
