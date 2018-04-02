import Vue from 'vue'

export default {
//   data () {
//     return {}
//   },
  methods: {
    calcPages: function (count, limit) {
      let _pages = Math.trunc(count / limit)
      if (count % limit !== 0) { _pages++ }
      return _pages
    }
  }
}
