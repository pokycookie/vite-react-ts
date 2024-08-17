import type { RouteObject } from 'react-router-dom'

import paths from '@/configs/paths'
import ToastView from '@/pages/components/toast-view'

const componentRoute: RouteObject[] = [
  {
    path: paths.components.toast,
    element: <ToastView />,
  },
]

export default componentRoute
