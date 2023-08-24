import { Input } from '@nextui-org/react'
import { Field, Form, Formik, useFormik } from 'formik'
import { useEffect } from 'react'
import { useTables } from '../hooks/useTables'
import { useRouteLoaderData } from 'react-router-dom'
import { useDatabaseStore } from '../store/databaseStore'

function BackupPage() {
  const { data } = useRouteLoaderData('app')
  console.log({ data })

  const [database] = useDatabaseStore((state) => [state.database])
  console.log({ store: database })
  const formik = useFormik({
    initialValues: {
      columna: '',
      tipo: '',
      parametro: '',
      default: '',
      null: false
    },
    onSubmit: (values) => {
      const val = ['columna', 'tipo']
      const msgList = val.filter((item) => values[item] === '')
      if (msgList.length !== 0) {
        // setError(msgList)
        console.log(msgList)
        return
      }
    }
  })
  useEffect(() => {
    const hola = async () => {
      const le = await window.backup.checkCommandExist()
      console.log(le)
      return le
    }
    hola()
  }, [])

  return (
    <div>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          picked: ''
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500))
          alert(JSON.stringify(values, null, 2))
        }}
      >
        {({ values }) => (
          <Form>
            <div>Picked</div>
            <div>
              <label>
                <Field type="radio" name="picked" value="One" />
                One
              </label>
              <label>
                <Field type="radio" name="picked" value="Two" />
                Two
              </label>
              <div>Picked: {values.picked}</div>
            </div>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>

      <Input
        name="columna"
        label="Ingrese el nombre de la columna"
        placeholder="AwesomeCol"
        color="primary"
        variant="bordered"
        radius="sm"
        onChange={formik.handleChange}
        value={formik.values.columna}
      />
      <button onClick={() => console.log(formik)}>hola</button>
    </div>
  )
}

export default BackupPage
