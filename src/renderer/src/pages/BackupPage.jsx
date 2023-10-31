import { Button, Input } from '@nextui-org/react'
import { Field, Form, Formik, useFormik } from 'formik'
import { useEffect, useState } from 'react'
import { useProject } from '../hooks/useProject'

function BackupPage() {
  const { project } = useProject()
  const [dd, setDd] = useState()
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
        setDd(msgList)
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

  const fetchData = async () => {
    const e = await fetch('http://localhost:3000/api/table/hola', {
      method: 'post',
      body: JSON.stringify({ project: 'hola', casa: 'mundo' }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((data) => data)
    setDd(e)
  }

  return (
    <div>
      <Button onClick={window.express.openExpressServer}>reanude</Button>
      <Button onClick={window.express.stopExpressServer}>stop</Button>
      <Button onClick={fetchData}>fecth</Button>
      <Button onClick={() => console.log(dd)}>ee</Button>
      <h1>Sign Up</h1>
      {dd && dd?.post}
      {project.api}
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
