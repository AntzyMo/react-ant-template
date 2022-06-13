import { useEffect } from 'react'
import { useRoutes, useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import type { RootState } from '@/store'

import router from './routes'

// 白名单(不需要登录就可以访问的名单)
const whiteList = ['/login']

/* 路由守卫 */
const useAuthRouter = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const element = useRoutes(router)
  const { token } = useSelector((state: RootState) => state.usersReducer)
  const { pathname } = location

  const authRouter = () => {
    if (token) {
      // 如果有token
      if (pathname === '/login') {
        // 如果是登录状态 并且进入的页面是登录页面 则跳到首页
        navigate('/', { replace: true })
      }
    } else {
      if (!whiteList.includes(pathname)) {
        navigate('/login', { replace: true })
      }
    }
  }

  useEffect(() => {
    authRouter()
  }, [pathname])

  return element
}

const Router = () => {
  const element = useAuthRouter()
  return <>{element}</>
}

export default Router
