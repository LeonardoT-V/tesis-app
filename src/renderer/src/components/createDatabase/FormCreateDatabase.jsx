import { Button, Flex, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { IconFolder } from '@tabler/icons-react'
import { Icon123 } from '@tabler/icons-react'
import { IconServer2 } from '@tabler/icons-react'
import { IconLock, IconPlus, IconUser, IconDatabase } from '@tabler/icons-react'
import projectAPI from '../../api/projectAPI'
import { useLocation } from 'wouter'
import { useProjectStore } from '../../store/projectStore'

function FormCreateDatabase() {
  // eslint-disable-next-line no-unused-vars
  const [_, setLocation] = useLocation()
  const projectStore = useProjectStore((state) => state)
  const form = useForm({
    initialValues: {
      namefile: 'postgresql',
      username: 'postgres',
      password: 'CKrszs4KIyqIwtXKRhdq',
      hostname: 'containers-us-west-158.railway.app',
      port: '7908',
      database: 'railway'
    },
    validate: {
      username: (value) => (value.length <= 2 ? 'errr' : null),
      port: (value) => (/^([0-9])*$/.test(value) ? null : 'El puerto deben ser numeros')
    }
  })
  return (
    <form
      onSubmit={form.onSubmit((values) =>
        projectAPI.createNewProject(values, (res) => {
          projectStore.setProject(res)
          setLocation('/app')
        })
      )}
    >
      <Flex direction="column" gap="sm">
        <TextInput
          variant="filled"
          label="Nombre del proyecto"
          placeholder="awesome project"
          icon={<IconFolder stroke={1.5} />}
          required
          mt="xs"
          {...form.getInputProps('namefile')}
        />
        <TextInput
          variant="filled"
          label="Username"
          placeholder="postgres"
          icon={<IconUser stroke={1.5} />}
          required
          {...form.getInputProps('username')}
        />
        <TextInput
          variant="filled"
          label="Password"
          placeholder="postgres"
          icon={<IconLock stroke={1.5} />}
          required
          {...form.getInputProps('password')}
        />
        <TextInput
          variant="filled"
          label="Hostname"
          placeholder="localhost"
          icon={<IconServer2 stroke={1.5} />}
          required
          {...form.getInputProps('hostname')}
        />
        <TextInput
          variant="filled"
          label="Port"
          placeholder="5432"
          icon={<Icon123 stroke={1.5} />}
          required
          {...form.getInputProps('port')}
        />
        <TextInput
          variant="filled"
          label="Database"
          placeholder="admin"
          icon={<IconDatabase stroke={1.5} />}
          required
          mb="xs"
          {...form.getInputProps('database')}
        />
        <Button fullWidth leftIcon={<IconPlus stroke={1.5} />} type="submit">
          Agregar Proyecto
        </Button>
      </Flex>
    </form>
  )
}

export default FormCreateDatabase
