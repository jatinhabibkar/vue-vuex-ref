import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import AddSmoothie from '@/components/AddSmoothie'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/add-smoothie',
      name :'AddSmoothie',
      component: AddSmoothie
    }
  ]
})
