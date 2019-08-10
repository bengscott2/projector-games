import Vue from 'vue'
import Router from 'vue-router'
import DisplayScore from '@/components/DisplayScore'
import Player from '@/components/Player'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/display',
      name: 'Display',
      component: DisplayScore
    },
    {
      path: '/player',
      name: 'Player',
      component: Player
    }
  ]
})
