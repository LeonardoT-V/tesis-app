import ReactDOM from 'react-dom/client'
import './assets/index.css'
import { NextUIProvider } from '@nextui-org/react'
import { Toaster } from 'sonner'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import RouterPages from './pages/RouterPages'
import { RouterProvider } from 'react-router-dom'
import { router } from './pages'

export const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <NextUIProvider>
    <QueryClientProvider client={queryClient}>
      <Toaster
        expand={false}
        toastOptions={{
          style: { backgroundColor: '#0B2127', color: '#ffffff', border: 'none' }
        }}
        visibleToasts={1}
      />
      {<RouterProvider router={router} />}
      {/* <RouterPages /> */}
    </QueryClientProvider>
  </NextUIProvider>
)
