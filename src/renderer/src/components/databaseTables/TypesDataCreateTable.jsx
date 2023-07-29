import { Flex, Grid, Radio, Switch, Text, TextInput, Title, useMantineTheme } from '@mantine/core'
import { Types_Postgres_Table } from '../../utils/const'

function TypesDataCreateTable({ form }) {
  const theme = useMantineTheme()

  return (
    <Radio.Group
      mah="20rem"
      sx={{ overflow: 'scroll', padding: theme.spacing.xs }}
      {...form.getInputProps('type')}
    >
      <Grid gutter="md" justify="center" align="flex-start">
        {Types_Postgres_Table.map((type) => (
          <Grid.Col key={type.name} span={6}>
            <Radio
              onClick={() => {
                if (form.values.type === type.name) {
                  return
                }
                form.setFieldValue('param', '')
                form.setFieldValue('default', '')
                form.setFieldValue('null', false)
              }}
              value={type.name}
              styles={{
                label: {
                  padding: 0,
                  backgroundColor:
                    form.values.type === type.name
                      ? theme.colorScheme === 'dark'
                        ? theme.fn.rgba(theme.colors[type.color][8], 0.2)
                        : theme.fn.rgba(theme.colors[type.color][1], 0.5)
                      : '',
                  border:
                    form.values.type === type.name
                      ? theme.colorScheme === 'dark'
                        ? `1px solid ${theme.colors[type.color][4]}`
                        : `1px solid ${theme.colors[type.color][6]}`
                      : `1px solid ${theme.colors.gray[theme.colorScheme === 'dark' ? 8 : 4]}`,
                  transition: '.1s all',
                  ':hover': {
                    cursor: 'pointer',
                    scale: '103%'
                  },
                  borderRadius: theme.radius.sm,
                  height: '100%'
                },
                inner: {
                  display: 'none',
                  height: '100%'
                },
                labelWrapper: {
                  width: '100%'
                }
              }}
              label={
                <Flex align="center" gap="xs" p="xs" h="100%">
                  <Flex
                    sx={{
                      color:
                        theme.colorScheme === 'dark'
                          ? theme.colors[type.color][4]
                          : theme.colors[type.color][6]
                    }}
                  >
                    <type.icon size={48} />
                  </Flex>
                  <Flex direction="column" w={'100%'}>
                    <Flex align="center" gap="xs">
                      <Title
                        order={3}
                        inline
                        sx={{
                          color:
                            form.values?.type === type.name
                              ? theme.colorScheme === 'dark'
                                ? theme.colors[type.color][4]
                                : theme.colors[type.color][6]
                              : ''
                        }}
                      >
                        {type.name}
                      </Title>
                      <Text fz="xs" inline>
                        {type?.label}
                      </Text>
                    </Flex>

                    <Text fz="xs" inline color="dimmed" mt="4px">
                      {type.description}
                    </Text>

                    {form.values?.type === type.name ? (
                      <Flex align="center" gap="md" mt="4px">
                        <TextInput
                          placeholder="Seleccione un tipo"
                          size="xs"
                          label="Valor por defecto (Opcional)"
                          variant="filled"
                          disabled={form.values.type === ''}
                          {...form.getInputProps('default')}
                        />
                        <Flex direction="column">
                          <Text fz="xs">Null</Text>
                          <Switch size="xs" {...form.getInputProps('null')} />
                        </Flex>
                      </Flex>
                    ) : (
                      <></>
                    )}
                    {form.values?.type === type.name ? (
                      type.param && (
                        <Flex align="center" gap="xs" mt="4px">
                          <Text fz="xs">Parametros</Text>
                          <TextInput
                            size="xs"
                            placeholder={type?.param}
                            variant="filled"
                            {...form.getInputProps('param')}
                          />
                        </Flex>
                      )
                    ) : (
                      <></>
                    )}
                  </Flex>
                </Flex>
              }
            />
          </Grid.Col>
        ))}
      </Grid>
    </Radio.Group>
  )
}

export default TypesDataCreateTable
