import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Demo from 'pages/demo'
import Layout from 'pages/layout'
import Badge from 'pages/badge'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo
    },
    {
      path: '/layout',
      name: 'Layout',
      component: Layout
    },
    {
      path: '/badge',
      name: 'Badge',
      component: Badge
    }
  ]
})
