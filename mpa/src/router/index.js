import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const findJob = (r)=> require.ensure([],()=>r(require("@/views/findJob")),"findJob")

export default new Router({
  mode: 'history',
  base:'/',
  routes: [
    {
      path: '/',
      name: 'findJob',
      component:findJob
    }
  ]
})
