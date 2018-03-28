<template>
  <div class="ex-search-wrapper">
    <md-button class="md-raised" v-on:click="exsearchOpen = !exsearchOpen">
      <md-icon>zoom_in</md-icon>
      Расширенный поиск
    </md-button>
    <div class="ex-search" v-if="exsearchOpen">
      <md-field>
        <label>Параметр 1</label>
        <md-input></md-input>
        <span class="md-helper-text">Helper text</span>
      </md-field>
      <md-field>
        <label>Параметр 2</label>
        <md-input></md-input>
        <span class="md-helper-text">Helper text</span>
      </md-field>
      ...
      <md-field>
        <label>Параметр N</label>
        <md-input></md-input>
        <span class="md-helper-text">Helper text</span>
      </md-field>
      <div class="btns-wrapper">
        <md-button>Сбросить</md-button>
        <md-button>Применить</md-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ExSearchComponent',
    data: () => {
      return {
        exsearchOpen: false
      }
    }
  }
</script>

<style lang="sass">
  .ex-search-wrapper
    width: 100vw
    text-align: center

  .ex-search
    width: 50vw
    margin: 0 25vw 0 25vw
    text-align: left !important

  .btns-wrapper
    text-align: center !important
</style>
