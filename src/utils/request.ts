import axios from 'axios'
import qs from 'qs'
import { message } from 'antd'

// 创建一个axios实例
const service = axios.create({
  baseURL: '/api',
  timeout: 30000,
  transformRequest: [(data) => qs.stringify(data)],
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

// 设置请求拦截
service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 设置响应拦截
service.interceptors.response.use(
  (res) => {
    const { code, msg, ...rest } = res.data
    if (code === 200) {
      return rest
    } else {
      message.error(msg)
      return Promise.reject(msg)
    }
  },
  (err) => {
    message.error(err)
    return Promise.reject(err)
  }
)

export default service
