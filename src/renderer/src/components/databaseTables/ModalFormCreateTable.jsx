import { Button, Flex, Modal, TextInput, Title, useMantineTheme } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconTableColumn } from '@tabler/icons-react'
import { IconPlus } from '@tabler/icons-react'
import TypesDataCreateTable from './TypesDataCreateTable'
import { IconX } from '@tabler/icons-react'
import { useForm } from '@mantine/form'
import { useTableStore } from '../../store/tableStore'
import tableAPI from '../../api/tableAPI'
import { useEffect } from 'react'

function ModalFormCreateTable() {
  const theme = useMantineTheme()
  const [opened, { open, close }] = useDisclosure(false)

  const tableStore = useTableStore((value) => value)

  const formCreateTable = useForm({
    initialValues: {
      col_name: '',
      type: '',
      default: '',
      null: false,
      param: ''
    }
  })

  return (
    <>
      <Button fullWidth leftIcon={<IconPlus />} onClick={open}>
        Agregar Columna
      </Button>

      <Modal
        opened={opened}
        onClose={close}
        overlayProps={{
          blur: 5
        }}
        size="xl"
        radius="sm"
        withCloseButton={false}
        styles={{
          content: {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.bg[4] : theme.colors.bg[1]
          },
          header: {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.bg[3] : theme.colors.bg[0],
            borderRadius: theme.radius.md,
            color:
              theme.colorScheme === 'dark' ? theme.colors.secondary[4] : theme.colors.secondary[6]
          }
        }}
      >
        <Modal.Header>
          <Flex align="center" gap="md">
            <IconTableColumn size={40} />
            <Title>Crear nueva columna</Title>
          </Flex>
        </Modal.Header>
        <Modal.Body h="100%">
          <Flex
            px="xs"
            pb
            direction="column"
            gap="xs"
            sx={{
              backgroundColor:
                theme.colorScheme === 'dark' ? theme.colors.bg[3] : theme.colors.bg[0],
              borderRadius: `0 0 ${theme.radius.md} ${theme.radius.md}`,
              width: '70%',
              margin: '0 auto',
              marginBottom: theme.spacing.md,
              padding: `0 ${theme.spacing.xs} ${theme.spacing.xs} ${theme.spacing.xs}`
            }}
          >
            <TextInput
              placeholder="column_name"
              variant="filled"
              label="Nombre de la columna"
              required
              {...formCreateTable.getInputProps('col_name')}
            />
          </Flex>

          <TypesDataCreateTable form={formCreateTable} />
          <Flex gap="xl" mt="md" justify="end">
            <Button color="red" leftIcon={<IconX />}>
              Cerrar
            </Button>
            <Button
              leftIcon={<IconPlus />}
              onClick={() => tableAPI.addNewColumnToStore(tableStore, formCreateTable)}
            >
              Añadir
            </Button>
          </Flex>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ModalFormCreateTable
