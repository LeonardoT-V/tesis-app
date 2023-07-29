import { Button, Menu, ScrollArea } from '@mantine/core'
import { IconTerminal } from '@tabler/icons-react'
import editorAPI from '../../api/editorAPI'
import { useProjectStore } from '../../store/projectStore'
import { useEditorStore } from '../../store/editorStore'
import { IconScript } from '@tabler/icons-react'
import { Sql_Template_Code } from '../../utils/const'

function ButtonsEditorControl() {
  const editorStore = useEditorStore((value) => value)
  const projectStore = useProjectStore((value) => value)

  return (
    <>
      <Menu>
        <Menu.Target>
          <Button
            variant="light"
            color="secondary"
            size="md"
            leftIcon={<IconScript stroke={1.5} />}
            fullWidth
          >
            Codigos
          </Button>
        </Menu.Target>
        <Menu.Dropdown>
          <ScrollArea h={'15rem'}>
            {Sql_Template_Code.map((template) => (
              <Menu.Item
                key={template.label}
                onClick={() => editorAPI.copyCodeSnippets(template)}
                icon={<IconScript size={14} />}
              >
                {template.label}
              </Menu.Item>
            ))}
          </ScrollArea>
        </Menu.Dropdown>
      </Menu>
      <Button
        size="md"
        leftIcon={<IconTerminal stroke={1.5} />}
        fullWidth
        onClick={() => editorAPI.executeSqlCommand(projectStore.projectDB, editorStore)}
      >
        Ejecutar
      </Button>
    </>
  )
}

export default ButtonsEditorControl
