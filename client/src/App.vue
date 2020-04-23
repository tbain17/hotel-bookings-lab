<template>
  <div id="app">
    <h1>Hotel Bookings!</h1>
    <guest-form/>
    <guest-list :guests="guests"/>
  </div>
</template>

<script>
import {eventBus} from './main.js'
import GuestForm from './components/GuestForm.vue';
import GuestList from './components/GuestsList.vue';
import GuestsService from './services/GuestsService.js';

export default {
  name: 'App',
  data(){
    return {
      guests: []
    };
  },
  components: {
    'guest-form': GuestForm,
    'guest-list': GuestList
  },
  mounted(){
    GuestsService.getGuests()
    .then(guests => this.guests = guests);

    eventBus.$on('guest-added', (guest) => {
      this.guests.push(guest)
    })

    eventBus.$on('guest-deleted', (id) => {
      const index = this.guests.findIndex(guest => guest._id === id)
      this.guests.splice(index, 1)
    })

    eventBus.$on('check-in-guest', (id) => {
      const index = this.guests.findIndex(guest => guest._id === id)
      this.guests[index].checkIn = true;
    })

    eventBus.$on('uncheck-in-guest', (id) => {
      const index = this.guests.findIndex(guest => guest._id === id)
      this.guests[index].checkIn = false;
    })
  }
}
</script>

<style>
h1 {
  font-size: 4em;
  color: darkorange;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
    background-color: lightyellow;
}
</style>
