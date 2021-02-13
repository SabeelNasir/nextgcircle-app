import Vue from 'vue'
import App from './App.vue'
import './assets/main.css'
import i18n from './i18n'
Vue.config.productionTip = false
import router from './router'


new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')
