<template>
  <div>
    <button v-on:click="click()">Click</button>
  </div>
</template>

<script>
import io from 'socket.io-client'
export default {
  name: 'Player',
  created () {
    this.socket = io('http://192.168.1.89:3000/')
  },
  methods: {
    click () {
      this.socket.emit('click')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
