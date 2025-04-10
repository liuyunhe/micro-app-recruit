import login from '@/views/main/login.vue'
import childDemo from '@/views/child/childDemo.vue'
import childHome from '@/views/child/childHome.vue'
import childJob from '@/views/child/childJob.vue'
import childEnterprise from '@/views/child/childEnterprise.vue'
import childAbout from '@/views/child/childAbout.vue'
import { createRouter,createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/main/login',
    name: 'login',
    component: login,
    meta: {
      title: '',
      keepAlive:false
    }
  },
  {
    path: '/main/childDemo',
    name: 'childDemo',
    component: childDemo,
    meta: {
      title: '',
      keepAlive:false
    }
  },
  {
    path: '/main/childHome',
    name: 'childHome',
    component: childHome,
    meta: {
      title: '',
      keepAlive:false
    }
  },
  {
    path: '/main/childJob',
    name: 'childJob',
    component: childJob,
    meta: {
      title: '',
      keepAlive:false
    }
  },
  {
    path: '/main/childEnterprise',
    name: 'childEnterprise',
    component: childEnterprise,
    meta: {
      title: '',
      keepAlive:false
    }
  },
  {
    path: '/main/childAbout',
    name: 'childAbout',
    component: childAbout,
    meta: {
      title: '',
      keepAlive:false
    }
  }
]

const router = createRouter({
  history: createWebHistory(), // mode:'history'
  routes
})

export default router