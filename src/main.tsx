import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import { RouterProvider } from 'react-router-dom'
import routes from './router/route.tsx'
import { ThemeProvider } from './components/theme-provider.tsx'
import { Toaster } from 'react-hot-toast'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <Toaster />
      <Provider store={store}>
        <RouterProvider router={routes}></RouterProvider>
      </Provider>
    </ThemeProvider>

  </StrictMode>,
)
