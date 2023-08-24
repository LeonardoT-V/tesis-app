import { Button, Input, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react'
import { IconPlus } from '@tabler/icons-react'
import { useState } from 'react'
import { useTableStore } from '../../../store/tableStore'
import { IconEdit } from '@tabler/icons-react'
import toast from '../../../utils/toast'
import { useTables } from '../../../hooks/useTables'

function FormAddNameTable() {
  const { displayTableName } = useTables()
  const [setTableName, tableName] = useTableStore((state) => [state.setTableName, state.tableName])
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState(tableName)

  return (
    <Popover placement="bottom" isOpen={isOpen} onOpenChange={(open) => setIsOpen(open)}>
      <PopoverTrigger>
        <button
          className={`w-80 flex flex-col gap-unit-xs p-unit-md items-center rounded-large transition-all ring-0 hover:scale-105 bg-warning-400/20 text-warning-600`}
        >
          {tableName ? <IconEdit stroke={1.5} size={54} /> : <IconPlus stroke={1.5} size={54} />}
          <p className="text-xl">{tableName ? 'Editar' : 'Añadir'} tabla</p>
        </button>
      </PopoverTrigger>
      <PopoverContent>
        {(titleProps) => (
          <div className="px-1 py-2 w-96 flex flex-col gap-unit-md">
            <h3 className="text-2xl font-bold" {...titleProps}>
              Dale un nombre a tu tabla
            </h3>
            <Input
              value={value}
              placeholder="awesome table"
              radius="sm"
              description="El nombre puede ser editado mientras configura las opciones"
              onValueChange={setValue}
            />
            <Button
              color="primary"
              radius="sm"
              startContent={tableName ? <IconEdit /> : <IconPlus />}
              onPress={() => {
                if (displayTableName.some((e) => e === value)) {
                  toast.errorToast(
                    0,
                    'Existe una tabla con el mismo nombre',
                    'Cambie a un nombre valido'
                  )
                  return
                }
                setIsOpen(false)
                setTableName(value)
              }}
            >
              {tableName ? 'Editar' : 'Añadir'} tabla
            </Button>
          </div>
        )}
      </PopoverContent>
    </Popover>
  )
}

export default FormAddNameTable
