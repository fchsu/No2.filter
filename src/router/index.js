import Vue from 'vue'
import Router from 'vue-router'
import travelContent from '@/components/travelContent'
import travelDetail from '@/components/travelDetail'

Vue.use(Router)

export default new Router({
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
      path: '/travelContent/travelDetail/:id',
      name: 'travelDetail',
      component: travelDetail
    }
  ]
})
