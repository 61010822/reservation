import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebase from '../firebase/initFirebase'

Vue.config.productionTip = false
firebase()
new Vue({
  router,
  store,
  vuetify,
  render: (h) => { return h(App) }
}).$mount('#app')
