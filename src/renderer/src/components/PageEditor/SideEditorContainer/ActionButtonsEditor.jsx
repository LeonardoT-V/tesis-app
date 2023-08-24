import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react'
import { editorService } from '../../../service/editorService'
import { Sql_Template_Code } from '../../../utils/const'

function ActionButtonsEditor() {
  const { executeSqlCommand, copyCodeSnippets } = editorService()
  return (
    <>
      <Dropdown shouldBlockScroll={false}>
        <DropdownTrigger>
          <Button variant="faded" radius="sm">
            Open Menu
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Database editor snippets" items={Sql_Template_Code}>
          {(item) => (
            <DropdownItem key={item.label} onPress={() => copyCodeSnippets({ data: item })}>
              {item.label}
            </DropdownItem>
          )}
        </DropdownMenu>
      </Dropdown>
      <Button radius="sm" color="primary" onClick={executeSqlCommand}>
        Ejecutar
      </Button>
    </>
  )
}

export default ActionButtonsEditor
