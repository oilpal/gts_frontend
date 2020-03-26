import Vue from 'vue'
import VueX from 'vuex'
import router from './router'
import store from './store'
import axios from 'axios'
import { BootstrapVue } from 'bootstrap-vue'
import App from './App.vue'
import VueCookies from 'vue-cookies'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// import '@/assets/framework/jui-grid-master/jui-grid.classic.css'
// import '@/assets/custom8.css'

window.axios = axios
Vue.prototype.axios = axios
Vue.config.productionTip = false
Vue.use(VueX)
Vue.use(BootstrapVue)
Vue.use(VueCookies)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
