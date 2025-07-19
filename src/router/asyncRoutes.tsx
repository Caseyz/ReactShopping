import { Outlet, RouteObject } from 'react-router-dom'
import {
  useLazyComponent,
  useAuthLazyComponent as AuthLazyComponent
} from '@/utils'

const AsyncRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Outlet/>,
    children: [
      {
        path: '',
        element: useLazyComponent(() => import('@/pages/Home/index'))
      },
      {
        path: 'checkout',
        element: <AuthLazyComponent lazyComponent={() => import('@/pages/Checkout/index')} permission='user:checkout' />
      },
      {
        path: 'login',
        element: useLazyComponent(() => import('@/pages/Login/index'))
      }
    ]
  }
]

export default AsyncRoutes