import { notifications } from '@mantine/notifications'

class API {
  async executeSqlCommand(project, editorStore) {
    editorStore.setLoading(true)
    const executerRes = await window.editor.executeSqlCommand(project, editorStore.code)
    const { error, response } = JSON.parse(executerRes)
    if (error) {
      console.log(error)
      editorStore.setResults(error.data)
      editorStore.setLoading(false)
      return
    }
    console.log(response)
    editorStore.setResults(response.data)
    editorStore.setLoading(false)
  }

  async copyCodeSnippets(data) {
    await navigator.clipboard.writeText(data.code)
    notifications.show({
      id: 'project-notify',
      title: 'Codigo copiado',
      message: `Se copio el codigo de ${data.label}`,
      radius: 'md',
      withCloseButton: false,
      autoClose: 1500
    })
  }

  async executeFileCommand(project, editorStore, path) {
    console.log(path)
    editorStore.setLoading(true)
    const executerRes = await window.editor.executeFileCommand(project, path)
    const { error, response } = JSON.parse(executerRes)
    if (error) {
      console.log(error)
      editorStore.setResults(error.data)
      editorStore.setLoading(false)
      return
    }
    editorStore.setResults(response.data)
    editorStore.setCode(response.code)
    editorStore.setLoading(false)
  }

  async updateOneProject() {
    console.log('update')
  }

  async deleteOneProject() {
    console.log('delete')
  }
}

const editorAPI = new API()

export default editorAPI
