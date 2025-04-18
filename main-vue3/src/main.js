import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/src/index.scss'
import microApp from '@micro-zoe/micro-app';
import { jobType as jobTypeArr } from '@/assets/js/dictData'

window.jobTypeArr = jobTypeArr

microApp.start({
  'disable-memory-router': true, // 关闭虚拟路由
  preFetchApps: [
    {
      name: 'childHome',
      url: 'http://localhost:3000/childHome/',
      level: 3
    },
    // {
    //   name: 'childJob',
    //   url: 'http://localhost:8080',
    //   level: 3
    // },
    // {
    //   name: 'childEnterprise',
    //   url: 'http://localhost:3002/child/findEnterprise#/',
    //   iframe: true, // 使用iframe渲染子应用
    //   level: 3
    // },
    // {
    //   name: 'childAbout',
    //   url: 'http://localhost:3003',
    //   level: 3
    // }
  ], // 预加载的子应用
  lifeCycles: {
    created(opts) {
      console.log('created', opts)
    },
    beforemount(opts) {
      console.log('beforemount', opts)
    },
    mounted(opts) {
      console.log('mounted', opts)
      const loading = document.getElementById('appLoading')
      console.log('childJob mounted', loading)
    },
    unmount(opts) {
      console.log('unmount', opts)
    },
    error(opts) {
      console.log('error', opts)
    }
  }
})

// 设置微应用路由，用于主应用和子应用之间的路由同步
microApp.router.setBaseAppRouter(router)
// microApp.preFetch([
//   {
//     name: 'childHome',
//     url: 'http://localhost:3000/childHome/',
//     level: 3
//   },
//   {
//     name: 'childJob',
//     url: 'http://localhost:8080',
//     level: 3
//   },
//   {
//     name: 'childEnterprise',
//     url: 'http://localhost:3002/child/findEnterprise#/',
//     iframe: true, // 使用iframe渲染子应用
//     level: 3
//   },
//   {
//     name: 'childAbout',
//     url: 'http://localhost:3003',
//     level: 3
//   }
// ])
const app  = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
