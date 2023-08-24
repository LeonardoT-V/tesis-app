import { IconExclamationCircle } from '@tabler/icons-react'
import useBackgroundColor from '../../../hooks/useBackgroundColor'

function BottomModalErrorDisplay({ error }) {
  const { bg, text } = useBackgroundColor({ color: 'danger', returnAll: true })
  return (
    <>
      {error && (
        <div
          className={`flex items-center gap-4 rounded-small px-unit-md py-unit-xs ${bg} ${text} w-full`}
        >
          <IconExclamationCircle size={32} stroke={1.5} />

          <ul className="text-sm text-danger-800">
            {error.map((msg, index) => (
              <li key={`${msg}-${index}`}>{msg}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

export default BottomModalErrorDisplay
