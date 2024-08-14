import type { RouteObject } from 'react-router-dom'

import App from '@/pages/App'
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
