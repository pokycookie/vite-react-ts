import '@/global.css'

import { StrictMode } from 'react'
import server from '@/mock-api/server'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import router from './routes/router'

console.log(import.meta.env.VITE_MOCK_API)

if (import.meta.env.DEV && import.meta.env.VITE_MOCK_API === 'MOCK') {
  server()
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
