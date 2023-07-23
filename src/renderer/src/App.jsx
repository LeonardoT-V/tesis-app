import { ColorSchemeProvider, MantineProvider } from '@mantine/core'
import { useState } from 'react'
import NavLayout from './layouts/NavLayout'
import { Theme_colors } from './utils/const'
import { Route, Switch } from 'wouter'
import InfoNavSection from './components/navbar/InfoNavSection'
import CreateDatabasesPage from './pages/CreateDatabasesPage'

function App() {
  const [colorScheme, setColorScheme] = useState('dark')
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        theme={{
          colorScheme,
          colors: Theme_colors,
          primaryColor: 'primary'
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Switch>
          <Route path="/init">
            <CreateDatabasesPage />
          </Route>
          <NavLayout>
            <Route path="/home">
              <InfoNavSection />
            </Route>
          </NavLayout>
        </Switch>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default App
