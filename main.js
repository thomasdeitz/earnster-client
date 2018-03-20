import Vue from 'vue'
import App from './App/App.vue'
import VueRouter from './App/Router'

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router: VueRouter
})

