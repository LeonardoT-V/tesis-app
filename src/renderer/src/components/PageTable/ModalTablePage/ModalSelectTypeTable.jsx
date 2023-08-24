import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure
} from '@nextui-org/react'
import { IconX, IconPlus, IconColumnInsertRight, IconColumnInsertLeft } from '@tabler/icons-react'
import TitleContainer from '../../ui/TitleContainer'
import RadioOfTypeTable from './RadioOfTypeTable'
import BottomModalErrorDisplay from './BottomModalErrorDisplay'
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import { useTableStore } from '../../../store/tableStore'

function ModalSelectTypeTable() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [error, setError] = useState(null)
  const [rows, setRows] = useTableStore((state) => [state.rows, state.setRows])

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
      setError(null)

      const hola = rows.some((row) => row.columna === values.columna)
      if (hola) {
        setError(['Ya existe una columna con este nombre'])
        return
      }

      const msgList = val.filter(
        (item) => values[item] === '' && `El valor ${item} no puede ir vacio`
      )
      if (msgList.length !== 0) {
        setError(msgList)
        return
      }
      setRows(values)
      onOpenChange()
    }
  })

  useEffect(() => {
    formik.resetForm()
  }, [onOpenChange])

  return (
    <>
      <Button
        color="primary"
        radius="sm"
        onPress={onOpen}
        startContent={<IconColumnInsertRight stroke={1.5} />}
        className="w-64 lg:w-96 "
      >
        Añadir Columna
      </Button>

      <Modal
        isOpen={isOpen}
        size="2xl"
        onOpenChange={onOpenChange}
        scrollBehavior="inside"
        classNames={{ closeButton: 'hidden', body: 'px-unit-2xl py-3' }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-unit-xs">
                <TitleContainer title="Creación de columnas" Icon={<IconColumnInsertLeft />} />
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
              </ModalHeader>
              <ModalBody>
                <RadioOfTypeTable formik={formik} />
              </ModalBody>
              <ModalFooter>
                <BottomModalErrorDisplay error={error} />
                <Button
                  radius="sm"
                  className="w-48"
                  color="danger"
                  variant="light"
                  onClick={onClose}
                  startContent={<IconX />}
                >
                  Cerrar
                </Button>
                <form onSubmit={formik.handleSubmit}>
                  <Button
                    startContent={<IconPlus />}
                    radius="sm"
                    className="w-48"
                    color="primary"
                    type="submit"
                    //onPress={onClose}
                  >
                    Añadir
                  </Button>
                </form>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalSelectTypeTable
