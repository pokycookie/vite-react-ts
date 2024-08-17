import type { RouteObject } from 'react-router-dom'

import paths from '@/configs/paths'
import MainView from '@/pages/main-view'
import componentRoute from '@/routes/component-route'
import MockApiView from '@/pages/mock-api/mock-api-view'

const mainRoute: RouteObject[] = [
  {
    path: '',
    element: <MainView />,
  },
  {
    path: paths.components.root,
    children: componentRoute,
  },
  {
    path: paths.mirage.root,
    element: <MockApiView />,
  },
]

export default mainRoute
