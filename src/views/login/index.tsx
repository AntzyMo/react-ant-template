import './index.less'
import { Button, Form, Input } from 'antd'
import { login } from '@/api/user'
import { useDispatch } from 'react-redux'
import { setToken } from '@/store/modules/user'
import type { AppDispatch } from '@/store'

const Login = () => {
  const dispatch = useDispatch<AppDispatch>()
  const [form] = Form.useForm()

  // 提交表单
  const onFinish = async (values: any) => {
    for (const i in values) {
      values[i] = values[i].trim()
    }

    const {
      data: { token }
    } = await login(values)

    dispatch(setToken(token))
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed111', errorInfo)
  }

  return (
    <div className="Login">
      <div className="Login__box">
        <div className="Login__box-header">系统登录</div>
        <Form
          className="Login__box-formCom"
          form={form}
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="用户名"
            name="username"
            initialValue="admin"
            rules={[
              {
                required: true,
                message: '请输入用户名'
              }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            initialValue="123456"
            rules={[
              {
                required: true,
                message: '请输入密码'
              }
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              登 录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login
