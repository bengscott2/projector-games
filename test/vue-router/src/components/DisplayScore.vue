<template>
  <div class="score">
    <span>player1 = {{this.points[0]}} player2 = {{this.points[1]}}</span>
  </div>
</template>

<script>
import io from 'socket.io-client'
export default {
  name: 'DisplayScore',
  data () {
    return {
      points: [0, 0]
    }
  },
  mounted () {
    this.socket = io('http://192.168.1.89:3000/')
    this.socket.on('points', data => {
      this.points = data.points
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
