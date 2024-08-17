import type { RouteObject } from 'react-router-dom'

import paths from '@/configs/paths'
import MainView from '@/pages/main-view'
import componentRoute from '@/routes/component-route'

const mainRoute: RouteObject[] = [
  {
    path: '',
    element: <MainView />,
  },
  {
    path: paths.components.root,
    children: componentRoute,
  },
]

export default mainRoute
