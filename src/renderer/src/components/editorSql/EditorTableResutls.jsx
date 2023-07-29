import { Flex, Loader } from '@mantine/core'
import { useEditorStore } from '../../store/editorStore'
import TableResults from './TableResults'
import ErrorResults from './ErrorResults'

function EditorTableResutls() {
  const [results, loading] = useEditorStore((value) => [value.results, value.loading])

  if (loading) {
    return (
      <Flex direction="column" align="center" gap="xs" p="xl" h="15rem" justify="center">
        <Loader variant="bars" />
      </Flex>
    )
  }

  return (
    <>
      {results.code ? (
        <ErrorResults results={results} />
      ) : (
        <>
          <TableResults results={results} />
        </>
      )}
    </>
  )
}

export default EditorTableResutls
