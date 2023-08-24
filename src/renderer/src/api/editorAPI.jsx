import toast from '../utils/toast'

class API {
  async executeSqlCommand({ project, editorStore }) {
    editorStore.setLoading(true)
    const { db: dbConf } = project
    console.log(dbConf)

    const executerRes = await window.editor.executeSqlCommand(dbConf, editorStore.code)

    const { error, response } = JSON.parse(executerRes)
    if (error) {
      editorStore.setResults(error.data)
      editorStore.setLoading(false)
      return
    }
    console.log(response.data)
    editorStore.setResults(response.data)
    editorStore.setLoading(false)
  }

  async copyCodeSnippets({ data }) {
    await navigator.clipboard.writeText(data.code)
    toast.successToast(0, 'Codigo copiado', `Se copio el codigo de ${data.label}`)
  }

  async executeFileCommand({ project, editorStore, path }) {
    editorStore.setLoading(true)
    const executerRes = await window.editor.executeFileCommand(project.db, path)
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
}

const editorAPI = new API()

export default editorAPI
