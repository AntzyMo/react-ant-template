import { lazy } from 'react'
import type { routes } from '@/type'
import Layout from '../layout'
import Login from '@/views/login'

const Home = lazy(() => import('../views/home'))
const Page = lazy(() => import('../views/page'))
const Page2 = lazy(() => import('../views/page1/page2'))
const Page3 = lazy(() => import('../views/page1/page3'))
const NoPage = lazy(() => import('../views/noPage'))

export const asyncRoutesList: routes[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        meta: { title: 'home' }
      }
    ]
  },

  {
    path: '/page',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Page />,
        meta: { title: 'page' }
      }
    ]
  },

  {
    path: '/pageBox',
    element: <Layout />,
    meta: { title: 'pageBox' },
    children: [
      {
        path: 'page1',
        element: <Page2 />,
        meta: { title: 'page1' }
      },
      {
        path: 'page2',
        element: <Page3 />,
        meta: { title: 'page2' }
      }
    ]
  }
]

const basicRoutesList: routes[] = [
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '*',
    element: <NoPage />
  }
]

export default [...basicRoutesList, ...asyncRoutesList]
