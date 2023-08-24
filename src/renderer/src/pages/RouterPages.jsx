import { Route, Routes } from 'react-router-dom'
import CreateDatabase from './CreateDatabase'
import { Outlet } from 'react-router-dom'
import WithNavSection from '../layout/WithNavSection'
import EditorPage from './EditorPage'
import TablesPage from './TablesPage'
import TablesColumnPage from './TablesColumnPage'
import BackupPage from './BackupPage'
import { HashRouter } from 'react-router-dom'

function RouterPages() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" Component={CreateDatabase} />

        <Route
          path="app"
          element={
            <WithNavSection>
              <Outlet />
            </WithNavSection>
          }
          loader={async () => {
            return ['hola']
          }}
        >
          <Route path="home" element={<EditorPage />} />
          <Route path="editor" element={<EditorPage />} />
          <Route path="tables" element={<TablesPage />} />
          <Route path="tables/:table" element={<TablesColumnPage />} />
          <Route path="backup" element={<BackupPage />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default RouterPages
