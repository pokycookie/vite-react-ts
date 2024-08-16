import type { RouteObject } from 'react-router-dom'

import App from '@/pages/app'
import Item from '@/pages/Item'

const mainRoute: RouteObject[] = [
  {
    path: '',
    element: <App />,
  },
  {
    path: '/item/:id',
    element: <Item />,
  },
]

export default mainRoute
