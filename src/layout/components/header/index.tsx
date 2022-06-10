import { createElement } from 'react'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  CaretDownOutlined
} from '@ant-design/icons'
import { Avatar, Dropdown, Menu } from 'antd'
import { useDispatch } from 'react-redux'
import { removeToken } from '@/store/modules/user'
import './index.less'

interface props {
  collapsed: boolean
  change: () => void
}

const MenuCom = () => {
  const dispatch = useDispatch()
  const handleMenuClick = (e: any) => {
    if (e.key === '1') {
      dispatch(removeToken())
    }
  }

  return (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          key: '1',
          label: <div>退出登录</div>
        }
      ]}
    />
  )
}

const HeaderCom = ({ collapsed, change }: props) => {
  return (
    <div className='HeaderCom'>
      <div className='left'>
        {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: 'trigger',
          onClick: change
        })}
      </div>

      <div className='right-box'>
        <Dropdown overlay={<MenuCom />} placement='bottom' trigger={['click']}>
          <div className='avater'>
            <Avatar size='small' icon={<UserOutlined />} />
            <span className='name'>cscscs</span>
            <CaretDownOutlined className='down' />
          </div>
        </Dropdown>
      </div>
    </div>
  )
}

export default HeaderCom
