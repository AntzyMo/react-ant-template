import './index.less'
import { Link } from 'react-router-dom'
import { resolve } from 'path-browserify'

import { Menu } from 'antd'

import type { routes, typeForArr } from '@/type'
import type { MenuProps } from 'antd'

import { asyncRoutesList } from '@/router/routes'

type menuProps = typeForArr<MenuProps['items']>

/* 拼接路由地址 */
const resolvePath = (basePath: string, routePath: string) => {
  return basePath ? resolve(basePath, routePath) : routePath
}

/* 处理侧边栏 */
let prvPath = '/'
const handleMenu = (asyncRoutesList: routes[], path?: string) => {
  const list: menuProps[] = asyncRoutesList.map(item => {
    let routesProject: menuProps = {
      key: resolvePath(path ?? '', item.path ?? ''),
      icon: item.meta?.icon
    }

    prvPath = routesProject.key as string

    if (item.children?.length) {
      if (item.children.length === 1) {
        routesProject = {
          ...routesProject,
          label: (
            <Link to={routesProject.key as string}>
              {item.meta?.title ?? item.children[0].meta?.title}
            </Link>
          )
        }
      } else {
        routesProject = {
          ...routesProject,
          label: item.meta?.title ?? item.children[0].meta?.title,
          children: handleMenu(item.children, prvPath)
        }
      }
    } else {
      routesProject = {
        ...routesProject,
        label: <Link to={routesProject.key as string}>{item.meta?.title}</Link>
      }
    }
    return routesProject
  })

  return list
}

const Siderbar = () => {
  const items = handleMenu(asyncRoutesList)
  console.log(items, 'items')

  return (
    <div className='Siderbar'>
      <Menu
        theme='dark'
        mode='inline'
        defaultSelectedKeys={['1']}
        items={items}
      />
    </div>
  )
}

export default Siderbar
