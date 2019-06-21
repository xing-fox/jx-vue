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
      },
      children: [
        {
          path: 'hot',
          name: 'Hot',
          component: resolve => require(['@/view/pages/hot'], resolve),
          meta: {
            title: '热销'
          }
        }, {
          path: 'product',
          name: 'Product',
          component: resolve => require(['@/view/pages/product'], resolve),
          meta: {
            title: '产品'
          }
        }
      ]
    }
  ]
})
