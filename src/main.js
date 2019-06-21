import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import '@/style/normalize.css'

Vue.config.productionTip = false
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', () => {
    fastclick.attach(document.body)
  }, false)
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
