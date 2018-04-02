<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App'
    // beforeCreate: function () {
    //   this.$material.theming.theme = 'custom'
    // }
  }
</script>


<style lang="sass">
  @import './assets/main.scss'
</style>
