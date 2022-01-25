import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/scss/bootstrap.scss'
import './assets/scss/styles.scss'
import ApiRequest from './classes/Apirequest'

Vue.config.productionTip = false
Vue.prototype.$request = ApiRequest

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
