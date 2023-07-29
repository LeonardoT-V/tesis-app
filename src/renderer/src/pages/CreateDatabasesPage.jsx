import { Box, Container, Divider, Flex, Paper, ScrollArea, Text, Title } from '@mantine/core'
import FormCreateDatabase from '../components/createDatabase/FormCreateDatabase'
import { LOGO_APP, NAME_APP } from '../utils/env'
import ListDatabases from '../components/createDatabase/ListDatabases'

function CreateDatabasesPage() {
  return (
    <Container
      h="100vh"
      fluid
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.bg[4] : theme.colors.bg[0]
      })}
    >
      <Container h="100%">
        <Flex justify="space-evenly" align="center" h="100%" gap="xs">
          <Box p="xl" w="100%" mah="100%">
            <Flex direction="column">
              <Title order={2} align="center">
                Tus Bases de datos
              </Title>
              <Divider my="sm" />
              <ScrollArea h="23rem" w="26rem" scrollHideDelay={100}>
                <Flex direction="column" w="25rem" h="23rem" pl="md">
                  <ListDatabases />
                </Flex>
              </ScrollArea>

              <Divider my="sm" />
              <Flex align="center" gap="md" justify="center">
                <Flex gap="xs" align="center">
                  <img src={LOGO_APP} height={28} width={28} />
                  <Title fz="xl">{NAME_APP}</Title>
                </Flex>

                <Divider orientation="vertical" />
                <Flex direction="column">
                  <Text color="dimmed" fz="xs">
                    Toro Vega Ider Leonardo
                  </Text>
                  <Text color="dimmed" fz="xs">
                    Carranza delgado Anthony
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Box>

          <Paper
            p="xl"
            w="100%"
            withBorder
            sx={(theme) => ({
              backgroundColor:
                theme.colorScheme === 'dark' ? theme.colors.bg[3] : theme.colors.bg[1]
            })}
          >
            <Flex direction="column">
              <Flex align="center" justify="center" gap="sm">
                <Title align="center" lh={0.8}>
                  Añade una nueva <br />
                  <Text
                    variant="gradient"
                    gradient={{ from: 'primary.3', to: 'primary.6', deg: 45 }}
                    span
                    fw="normal"
                    color="primary"
                  >
                    Base de Datos
                  </Text>
                </Title>
              </Flex>
              <FormCreateDatabase />
            </Flex>
          </Paper>
        </Flex>
      </Container>
    </Container>
  )
}

export default CreateDatabasesPage
