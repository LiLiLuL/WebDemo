import Vue from 'vue'
import Router from 'vue-router'
import POS from '@/components/page/pos'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'pos',
      component: POS
    }
  ]
})
