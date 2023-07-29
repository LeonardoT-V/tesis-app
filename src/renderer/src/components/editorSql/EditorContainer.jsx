import Editor from 'react-simple-code-editor'
import { highlight, languages } from 'prismjs/components/prism-core'
import { Box, Flex, Text } from '@mantine/core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-sql'
import { useEditorStore } from '../../store/editorStore'
import { IconCode } from '@tabler/icons-react'

function EditorContainer() {
  const [code, setCode] = useEditorStore((value) => [value.code, value.setCode])
  return (
    <Flex
      direction="column"
      sx={(theme) => ({
        padding: theme.spacing.sm,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.bg[3] : theme.colors.bg[0],
        width: '100%',
        minHeight: '25rem',
        borderRadius: theme.radius.sm,
        border:
          theme.colorScheme === 'dark'
            ? `1px solid ${theme.colors.gray[8]}`
            : `1px solid ${theme.colors.gray[3]}`
      })}
    >
      <Flex
        align="center"
        gap="sm"
        sx={(theme) => ({
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.bg[5] : theme.colors.bg[2],
          borderRadius: theme.radius.xs,
          color:
            theme.colorScheme === 'dark' ? theme.colors.secondary[4] : theme.colors.secondary[6]
        })}
        p="xs"
      >
        <IconCode />
        <Text fz={28} inline>
          Editor de texto SQL
        </Text>
      </Flex>
      <Box
        sx={(theme) => ({
          width: '100%',
          height: '100%',
          borderRadius: theme.radius.sm
        })}
      >
        <Editor
          value={code}
          onValueChange={(code) => setCode(code)}
          highlight={(code) => highlight(code, languages.sql)}
          padding={10}
          className="container__editor"
        />
      </Box>
    </Flex>
  )
}

export default EditorContainer
