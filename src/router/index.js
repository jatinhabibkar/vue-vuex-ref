import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import AddSmoothie from '@/components/AddSmoothie'
import EditSmoothie from '@/components/EditSmoothie'

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
    },
    {
      path: '/edit-smoothie/:smoothie_slug',
      name :'EditSmoothie',
      component: EditSmoothie
    }
  ]
})
