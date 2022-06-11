import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'

import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import 'antd/dist/antd.less'

// 清除默认样式
import 'normalize.css/normalize.css'

// mock 用于测试用例
import './mocks'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <ConfigProvider locale={zhCN}>
      <Provider store={store}>
        <App />
      </Provider>
    </ConfigProvider>
  </HashRouter>
)
