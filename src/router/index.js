import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Content from '@/page/content'
import Submit from '@/page/submit'
import Jq from '@/page/jq'

import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/content/:id',
      name: 'Content',
      component: Content
    },
    {
      path: '/submit',
      name: 'Submit',
      component: Submit
    },
    {
      path: '/jq',
      name: 'Jq',
      component: Jq
    }
  ]
})
