import editorAPI from '../api/editorAPI'
import { useProject } from '../hooks/useProject'
import { useEditorStore } from '../store/editorStore'

export const editorService = () => {
  const { project } = useProject()
  const editorStore = useEditorStore((state) => state)

  const executeSqlCommand = async () => {
    await editorAPI.executeSqlCommand({ project, editorStore })
    return
  }

  const copyCodeSnippets = async ({ data }) => {
    await editorAPI.copyCodeSnippets({ data })
    return
  }
  const executeFileCommand = async ({ file }) => {
    await editorAPI.executeFileCommand({ editorStore, path: file[0].path, project })
    return
  }
  return {
    project,
    executeSqlCommand,
    copyCodeSnippets,
    executeFileCommand
  }
}
