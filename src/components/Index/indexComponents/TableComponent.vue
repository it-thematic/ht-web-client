<template>
  <div class="table-wrapper">
    <md-table v-model="features">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell v-for="value, key in attributes"
          :md-label="value"
          v-bind:key="key">{{ item[key] }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
  import store from '../../../store'
  import indexStore from '../store/indexStore'

  export default {
    name: 'TableComponent',
    data: () => {
      return {
        attributes: [],
        features: [],
        limit: 10,
        offset: 0
      }
    },
    computed: {
      search: function () {
        return indexStore.state.search
      },

      exSearch: function () {
        return indexStore.state.exSearch
      }
    },
    watch: {
      search: function (newQuery, oldQuery) {
        this.getFeatures(newQuery)
      }
    },
    mounted: function () {
      this.getAttributes()
      this.getFeatures()
    },
    methods: {
      getAttributes: function () {
        this.$http.get(this.rootUrl + store.state.http.attributes).then(response => {
          this.attributes = response.data
        }).catch(error => {
          console.log('Error ' + error.status)
        })
      },

      getFeatures: function (search) {
        let _url = this.rootUrl + store.state.http.features + '?limit=' + this.limit + '&offset=' + this.offset
        // if (search !== (null || undefined)) {
        //   _url += '&search=' + search
        // }
        this.$http.get(_url).then(response => {
          this.features = response.data.results
        }).catch(error => {
          console.log('Error ' + error.status)
        })
      }
    }
  }
</script>

<style lang="sass">
  .table-wrapper
    width: 100vw
    padding: 20px 50px 0 50px
</style>
