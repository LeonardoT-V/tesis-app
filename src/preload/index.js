import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

const project = {
  createNewProject: (project) => ipcRenderer.invoke('project:create', project),
  readAllProject: () => ipcRenderer.invoke('project:readAll'),
  readOneProject: (project) => ipcRenderer.invoke('project:read', project),
  updateOneProject: (project) => ipcRenderer.invoke('project:update', project),
  deleteOneProject: (project) => ipcRenderer.invoke('project:delete', project),
  tryconectionToDB: (project) => ipcRenderer.invoke('project:conection', project)
}

const editor = {
  executeSqlCommand: (project, command) => ipcRenderer.invoke('editor:execute', project, command),
  executeFileCommand: (project, path) => ipcRenderer.invoke('editor:execute-file', project, path)
}

const database = {
  tablesCreatedDb: ({ project, path }) =>
    ipcRenderer.invoke('database:db-tables-created', { project, path }),
  columnsCreatedDb: ({ project, path }) =>
    ipcRenderer.invoke('database:db-columns-created', { project, path }),
  allAtributesDatabase: ({ project }) =>
    ipcRenderer.invoke('database:db-atributes-created', { project })
}

const backup = {
  checkCommandExist: () => ipcRenderer.invoke('backup:check-command')
}
// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('project', project)
    contextBridge.exposeInMainWorld('editor', editor)
    contextBridge.exposeInMainWorld('database', database)
    contextBridge.exposeInMainWorld('example', {
      executeLocalCommand: (project) => ipcRenderer.invoke('example:prueba', project)
    })
    contextBridge.exposeInMainWorld('backup', backup)
  } catch (error) {
    console.error(error)
  }
} else {
  window.electron = electronAPI
}
