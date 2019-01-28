import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue' //Bootstrap, kan vara bra at tha
import 'vue-awesome/icons'
import VueSimpleSVG from 'vue-simple-svg'

import Icon from 'vue-awesome/components/Icon'
Vue.component('v-icon', Icon)

Vue.use(VueSimpleSVG)
Vue.use(BootstrapVue);
Vue.config.productionTip = false

import { store } from './store.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
