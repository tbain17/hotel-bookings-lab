<template>
  <div id="app">
    <h1>Hotel Bookings!</h1>
  </div>
</template>

<script>
import GuestForm from './components/GuestForm.vue';
import GuestList from './components/GuestList.vue';

export default {
  name: 'App',
  components: {
    'guest-form': GuestForm,
    'guest-list': GuestList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
