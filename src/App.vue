<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    created: function () {
      document.title = 'Историческая таблица'
    }
  }
</script>


<style lang="sass">
  @import './assets/main.sass'
</style>
