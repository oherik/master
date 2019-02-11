import Vue from 'vue'
import App from './App.vue'
import Admin from './Admin.vue'
import Client from './Client.vue'
import BootstrapVue from 'bootstrap-vue' //Bootstrap, kan vara bra at tha
import 'vue-awesome/icons'
import VueSimpleSVG from 'vue-simple-svg'
import VueRouter from 'vue-router'
import vueSlider from 'vue-slider-component'
import ToggleButton from 'vue-js-toggle-button'
import VueNumberInput from '@chenfengyuan/vue-number-input';
import Icon from 'vue-awesome/components/Icon'
import VueTabs from 'vue-nav-tabs'
import 'vue-nav-tabs/themes/vue-tabs.css'

Vue.component('v-icon', Icon)
Vue.component('vue-slider', vueSlider)

Vue.use(VueTabs)
Vue.use(VueNumberInput);
Vue.use(ToggleButton)
Vue.use(VueRouter);
Vue.use(VueSimpleSVG);
Vue.use(BootstrapVue);

Vue.config.productionTip = false

import { store } from './store.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

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

