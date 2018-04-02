import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    http: {
      host: 'http://192.168.2.236:8000/',
      api: 'api_v1/',
      features: 'features/',
      histories: 'histories/',
      attributes: 'attributes/',
      login: 'login/',
      logout: 'logout/'
    }
  }
})
