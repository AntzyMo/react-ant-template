import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'

import Layout from '../layout'

const Home = lazy(() => import('../views/home'))
const Page = lazy(() => import('../views/page'))
const Page2 = lazy(() => import('../views/page1/page2'))
const Page3 = lazy(() => import('../views/page1/page3'))
const NoPage = lazy(() => import('../views/noPage'))

const router: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  },

  {
    path: '/page',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Page />
      }
    ]
  },

  {
    path: '/page1',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Page2 />
      },
      {
        path: 'page3',
        element: <Page3 />
      }
    ]
  },
  {
    path: '*',
    element: <NoPage />
  }
]

export default router
