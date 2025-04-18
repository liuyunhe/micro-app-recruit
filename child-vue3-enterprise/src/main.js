import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn.mjs'

const app  = createApp(App)
app.use(router)
app.use(ElementPlus, {
  locale: zhCn
})
app.mount('#app')

// 监听函数
function dataListener (data) {
  console.log('来自主应用的数据', data)
}

// 监听数据变化
window.microApp.addDataListener(dataListener)
