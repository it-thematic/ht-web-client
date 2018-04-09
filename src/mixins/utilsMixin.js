import Vue from 'vue'

export default {
  methods: {
    calcPages: function (count, limit) {
      let _pages = Math.trunc(count / limit)
      if (count % limit !== 0) { _pages++ }
      return _pages
    },
    
    formatDate: function (date) {
      if (date === null) { return null }
      let _date = ''
      _date += date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
      return _date 
    },

    createExSearchString: function (exSearch) {
      let _string = ''
      if ((exSearch.changeableAttributes !== null) && (exSearch.changeableAttributes !== undefined) && (exSearch.changeableAttributes.length > 0)) {
        _string += '&changeable_attributes='
        exSearch.changeableAttributes.forEach(attr => {
          _string += attr + ','
        })
        _string = _string.slice(0, -1)
      }
      if (exSearch.startChanges !== null) {
        _string += '&start_changes=' + exSearch.startChanges
      }
      if (exSearch.endChanges !== null) {
        _string += '&end_changes=' + exSearch.endChanges
      }
      return _string
    }
  }
}
