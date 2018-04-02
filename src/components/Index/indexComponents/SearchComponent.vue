<template>
  <div class="search-wrapper">
    <md-field>
      <label>Поиск</label>
      <md-input v-model="query" v-on:keyup="setQuery()"></md-input>
      <md-icon>search</md-icon>
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
