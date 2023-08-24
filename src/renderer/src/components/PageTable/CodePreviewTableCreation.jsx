import SyntaxCode from '../ui/SyntaxCode'
import { IconCopy } from '@tabler/icons-react'
import { Button } from '@nextui-org/react'
import { useFormatTable } from '../../hooks/useTables'

function CodePreviewTableCreation() {
  const { query } = useFormatTable()

  return (
    <div className="bg-content1 h-fit p-unit-md flex flex-col gap-unit-sm rounded-small grow">
      <div className="flex items-center justify-between">
        <h3 className="text-lg text-warning-600 font-bold">
          Salida de codigo <span className="text-white/80">SQL</span>
        </h3>
        <Button startContent={<IconCopy />} size="sm">
          <p>Copiar</p>
        </Button>
      </div>
      <SyntaxCode code={query} />
    </div>
  )
}

export default CodePreviewTableCreation
