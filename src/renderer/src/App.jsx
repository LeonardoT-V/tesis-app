import { ColorSchemeProvider, MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { useState } from 'react'
import { Theme_colors } from './utils/const'
import RouterPages from './pages/RouterPages'
import './assets/main.css'

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
        <Notifications />
        <RouterPages />
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default App
