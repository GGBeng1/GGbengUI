import Vue from 'vue'
import App from './App'
import router from './router'
import Gui from './comps/index'
Vue.config.productionTip = false
Vue.use(Gui)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
