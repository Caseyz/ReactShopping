import { withTranslation } from 'react-i18next'
import Router from '@/router'
import './App.scss'

function App() {
  return (
    <Router />
  )
}

export default withTranslation()(App)
