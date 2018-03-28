<template>
  <md-toolbar>
    <h3 class="md-title">Историческая таблица</h3>
    <div class="md-toolbar-section-end">
      <!-- <md-avatar class="md-avatar-icon">
        <md-icon>person</md-icon> 
      </md-avatar>
      <label class="username-label">Username</label> -->
      <router-link to="/login">
        <md-button class="md-button">Выйти</md-button>
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
  // .md-avatar-icon
  //   margin: 0

  // .username-label
  //   margin-right: 15px
</style>
