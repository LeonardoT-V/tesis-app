import TitleContainer from '../components/ui/TitleContainer'
import TextEditorSql from '../components/PageEditor/TextEditorSql'
import TableBasic from '../components/ui/TableBasic'
import ActionButtonsEditor from '../components/PageEditor/SideEditorContainer/ActionButtonsEditor'
import DropxboxEditor from '../components/PageEditor/SideEditorContainer/DropxboxEditor'
import { useEditorStore } from '../store/editorStore'
import PaginationEditorFooter from '../components/PageEditor/FooterEditor/PaginationEditorFooter'
import InfoEditorFooter from '../components/PageEditor/FooterEditor/InfoEditorFooter'
import ErrorDialogEditor from '../components/PageEditor/ErrorDialogEditor'
import { IconCode } from '@tabler/icons-react'
import { useEffect } from 'react'

function EditorPage() {
  const [results, ResetStore] = useEditorStore((state) => [state.results, state.ResetStore])
  useEffect(() => {
    return ResetStore()
  }, [])

  return (
    <>
      <section className="flex gap-unit-md flex-col  lg:flex-row">
        <section className="h-unit-8xl bg-content1 rounded-small p-unit-md w-full lg:w-5/6 flex flex-col gap-unit-xs">
          <TitleContainer title="Editor Sql" className="text-xl" Icon={<IconCode />} />
          <div className="overflow-scroll rounded-md border-content2 border ">
            <TextEditorSql />
          </div>
        </section>
        <section className="lg:w-2/6 flex lg:flex-col gap-unit-md lg:h-unit-8xl">
          <DropxboxEditor />
          <ActionButtonsEditor />
        </section>
      </section>
      {results && (
        <section className="bg-content2 rounded-small">
          {results?.code ? (
            <ErrorDialogEditor />
          ) : (
            <>
              <TableBasic cols={results?.fields} rows={results?.rows} />
              <div className="rounded-small p-unit-md flex items-center justify-between gap-unit-md">
                <InfoEditorFooter />
                <PaginationEditorFooter />
              </div>
            </>
          )}
        </section>
      )}
    </>
  )
}

export default EditorPage
