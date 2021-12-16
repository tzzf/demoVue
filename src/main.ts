import Vue from 'vue'
import './cube-ui'
import VueI18n from 'vue-i18n'
import en from './langs/en'
import zh from './langs/zh'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'zh-CN',
  messages: {
    'zh-CN': {  ...zh },
    'en': { ...en }
  }
})

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
