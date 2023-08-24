import { Button, Input } from '@nextui-org/react'
import {
  IconAccessPoint,
  IconFolder,
  IconUser,
  IconLock,
  IconServer2,
  Icon123,
  IconDatabase
} from '@tabler/icons-react'
import { Formik, Form, Field } from 'formik'
import { projectService } from '../../service/projectService'

function FormToCreateDb() {
  const { createNewProject } = projectService()
  return (
    <Formik
      initialValues={{
        file: '',
        username: '',
        password: '',
        hostname: '',
        port: '',
        database: ''
      }}
      onSubmit={async (values, action) => {
        const status = await createNewProject({ form: values })
        if (status) {
          action.resetForm()
        }
      }}
    >
      <Form className="flex flex-col gap-unit-sm">
        <Field
          name="file"
          label="Nombre del Proyecto"
          labelPlacement="outside"
          radius="sm"
          isRequired
          startContent={<IconFolder stroke={1.5} />}
          placeholder="awesomeProyect"
          as={Input}
        />
        <Field
          name="username"
          label="Username"
          labelPlacement="outside"
          radius="sm"
          isRequired
          startContent={<IconUser stroke={1.5} />}
          placeholder="postgres"
          as={Input}
        />
        <Field
          name="password"
          label="Password"
          labelPlacement="outside"
          radius="sm"
          isRequired
          startContent={<IconLock stroke={1.5} />}
          placeholder="postgres"
          as={Input}
        />
        <div className="flex gap-unit-sm">
          <Field
            name="hostname"
            label="Hostname"
            labelPlacement="outside"
            radius="sm"
            isRequired
            startContent={<IconServer2 stroke={1.5} />}
            placeholder="localhost"
            as={Input}
          />
          <Field
            name="port"
            label="Port"
            labelPlacement="outside"
            radius="sm"
            isRequired
            startContent={<Icon123 stroke={1.5} />}
            placeholder="5432"
            as={Input}
          />
        </div>
        <Field
          name="database"
          label="Database"
          labelPlacement="outside"
          radius="sm"
          isRequired
          startContent={<IconDatabase stroke={1.5} />}
          placeholder="test"
          as={Input}
        />
        <Button
          type="submit"
          color="primary"
          radius="sm"
          isRequired
          startContent={<IconAccessPoint stroke={1.5} />}
        >
          Empezar a conectar
        </Button>
      </Form>
    </Formik>
  )
}

export default FormToCreateDb
