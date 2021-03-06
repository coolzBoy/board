import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/view/Home')
    },
    {
      path: '/member',
      name: 'Member',
      component: () => import('@/view/Member')
    },
    {
      path: '/media',
      name: 'Media',
      component: () => import('@/view/Media')
    }
  ],
  mode:'history',

})
