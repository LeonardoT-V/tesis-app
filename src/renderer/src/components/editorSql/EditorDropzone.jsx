import { Group, Text, useMantineTheme, rem } from '@mantine/core'
import { Dropzone } from '@mantine/dropzone'
import { IconBan } from '@tabler/icons-react'
import { IconSql } from '@tabler/icons-react'
import { IconFileTypeSql } from '@tabler/icons-react'
import editorAPI from '../../api/editorAPI'
import { useEditorStore } from '../../store/editorStore'
import { useProjectStore } from '../../store/projectStore'

function EditorDropzone() {
  const theme = useMantineTheme()
  const [projectDB] = useProjectStore((value) => [value.projectDB])
  const editorStore = useEditorStore((value) => value)
  return (
    <Dropzone
      h="100%"
      bg="transparent"
      accept={{ 'application/sql': ['.sql'] }}
      onDrop={(files) => editorAPI.executeFileCommand(projectDB, editorStore, files[0].path)}
      sx={(theme) => ({
        padding: `${theme.spacing.xs} ${theme.spacing.md}`,
        borderRadius: theme.radius.sm,
        marginBottom: theme.spacing.xs,
        ':hover': {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.fn.darken(theme.colors.bg[3], 0.2)
              : theme.fn.lighten(theme.colors.bg[1], 0.2)
        }
      })}
    >
      <Group
        position="center"
        p="lg"
        mt="25%"
        style={{ minHeight: rem(220), pointerEvents: 'none' }}
      >
        <Dropzone.Accept>
          <IconSql
            size="3.2rem"
            stroke={1.5}
            color={theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6]}
          />
        </Dropzone.Accept>
        <Dropzone.Reject>
          <IconBan
            size="3.2rem"
            stroke={1.5}
            color={theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]}
          />
        </Dropzone.Reject>
        <Dropzone.Idle>
          <IconFileTypeSql size="3.2rem" stroke={1.5} />
        </Dropzone.Idle>

        <Group spacing="md">
          <Text size="xl" inline ta="center" color="secondary.6">
            Carga tus archivos SQL
          </Text>
          <Text size="sm" color="dimmed" inline ta="center">
            Arrasta o da clic para relizar una consulta sql
          </Text>
        </Group>
      </Group>
    </Dropzone>
  )
}

export default EditorDropzone
