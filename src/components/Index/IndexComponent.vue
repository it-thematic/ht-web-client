<template>
  <div>
    <h2>Index component</h2>
    <header-panel-component></header-panel-component>
    <search-component></search-component>
    <ex-search-component></ex-search-component>
    <table-component></table-component>
  </div>
</template>

<script>
  import HeaderPanelComponent from './indexComponents/HeaderPanelComponent'
  import SearchComponent from './indexComponents/SearchComponent'
  import ExSearchComponent from './indexComponents/ExSearchComponent'
  import TableComponent from './indexComponents/TableComponent'

  export default {
    name: 'IndexComponent',
    components: {
      HeaderPanelComponent,
      SearchComponent,
      ExSearchComponent,
      TableComponent
    }
  }
</script>

<style>

</style>
