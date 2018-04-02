<template>
  <md-toolbar class="md-primary">
    <h3 class="md-title">Историческая таблица</h3>
    <div class="md-toolbar-section-end">
      <router-link to="/login">
        <md-button class="md-button" id="logout-btn">Выйти</md-button>
      </router-link>
    </div>
  </md-toolbar>
</template>

<script>
  export default {
    name: 'HeaderPanelComponent'
  }
</script>

<style lang="sass">
@import '../../../assets/variables.sass'

// .toolbar-panel
//   background-color: $primary-color !important

// .md-title, #logout-btn
//   color: #fff !important
</style>
