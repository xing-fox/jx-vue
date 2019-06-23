import Vue from 'vue'
import Router from 'vue-router'
Vue.use(require('vue-wechat-title'))
Vue.use(Router)

const router = new Router({
  base: '/jbgzh/',
  routes: [
    {
      path: '/',
      name: 'Index',
      redirect: '/product',
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
        title: '我的保单'
      }
    }, {
      path: '/loginIndex',
      name: 'LoginIndex',
      component: resolve => require(['@/view/login/index'], resolve),
      meta: {
        title: '登录'
      }
    }, {
      path: '/insureInformation',
      name: 'InsureInformation',
      component: resolve => require(['@/view/pages/insure-information'], resolve),
      meta: {
        title: '填写投保信息'
      }
    }, {
      path: '/loginVerify',
      name: 'LoginVerify',
      component: resolve => require(['@/view/login/verify'], resolve),
      meta: {
        title: '登录'
      }
    }, {
      path: '/register',
      name: 'Register',
      component: resolve => require(['@/view/login/register'], resolve),
      meta: {
        title: '注册'
      }
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   const Token = localStorage.getItem('UserInfo')
//   if (!Token && to.name !== 'login_index' && to.name !== 'login_getpassword' && to.name !== 'login_resetpassword') {
//     next({
//       name: 'login_index'
//     })
//   } else if ((!Token && to.name === 'login_index') || (!Token && to.name === 'login_getpassword') || (!Token && to.name === 'login_resetpassword')) {
//     next()
//   } else if ((Token && to.name === 'login_index') || (Token && to.name === 'login_getpassword') || (Token && to.name === 'login_resetpassword')) {
//     next({
//       name: 'home_personal'
//     })
//   }
//   next()
// })

// router.afterEach(() => {
//   window.scrollTo(0, 0)
// })

export default router
