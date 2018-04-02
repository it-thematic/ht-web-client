<template>
  <div class="login-wrapper">
    <router-link to="/">
      <span class="md-display-3">Вход</span>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'LoginComponent'
  }
</script>

<style lang="sass">
  .login-wrapper
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
</style>
