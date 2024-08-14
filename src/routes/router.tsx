import MainLayout from '@/layouts/MainLayout'
import { createBrowserRouter } from 'react-router-dom'

import mainRoute from './mainRoute'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: mainRoute,
  },
])

export default router
