import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
const api = {}
const project = {
  createNewProject: (project) => ipcRenderer.invoke('project:create', project),
  readAllProject: () => ipcRenderer.invoke('project:readAll'),
  readOneProject: (project) => ipcRenderer.invoke('project:read', project),
  updateOneProject: (project) => ipcRenderer.invoke('project:update', project),
  deleteNewProjec: (project) => ipcRenderer.invoke('project:delete', project),
  tryconectionToDB: (project) => ipcRenderer.invoke('project:conection', project)
}

const editor = {
  executeSqlCommand: (project, command) => ipcRenderer.invoke('editor:execute', project, command),
  executeFileCommand: (project, path) => ipcRenderer.invoke('editor:execute-file', project, path)
}
// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
    contextBridge.exposeInMainWorld('project', project)
    contextBridge.exposeInMainWorld('editor', editor)
  } catch (error) {
    console.error(error)
  }
} else {
  window.electron = electronAPI
  window.api = api
}
