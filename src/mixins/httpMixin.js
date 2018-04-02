import store from '../store'
import Vue from 'vue'

export default {
  data () {
    return {
      rootUrl: store.state.http.host + store.state.http.api
    }
  }
}
