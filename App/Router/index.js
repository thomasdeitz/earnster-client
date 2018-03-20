import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../Views/Home'

Vue.use(VueRouter);

export default new VueRouter({
  //mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})