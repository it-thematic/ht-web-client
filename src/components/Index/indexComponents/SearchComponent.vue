<template>
  <div class="search-wrapper">
    <md-field>
      <label>Поиск</label>
      <md-input v-model="query"></md-input>
      <md-icon>search</md-icon>
    </md-field>
  </div>
</template>

<script>
  export default {
    name: 'SearchComponent',
    data: () => {
      return {
        query: ''
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
