import './index.less'
import { useState, Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'

import HeaderCom from './components/header'
import Siderbar from './components/sidebar'

import logo from '../assets/logo.svg'

const LayoutCom = () => {
  const [collapsed, setcollapsed] = useState(false)

  return (
    <div className='layout'>
      <Layout>
        <Layout.Sider trigger={null} collapsible collapsed={collapsed}>
          <div className='logo-box'>
            <img src={logo} className='logo' />
          </div>

          <Siderbar />
        </Layout.Sider>

        <Layout className='site-layout'>
          <Layout.Header className='site-layout-background'>
            <HeaderCom
              collapsed={collapsed}
              change={() => setcollapsed(!collapsed)}
            />
          </Layout.Header>

          <Layout.Content
            className='site-layout-background'
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280
            }}
          >
            <Suspense fallback='加载中。。。'>
              <Outlet />
            </Suspense>
          </Layout.Content>
        </Layout>
      </Layout>
    </div>
  )
}

export default LayoutCom
