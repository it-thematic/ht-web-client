import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'

import VueMaterial from 'vue-material'

import HttpMixin from './mixins/httpMixin'

import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.config.productionTip = false

Vue.use(VueMaterial)
// Vue.material.theming.theme = 'custom'
Vue.use(VueResource)

Vue.mixin(HttpMixin)

// Vue.http.options.emulateJSON = true
// Vue.http.options.crossOrigin = true
// Vue.http.options.xhr = {withCredentials: true}
// Vue.http.headers.common['Access-Control-Allow-Origin'] = '*'
// Vue.http.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
Vue.http.headers.common['Accept'] = 'application/json, text/plain, */*'
// Vue.http.headers.common['Access-Control-Allow-Headers'] = 'Origin, Accept, Content-Type, Authorization, Access-Control-Allow-Origin'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
