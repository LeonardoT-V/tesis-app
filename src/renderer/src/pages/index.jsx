import CreateDatabase from './CreateDatabase'
import { Outlet, defer } from 'react-router-dom'
import WithNavSection from '../layout/WithNavSection'
import EditorPage from './EditorPage'
import TablesPage from './TablesPage'
import TablesColumnPage from './TablesColumnPage'
import BackupPage from './BackupPage'
import { createHashRouter } from 'react-router-dom'
import databaseAPI from '../api/databaseAPI'

async function fetchDatabase() {
  const db = await databaseAPI.allAtributesDatabase()

  return defer(db)
}

export const router = createHashRouter([
  {
    path: '/',
    element: <CreateDatabase />,
    errorElement: <div>Opps</div>
  },
  {
    path: '/app',
    element: (
      <WithNavSection>
        <Outlet />
      </WithNavSection>
    ),
    loader: fetchDatabase,

    id: 'app',
    loadingMode: 'render',
    children: [
      {
        path: 'home',
        element: <div className="bg-red-400 w-full">home</div>
      },
      {
        path: 'editor',
        element: <EditorPage />
      },
      {
        path: 'tables',
        element: <TablesPage />
      },
      {
        path: 'tables/:table',
        element: <TablesColumnPage />
      },
      {
        path: 'backup',
        element: <BackupPage />
      }
    ]
  }
])
