import Vue from 'vue'
import Router from 'vue-router'
Vue.use(require('vue-wechat-title'))
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: resolve => require(['@/view/index'], resolve),
      meta: {
        title: '集保'
      },
      children: [
        {
          path: 'me',
          name: 'Me',
          component: resolve => require(['@/view/pages/me'], resolve),
          meta: {
            title: '热销'
          }
        }, {
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
    }, {
      path: '/pdetails',
      name: 'ProductDetails',
      component: resolve => require(['@/view/pages/product-details'], resolve),
      meta: {
        title: '产品名称'
      }
    }, {
      path: '/orderList',
      name: 'OrderList',
      component: resolve => require(['@/view/pages/order-list'], resolve),
      meta: {
        title: '产品名称'
      }
    }
  ]
})
