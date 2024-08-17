import type { RouteObject } from 'react-router-dom'

import App from '@/pages/app'
import Item from '@/pages/Item'
import paths from '@/configs/paths'
import componentRoute from '@/routes/component-route'

const mainRoute: RouteObject[] = [
  {
    path: '',
    element: <App />,
  },
  {
    path: '/item/:id',
    element: <Item />,
  },
  {
    path: paths.components.root,
    children: componentRoute,
  },
]

export default mainRoute
