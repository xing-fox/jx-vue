import Vue from 'vue'
import Router from 'vue-router'
Vue.use(require('vue-wechat-title'))
Vue.use(Router)

const Index = resolve => require(['@/view/index'], resolve)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {
        title: '集保'
      }
    }
  ]
})
