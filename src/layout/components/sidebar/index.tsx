import './index.less'
import { Menu } from 'antd'
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined
} from '@ant-design/icons'
import { Link } from 'react-router-dom'

// const items = () => {
//   console.log(router, 'router')
//   const route = router.filter(item => {
//     if (item.children) {
//       if (item.children.length === 1) {
//         return [key]
//       }
//     }
//   })

//   console.log(route, 'route')
// }

const Siderbar = () => {
  return (
    <div className='Siderbar'>
      <Menu
        theme='dark'
        mode='inline'
        defaultSelectedKeys={['1']}
        items={[
          {
            key: '1',
            icon: <UserOutlined />,
            label: <Link to='/page'>12312312</Link>
          },
          {
            key: '2',
            icon: <VideoCameraOutlined />,
            label: <Link to='/page1'>page2</Link>
          },
          {
            key: '3',
            icon: <UploadOutlined />,
            label: <Link to='/page1/page3'>page3</Link>
          }
        ]}
      />
    </div>
  )
}

export default Siderbar
