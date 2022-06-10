import type { ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { useRoutes, useLocation, Navigate } from 'react-router-dom'
import type { RootState } from '@/store'
import router from './router'
import Login from './views/login'

interface props {
  children: ReactNode
}

// 判断登录后是否还进入 login 页面，进入了就重定向首页
const RequestAuth = ({ children }: props) => {
  const location = useLocation()
  if (location.pathname === '/login') {
    return <Navigate to='/' replace />
  }

  return <>{children}</>
}

function App() {
  const element = useRoutes(router)
  const { token } = useSelector((state: RootState) => state.usersReducer)

  return (
    <div className='App'>
      {!token ? <Login /> : <RequestAuth>{element}</RequestAuth>}
    </div>
  )
}

export default App
