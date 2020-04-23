<template lang="html">
<li class="guest-list-item">
  <h2>{{guest.name}}</h2>
  <h3>{{guest.email}}</h3>
  <h4 class="not-checked" v-if="!guest.checkIn">Not Checked In</h4>
  <h4 class="checked" v-if="guest.checkIn">Checked In!</h4>
  <button v-if="!guest.checkIn" type="button" class="check-in-btn" v-on:click="checkInGuest">Check In</button>
  <button v-if="guest.checkIn" type="button" class="uncheck-in-btn" v-on:click="uncheckInGuest">Check Out</button>
  <button type="button" class="delete-btn" v-on:click="deleteGuest">Delete</button>
</li>
</template>

<script>
import {eventBus} from '../main.js';
import GuestsService from '../services/GuestsService.js'

export default {
  name: 'list-item',
  props: ['guest'],
  methods: {
    deleteGuest() {
      GuestsService.deleteGuest(this.guest._id)
      .then(() => eventBus.$emit('guest-deleted', this.guest._id))
    },
    checkInGuest() {
      eventBus.$emit('check-in-guest', this.guest._id);
    },
    uncheckInGuest() {
      eventBus.$emit('uncheck-in-guest', this.guest._id);
    }
  }
}
</script>

<style lang="css" scoped>
h2 {
  min-height: 100px;
  font-size: 2em;
  word-wrap: normal;
  margin: 0;
}
h3 {
  word-wrap:break-word;
  min-height: 70px
}
h4 {
  font-size: 1.3em;
}
.guest-list-item {
  width: 20%;
  /* flex-grow: 1; */
  border: 6px solid darkblue;
  border-radius: 10px;
  background: skyblue;
  padding: 15px;
  display: flex;
  flex-direction: column;
  margin: 0.5em 0.5em;
  justify-content: space-between;
}

.checked {
  color: green;
}

.not-checked {
  color: red;
}

button.check-in-btn {
  color: green;
  font-size: 1.5em;
  border: darkgreen solid 2px;
  border-radius: 5px;
  margin-top: 0.5em;

  cursor: pointer;

}
button.uncheck-in-btn {
  color: red;
  font-size: 1.5em;
  border: darkred solid 2px;
  border-radius: 5px;
  margin-top: 0.5em;
  cursor: pointer;
}
button.delete-btn {
  color: black;
  font-size: 1em;
  border: black solid 2px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 0.5em;
  align-self: flex-end;
}

</style>
