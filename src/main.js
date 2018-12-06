import Vue from 'vue'
import Bootstrapvue from 'bootstrap-vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { store } from './store/store'

Vue.use(Bootstrapvue)
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  store
}).$mount('#app')
