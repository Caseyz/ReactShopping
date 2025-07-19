import {
  BrowserRouter as Router,
  useRoutes,
  RouteObject
} from 'react-router-dom'
import StaticRoutes from './staticRoutes'
import AsyncRoutes from './asyncRoutes'

// setup react router
const BasePath = import.meta.env.MODE === 'production' ? '/' : '/'
const SetRouter = () => {
  // Initialized App Route
  const AppRoutes: RouteObject[] = [...AsyncRoutes, ...StaticRoutes]

  const Routes = () => useRoutes(AppRoutes)
  return (
    <Router basename={BasePath}>
      <Routes/>
    </Router>
  )
}

export default SetRouter