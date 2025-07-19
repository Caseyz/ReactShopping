// lazy component hook
import {
  ComponentType,
  lazy,
  Suspense,
  useEffect
} from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { UserInfoState } from '@/store/user'

import { hasPermission } from '@/utils/permission'

export const useLazyComponent = (lazyComponent) => {
  const Component = lazy(lazyComponent)
  return <Suspense><Component /></Suspense>
}

export const lazyComponent = (props) => {
  const { lazyComponent } = props
  const Component = lazy(lazyComponent)
  return <Suspense><Component /></Suspense>
}

interface AuthLazyProps {
  lazyComponent: () => Promise<{default: ComponentType}>
  permission: string
}

// authorized lazy component
export const useAuthLazyComponent = (props: AuthLazyProps) => {
  const {
    lazyComponent,
    permission
  } = props
  const navigate = useNavigate()
  const permissions = useSelector<{userInfo: {userInfo: UserInfoState}}>(state => state.userInfo.userInfo.permissions) as string[]

  useEffect(() => {
    const check = async () => {
      const passed = hasPermission(permissions, permission)
      if (passed) return

      navigate('/401')
    }
    check()
  })

  const Component = lazy(lazyComponent)
  return <Suspense><Component /></Suspense>
}