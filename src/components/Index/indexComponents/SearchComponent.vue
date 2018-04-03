<template>
  <div class="search-wrapper">
    <!-- <md-field md-clearable> -->
    <md-field>
      <md-icon>search</md-icon>
      <label>Поиск</label>
      <md-input v-model="query" v-on:keyup="setQuery()"></md-input>
      <md-button class="md-icon-button md-dense" v-on:click="query = ''; setQuery()">
        <md-icon>clear</md-icon>
      </md-button>
    </md-field>
  </div>
</template>

<script>
  import indexStore from '../store/indexStore'
  export default {
    name: 'SearchComponent',
    data: () => {
      return {
        query: '',
        timeout: null
      }
    },
    computed: {
      search: function () {
        return indexStore.state.search
      }
    },
    watch: {
      search: function (newValue, oldValue) {
        this.query = newValue
      }
    },
    methods: {
      setQuery: function () {
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          indexStore.state.search = this.query
        }, 500)
      }
    }
  } 
</script>

<style lang="sass">
  .search-wrapper
    width: 100vw
    padding: 5px 22vw 0 22vw
    text-align: center
</style>
