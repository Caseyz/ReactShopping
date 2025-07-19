import { Navigate, RouteObject } from 'react-router-dom'
import { useLazyComponent } from '@/utils'

const StaticRoutes: RouteObject[] = [
  {
    path: '/401',
    element: useLazyComponent(() => import('@/pages/401/index'))
  },
  {
    path: '/404',
    element: useLazyComponent(() => import('@/pages/404/index'))
  },
  {
    path: '*',
    element: <Navigate to='/404' />
  }
]

export default StaticRoutes