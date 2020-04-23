<template lang="html">
  <section>
    <ul id="list-wrapper">
      <list-item v-for="(guest, index) in guests" :key="index" :guest="guest"/>
    </ul>
  </section>
</template>

<script>
import {eventBus} from '../main.js'
import GuestsService from '../services/GuestsService.js'
import ListItem from './ListItem.vue'

export default {
  name: 'guest-list',
  components: {
    'list-item': ListItem
  },
  props: ['guests']
}
</script>

<style lang="css" scoped>
section {
  margin-top: 40px;
}
ul {
  list-style-type: none;
}
#list-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
</style>
