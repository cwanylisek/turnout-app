<template lang="html">
  <div class="container col-md-4">
  <h3>Events Dashboard</h3>
  <button class="btn btn-danger btn-sm signout-btn" v-on:click="signOut">Sign Out</button>
  <hr>
  <AddEvent />
  <hr>
  <div class="col-md-12">
      <EventItem
      v-for="(event_item, index) in this.$store.state.events"
      :event="event_item"
      key="index"
      />
  </div>
  </div>
</template>

<script>
import { firebaseApp, eventsRef } from '../firebaseApp'
import AddEvent from './event.vue'
import EventItem from './eventitem.vue'

export default {
  methods: {
    signOut() {
      this.$store.dispatch('signOut')
      firebaseApp.auth().signOut()
    }
  },
  components: {
    AddEvent,
    EventItem
  },
  mounted() {
    eventsRef.on('value', snap => {  // 'on' 2 argumenty
      let events = []
      snap.forEach(event => {
        events.push(event.val())
      })
      this.$store.dispatch('setEvents', events)
      console.log('events', events)
    })
  }
}
</script>

<style lang="css">
</style>
