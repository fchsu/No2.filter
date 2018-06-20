import Vue from 'vue'
import Router from 'vue-router'
import travelContent from '@/components/travelContent'
import travelDetail from '@/components/travelDetail'

Vue.use(Router)

export default new Router({
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      redirect: '/travelContent'
    },
    {
      path: '/travelContent',
      name: 'travelContent', 
      component: travelContent,
    },
    {
      path: '/travelContent/:zone',
      name: 'travelContent-zone', 
      component: travelContent,
    },
    {
      path: '/travelContent/:zone/:page',
      name: 'travelContent-zone-page', 
      component: travelContent,
    },
    {
      path: '/travelContent/travelDetail/:id',
      name: 'travelDetail',
      component: travelDetail
    }
  ]
})
