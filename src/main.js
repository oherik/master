import Vue from 'vue'
import App from './App.vue'
import Admin from './Admin.vue'
import Client from './Client.vue'
import BootstrapVue from 'bootstrap-vue' //Bootstrap, kan vara bra at tha
import 'vue-awesome/icons'
import VueSimpleSVG from 'vue-simple-svg'
import VueRouter from 'vue-router'

import Icon from 'vue-awesome/components/Icon'
Vue.component('v-icon', Icon)

Vue.use(VueRouter);
Vue.use(VueSimpleSVG);
Vue.use(BootstrapVue);
Vue.config.productionTip = false

import { store } from './store.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

/*

const AppApp = new Vue({
  render: h => h(App),
  store
}).$mount('#app')

const AdminApp = new Vue({
  render: h => h(Admin)
}).$mount('#admin')

*/
const routes = [
  { path: '/admin', component: Admin },
  { path: '/', component: Client }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

