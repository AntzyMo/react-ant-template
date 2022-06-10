import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'

import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import 'antd/dist/antd.less'

import { worker } from './mocks/browser'

import App from './App'
worker.start()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <ConfigProvider locale={zhCN}>
      <Provider store={store}>
        <App />
      </Provider>
    </ConfigProvider>
  </HashRouter>
)
