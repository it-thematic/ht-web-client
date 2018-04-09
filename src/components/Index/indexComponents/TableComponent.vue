<template>
  <div>
    <div class="spinner-wrapper" v-if="loading">
      <md-progress-spinner
        md-mode="indeterminate"
        :md-diameter="50"
        :md-stroke="3"></md-progress-spinner>
    </div>
    <div class="table-wrapper" v-else>
      <md-table v-model="features" md-card>
        <md-table-row slot="md-table-row" slot-scope="{ item }">
          <md-table-cell
            v-for="value, key in attributes"
            :md-label="value"
            v-bind:key="key"
            v-on:mouseenter.native="onHover($event, key, item.id)"
            v-on:mouseleave.native="onRelease($event)"
            v-on:dblclick.native="showHistoryCard(attribute, itemId)">{{ item[key] }}</md-table-cell>
        </md-table-row>
        <md-table-empty-state
          md-label="Нет результатов"
          :md-description="`По данному запросу ничего не найдено`">
          <md-button class="md-raised md-primary" v-on:click="reset()">Сбросить</md-button>
        </md-table-empty-state>
      </md-table>
      <div class="table-bottom" v-if="count > 0">
        <span class="table-bottom-span" style="float: left">Результатов <b>{{ count }}</b> (<b>{{ limit }}</b> на странице)</span>
        <div class="paging-btns-wrapper">
          <md-button class="md-icon-button" v-on:click="page = 1" :disabled="page === 1"><md-icon>first_page</md-icon></md-button>
          <md-button class="md-icon-button" v-on:click="page--" :disabled="page === 1"><md-icon>navigate_before</md-icon></md-button>
          <span class="table-bottom-span">стр. <b>{{ page }}</b> из <b>{{ pages }}</b></span>
          <md-button class="md-icon-button" v-on:click="page++" :disabled="page === pages"><md-icon>navigate_next</md-icon></md-button>
          <md-button class="md-icon-button" v-on:click="page = pages" :disabled="page === pages"><md-icon>last_page</md-icon></md-button>
        </div>
        <span><i><b>Двойной щелчок по ячейке таблицы</b> - показать историю изменений</i></span>
      </div>
    </div>

    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>История</md-dialog-title>
      <!-- <span v-if="history === [] || history === null">Нет изменений</span> -->
      <md-dialog-content>{{ history }}</md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showDialog = false">Закрыть</md-button>
      </md-dialog-actions>
    </md-dialog>
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
        count: null,
        loading: false,
        attribute: null,
        itemId: null,
        showDialog: false,
        history: null
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
        this.offset = 0
        this.getFeatures(newQuery, this.exSearch)
      },
      exSearch: function (newExQuery, oldExQuery) {
        this.offset = 0
        this.getFeatures(this.search, newExQuery)
      },
      page: function (newValue, oldValue) {
        this.offset = this.limit * (newValue - 1)
        this.getFeatures(this.search, this.exSearch)
      },
      showDialog: function (newState, oldState) {
        if (!newState) {
          this.history = null
        }
      }
      // attribute: function (newValue, oldValue) {
      //   if (newValue !== null) {
      //     this.showHistoryCard(this.attribute, this.itemId)
      //   }
      // },
      // itemId: function (newValue, oldValue) {
      //   if (newValue !== null) {
      //     this.showHistoryCard(this.attribute, this.itemId)
      //   }
      // }
    },
    mounted: function () {
      this.getAttributes()
      this.getFeatures()
    },
    methods: {
      onHover: function (event, attribute, itemId) {
        let _cell = event.target
        _cell.style.background = '#83b9ff'
        _cell.style.cursor = 'pointer'

        this.attribute = attribute
        this.itemId = itemId
        // let _posX = event.pageX
        // let _posY = event.pageY
        // this.showHistoryCard(attribute, itemId, _posX, _posY)
      },

      showHistoryCard: function (attribute, itemId) {
        // console.log('ITEM: ' + itemId + ', ATTR: ' + attribute)
        this.$http.get(this.rootUrl + store.state.http.histories + '?feature_id=' + itemId + '&attribute=' + attribute).then(response => {
          if (response.data.results.length === 0) {
            this.history = 'Нет изменений'
          } else {
            this.history = response.data.results
          }
          this.showDialog = true
        }).catch(error => {
          console.log(error.status)
        })
      },
      
      onRelease: function(event) {
        let _cell = event.target
        _cell.style.background = ''
        _cell.style.cursor = 'default'
        this.attribute = null
        this.itemId = null
      },

      getAttributes: function () {
        this.$http.get(this.rootUrl + store.state.http.attributes).then(response => {
          this.attributes = response.data
        }).catch(error => {
          console.log('Error ' + error.status)
        })
      },

      getFeatures: function (search, exSearch) {
        this.loading = true
        let _url = this.rootUrl + store.state.http.features + '?limit=' + this.limit + '&offset=' + this.offset
        if ((search !== null) && (search !== undefined)) {
          _url += '&search=' + search
        }
        if ((exSearch !== null) && (exSearch !== undefined)) {
          _url += exSearch
        }
        this.$http.get(_url).then(response => {
          this.features = response.data.results
          this.count = response.data.count
          this.pages = this.calcPages(this.count, this.limit)
          this.loading = false
        }).catch(error => {
          console.log('Error ' + error.status)
          this.loading = false
        })
      },

      reset: function () {
        indexStore.state.search = null
        indexStore.state.exSearch = null
      }
    }
  }
</script>

<style lang="sass">
  .spinner-wrapper
    width: 100vw
    height: 80vh
    padding-top: 30vh
    text-align: center

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

  .md-table-cell-container
    background: none !important
</style>
