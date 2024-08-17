import '@/global.css'

import { StrictMode } from 'react'
import server from '@/mock-api/server'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import router from './routes/router'

if (import.meta.env.DEV) {
  server()
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
