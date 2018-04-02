<template>
  <div class="table-wrapper">
    <md-table v-model="features" md-card>
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell v-for="value, key in attributes"
          :md-label="value"
          v-bind:key="key">{{ item[key] }}</md-table-cell>
      </md-table-row>
    </md-table>
    <div class="table-bottom">
      <span class="table-bottom-span" style="float: left">Результатов <b>{{ count }}</b> (<b>{{ limit }}</b> на странице)</span>
      <div class="paging-btns-wrapper">
        <md-button class="md-icon-button" v-on:click="page = 1" :disabled="page === 1"><md-icon>first_page</md-icon></md-button>
        <md-button class="md-icon-button" v-on:click="page--" :disabled="page === 1"><md-icon>navigate_before</md-icon></md-button>
        <span class="table-bottom-span">стр. <b>{{ page }}</b> из <b>{{ pages }}</b></span>
        <md-button class="md-icon-button" v-on:click="page++" :disabled="page === pages"><md-icon>navigate_next</md-icon></md-button>
        <md-button class="md-icon-button" v-on:click="page = pages" :disabled="page === pages"><md-icon>last_page</md-icon></md-button>
      </div>
    </div>
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
        offset: 0,
        page: 1,
        pages: null,
        count: null
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
      },
      page: function (newValue, oldValue) {
        this.offset = this.limit * (newValue - 1)
        this.getFeatures(this.search)
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
        if (search !== (null || undefined)) {
          _url += '&search=' + search
        }
        this.$http.get(_url).then(response => {
          this.features = response.data.results
          this.count = response.data.count
          this.pages = this.calcPages(this.count, this.limit)
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
    padding: 10px 30px 0 30px

  .table-bottom
    padding: 5px
    min-height: 40px
    max-height: 40px

  .paging-btns-wrapper
    text-align: right
    min-height: 40px
    max-height: 40px

  .table-bottom-span
    height: 40px
    line-height: 40px
    white-space: nowrap
</style>
