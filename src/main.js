import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import './axios'
import './bootstrap'
import {router} from './router'
import './form'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
