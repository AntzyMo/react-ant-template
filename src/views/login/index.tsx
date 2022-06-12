import './index.less'
import { Button, Form, Input } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { login } from '@/api/user'
import { useDispatch } from 'react-redux'
import { setToken } from '@/store/modules/user'
import { useNavigate } from 'react-router-dom'
import type { AppDispatch } from '@/store'

const Login = () => {
  const dispatch = useDispatch<AppDispatch>()
  const [form] = Form.useForm()
  const navigate = useNavigate()

  // 提交表单
  const onFinish = async (values: any) => {
    for (const i in values) {
      values[i] = values[i].trim()
    }

    const {
      data: { token }
    } = await login(values)

    dispatch(setToken(token))
    navigate('/', { replace: true })
  }

  return (
    <div className='Login'>
      <div className='Login__box'>
        <div className='Login__box-header'>系统登录</div>
        <Form form={form} name='login' onFinish={onFinish} size='large'>
          <Form.Item
            name='username'
            initialValue='admin'
            rules={[
              {
                required: true,
                message: '请输入用户名'
              }
            ]}
          >
            <Input
              className='input'
              prefix={<UserOutlined className='site-form-item-icon' />}
            />
          </Form.Item>

          <Form.Item
            name='password'
            initialValue='123456'
            rules={[
              {
                required: true,
                message: '请输入密码'
              }
            ]}
          >
            <Input.Password
              className='input'
              prefix={<LockOutlined className='site-form-item-icon' />}
            />
          </Form.Item>

          <Form.Item>
            <Button block type='primary' htmlType='submit'>
              登 录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login
