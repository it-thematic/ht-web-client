<template>
  <div class="ex-search-wrapper">
    <md-button class="md-raised md-accent" v-on:click="exsearchOpen = !exsearchOpen">
      <md-icon>zoom_in</md-icon>
      Расширенный поиск
    </md-button>
    <div class="ex-search" v-if="exsearchOpen">
      <md-datepicker v-model="dateFrom" class="datepicker-halfwidth" id="date-from"><label>Date 1</label></md-datepicker>
      <md-datepicker v-model="dateTo" class="datepicker-halfwidth" id="date-to"><label>Date 2</label></md-datepicker>
      <md-field>
        <label for="attributes">Атрибуты</label>
        <md-select v-model="selectedAttributes" name="attributes" id="attributes" multiple>
          <md-option v-for="value, key in attributes" v-bind:key="key" :value="key">{{value}}</md-option>
        </md-select>
      </md-field>
      <div class="btns-wrapper">
        <md-button v-on:click="reset()">Сбросить</md-button>
        <md-button v-on:click="setExQuery()">Применить</md-button>
      </div>
    </div>
  </div>
</template>

<script>
  import store from '../../../store'
import indexStore from '../store/indexStore';
  export default {
    name: 'ExSearchComponent',
    data: () => {
      return {
        exsearchOpen: false,
        dateFrom: null,
        dateTo: null,
        attributes: [],
        selectedAttributes: []
      }
    },
    mounted: function () {
      this.$http.get(this.rootUrl + store.state.http.attributes).then(response => {
        this.attributes = response.data
      }).catch(error => {
        console.log('Error ' + error.status)
      })
    },
    methods: {
      setExQuery: function () {
        let _exQuery = {
          changeableAttributes: this.selectedAttributes,
          startChanges: this.formatDate(this.dateFrom),
          endChanges: this.formatDate(this.dateTo)
        }
        let _exSearchString = this.createExSearchString(_exQuery)
        indexStore.state.exSearch = _exSearchString
      },

      reset: function () {
        this.dateFrom = null
        this.dateTo = null
        this.selectedAttributes = []
        this.exsearchOpen = false
        indexStore.state.exSearch = null
      }
    }
  }
</script>

<style lang="sass">
  @import '../../../assets/variables.sass'

  .ex-search-wrapper
    width: 100vw
    text-align: center

  .ex-search
    width: 50vw
    margin: 0 25vw 0 25vw
    text-align: left !important

  .btns-wrapper
    text-align: center !important

  .datepicker-halfwidth
    width: 50%
    float: left

  .md-field .md-input[type=date], .md-field .md-textarea[type=date]
  // #date-from, #date-to
    font-size: 1px !important
</style>
