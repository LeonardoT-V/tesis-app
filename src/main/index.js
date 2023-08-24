import { app, shell, BrowserWindow, ipcMain } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/logo.png?asset'
import ProjectIPC from './ipcCRUD/projectIPC'
import EditorIPC from './ipcCRUD/editorIPC'
import ExampleIPC from './ipcCRUD/exampleIPC'
import DatabaseIPC from './ipcCRUD/databaseIPC'

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 900,
    minWidth: 780,
    height: 670,
    minHeight: 580,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
    if (!is.dev) {
      mainWindow.removeMenu()
    }
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // Set app user model id for windows
  electronApp.setAppUserModelId('com.electron')

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  const projectIPC = new ProjectIPC(app)
  const editorIPC = new EditorIPC(app)
  const databaseIPC = new DatabaseIPC(app)
  const exampleIPC = new ExampleIPC(app)
  //borrador
  ipcMain.handle('backup:check-command', (_, project) => exampleIPC.executeLocalCommand(project))

  ipcMain.handle('project:create', (_, project) => projectIPC.createNewProject(project))
  ipcMain.handle('project:readAll', () => projectIPC.readAllProject())
  ipcMain.handle('project:read', (_, project) => projectIPC.readOneProject(project))
  ipcMain.handle('project:update', (_, project) => projectIPC.updateOneProject(project))
  ipcMain.handle('project:delete', (_, project) => projectIPC.deleteOneProject(project))
  ipcMain.handle('project:conection', (_, project) => projectIPC.tryconectionToDB(project))
  ipcMain.handle('editor:execute', (_, project, command) =>
    editorIPC.executeSqlCommand(project, command)
  )
  ipcMain.handle('editor:execute-file', (_, project, path) =>
    editorIPC.executeFileCommand(project, path)
  )
  ipcMain.handle('database:db-tables-created', (_, { project, path }) =>
    databaseIPC.tablesCreatedDb({ project, path })
  )
  ipcMain.handle('database:db-columns-created', (_, { project, path }) =>
    databaseIPC.columnsCreatedDb({ project, path })
  )
  ipcMain.handle('database:db-atributes-created', (_, { project }) =>
    databaseIPC.allAtributesDatabase({ project })
  )

  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
