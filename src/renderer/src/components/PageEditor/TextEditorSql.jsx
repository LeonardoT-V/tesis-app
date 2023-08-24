import Editor from 'react-simple-code-editor'
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-sql'
import '@renderer/assets/editor.css'
import { useEditorStore } from '../../store/editorStore'

function TextEditorSql() {
  const [code, setCode] = useEditorStore((state) => [state.code, state.setCode])
  return (
    <div className="px-unit-md py-unit-xs">
      <Editor
        value={code || '-- escriba su codigo aquí'}
        onValueChange={(code) => setCode(code)}
        highlight={(code) => highlight(code, languages.sql)}
        className="container__editor overflow-scroll"
      />
    </div>
  )
}

export default TextEditorSql
