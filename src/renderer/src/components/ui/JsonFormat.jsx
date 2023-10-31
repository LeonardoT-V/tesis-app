import { IconBraces } from '@tabler/icons-react'
import { ObjectView } from 'react-object-view'
const options = { hideDataTypes: true, hideObjectSize: false, hidePreviews: false, expandLevel: 1 }
const palette = {
  base00: 'transparent'
}

function JsonFormat({ result, title }) {
  return (
    <>
      {Object.keys(result).length !== 0 ? (
        <div className="flex flex-col gap-unit-sm">
          <h2 className="text-white text-lg">
            Visualizando: <span className="text-primary-500">{title}</span>
          </h2>
          <div>
            <p>{'{'}</p>
            <ObjectView data={result} options={options} palette={palette} />
            <p>{'}'}</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-8 items-center justify-center align-middle h-full">
          <IconBraces size={128} stroke={1} />
          <p className="text-gray-400 text-center">
            Seleccione una consulta para <br /> visualizar su{' '}
            <span className="text-primary-500">endpoint</span>
          </p>
        </div>
      )}
    </>
  )
}

export default JsonFormat
