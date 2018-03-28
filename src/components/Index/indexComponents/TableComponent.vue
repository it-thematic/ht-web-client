<template>
  <div class="table-wrapper">
    <md-table>
      <md-table-row>
        <md-table-head>Column 1</md-table-head>
        <md-table-head>Column 2</md-table-head>
        <md-table-head>...</md-table-head>
        <md-table-head>Column M</md-table-head>
      </md-table-row>
      <md-table-row>
        <md-table-cell>123</md-table-cell>
        <md-table-cell>123</md-table-cell>
        <md-table-cell>...</md-table-cell>
        <md-table-cell>123</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>123</md-table-cell>
        <md-table-cell>123</md-table-cell>
        <md-table-cell>...</md-table-cell>
        <md-table-cell>123</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>123</md-table-cell>
        <md-table-cell>123</md-table-cell>
        <md-table-cell>...</md-table-cell>
        <md-table-cell>123</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
  export default {
    name: 'TableComponent'
  }
</script>

<style lang="sass">
  .table-wrapper
    width: 100vw
    padding: 20px 50px 0 50px
</style>
