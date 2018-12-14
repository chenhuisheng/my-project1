import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import HelloWorld from '@/components/HelloWorld'
import project_list from '@/components/project_list'
import path from '@/components/path'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ],
  routes: [
    {
      path: '/project',
      name: 'project_list',
      component: project_list
    },
    {
      path: '/path',
      name: 'path',
      component: path
    }
  ],
})
