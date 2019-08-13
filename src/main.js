import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import axios from 'axios'
Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import "./assets/css/base.less"

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import login from './components/login.vue'
import index from './components/index.vue'

const routes = [
  { path: '/login', component:login},
  { path: '/index', component:index}
]

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
