import { Code } from '@nextui-org/react'
import { useEditorStore } from '../../store/editorStore'
import { IconAlertHexagon } from '@tabler/icons-react'

function ErrorDialogEditor() {
  const [results] = useEditorStore((state) => [state.results])
  return (
    <Code color="danger" className="w-full flex p-unit-md items-center gap-unit-md">
      <IconAlertHexagon size={64} />
      <article>
        <header className="flex gap-unit-xs text-3xl">
          <h3>{results?.code}</h3>
          <span>{results?.description}</span>
        </header>
        <footer className="text-danger-900 mt-1">
          <p>
            Detalle: <span> {results?.details}</span>
          </p>
          <p>
            Posición: <span> {results?.position}</span>
          </p>
        </footer>
      </article>
    </Code>
  )
}

export default ErrorDialogEditor
