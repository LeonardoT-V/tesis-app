import { Container, Flex } from '@mantine/core'
import EditorContainer from '../components/editorSql/EditorContainer'
import EditorDropzone from '../components/editorSql/EditorDropzone'
import { useEditorStore } from '../store/editorStore'
import EditorTableResutls from '../components/editorSql/EditorTableResutls'
import ButtonsEditorControl from '../components/editorSql/ButtonsEditorControl'

function EditorSqlPage() {
  const editorStore = useEditorStore((value) => value)
  return (
    <>
      <Flex justify="space-between" gap="xl">
        <EditorContainer />
        <Flex gap="sm" direction="column" w="24rem">
          <EditorDropzone />
          <ButtonsEditorControl />
        </Flex>
      </Flex>
      {editorStore.results && (
        <Container
          fluid
          sx={(theme) => ({
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.bg[3] : theme.colors.bg[0],
            width: '100%',
            borderRadius: theme.radius.sm
          })}
          p="xs"
        >
          <EditorTableResutls />
        </Container>
      )}
    </>
  )
}

export default EditorSqlPage
