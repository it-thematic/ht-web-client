<template>
  <div class="ex-search-wrapper">
    <md-button class="md-raised md-accent" v-on:click="exsearchOpen = !exsearchOpen">
      <md-icon>zoom_in</md-icon>
      Расширенный поиск
    </md-button>
    <div class="ex-search" v-if="exsearchOpen">
      <md-datepicker v-model="dateFrom" class="datepicker-halfwidth" id="date-from" v-on:focus="selectDate('date-from')"><label>Date 1</label></md-datepicker>
      <md-datepicker v-model="dateTo" class="datepicker-halfwidth" id="date-to"><label>Date 2</label></md-datepicker>
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
        exsearchOpen: false,
        dateFrom: new Date(),
        dateTo: new Date()
      }
    },
    methods: {
      selectDate: function (inputId) {
        console.log(inputId)
        document.getElementById(inputId).style.fontSize = '16px !important'
      }
    }
  }
</script>

<style lang="sass">
  @import '../../../assets/variables.sass'

  .ex-search-wrapper
    width: 100vw
    text-align: center

  .ex-search
    width: 50vw
    margin: 0 25vw 0 25vw
    text-align: left !important

  .btns-wrapper
    text-align: center !important

  .datepicker-halfwidth
    width: 50%
    float: left

  .md-field .md-input[type=date], .md-field .md-textarea[type=date]
  // #date-from, #date-to
    font-size: 1px !important
</style>
