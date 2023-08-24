import { IconBrandGoogleBigQuery } from '@tabler/icons-react'
import { useEditorStore } from '../../../store/editorStore'

function InfoEditorFooter() {
  const [results] = useEditorStore((state) => [state.results])
  return (
    <div className="bg-success-400/20 px-unit-sm py-unit-xs flex grow gap-unit-sm rounded-md items-center">
      <IconBrandGoogleBigQuery size={48} className="stroke-success-400" />
      <div>
        <h3 className="text-success-500 font-bold text-2xl">{results?.command}</h3>
        <p className="text-gray-400 text-sm">
          Rows: <span className="text-success-500 font-bold">{results?.rowCount}</span>
        </p>
      </div>
    </div>
  )
}

export default InfoEditorFooter
