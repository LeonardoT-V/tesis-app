import { IconHttpGet, IconHttpPost, IconHttpDelete, IconHttpPut } from '@tabler/icons-react'
import { Button, Input } from '@nextui-org/react'
import { useState } from 'react'
import { apiService } from '../../service/apiService'

function ApiActions({ table }) {
  const [value, setValue] = useState('')
  const { executeApiRestQuery } = apiService()

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-unit-md">
        <h5 className="text-lg text-gray-300">{table}</h5>
        <hr className="grow opacity-10 " />
      </div>
      <div className="grid grid-cols-3 gap-1">
        <div className="col-span-2 flex flex-col gap-1">
          <div className="flex gap-2">
            <Input placeholder="Por Id" value={value} onValueChange={setValue} />
          </div>
          <div className="grid grid-cols-2 gap-1">
            <Button
              color="success"
              variant="flat"
              onClick={() => executeApiRestQuery({ table, queryId: value, method: 'GET' })}
            >
              <IconHttpGet />
            </Button>
            <Button
              color="primary"
              variant="flat"
              onClick={() => executeApiRestQuery({ table, query: value, method: 'POST' })}
            >
              <IconHttpPost />
            </Button>
            <Button
              color="secondary"
              variant="flat"
              onClick={() => executeApiRestQuery({ table, query: value, method: 'PUT' })}
            >
              <IconHttpPut />
            </Button>
            <Button
              color="danger"
              variant="flat"
              onClick={() => executeApiRestQuery({ table, query: value, method: 'DELETE' })}
            >
              <IconHttpDelete />
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <Input
            disabled
            placeholder="General"
            classNames={{
              inputWrapper: 'bg-content1 hover:bg-content1 focus:bg-content1'
            }}
          />
          <div className="">
            <Button
              color="success"
              variant="flat"
              fullWidth
              onClick={() => executeApiRestQuery({ table, method: 'GET' })}
            >
              <IconHttpGet />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApiActions
