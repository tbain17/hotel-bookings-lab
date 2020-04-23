<template lang="html">
  <form v-on:submit="addGuest" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" v-model="name" required/>

    <label for="email">Email:</label>
    <input type="text" id="email" v-model="email" required/>

    <label for="checkIn">Checked in:</label>
    <input type="checkbox" id="checkIn" value="checkIn" v-model="checkIn" name="chackIn"/>

    <input type="submit" value="Save" name="submit"/>

  </form>
</template>

<script>
import {eventBus} from '../main.js'
import GuestsService from '../services/GuestsService.js'

export default {
  name: 'guest-form',
  data() {
    return {
      name: '',
      email: '',
      checkIn: false
    }
  },
  methods: {
    addGuest(e){
      e.preventDefault()
      const guest = {
        name: this.name,
        email: this.email,
        checkIn: this.checkIn
      }
      GuestsService.postGuest(guest)
      .then(res => eventBus.$emit('guest-added', res))

      this.name = '';
      this.email = '';
      this.checkIn = false;
    }
  }
}
</script>

<style lang="css" scoped>
input[type="text"],
input[type="email"] {
  padding: 8px;
  margin: 0 10px;
}

input[type="checkbox"] {
  margin: 0 10px;
  }

input[type="submit"] {
  background: skyblue;
  border-radius: 5px;
  border: 1px solid darkblue ;
  font-size: 16px;
  color: #333;
  padding: 8px 10px;
  margin-top: 20px;
  cursor: pointer;
}
</style>
