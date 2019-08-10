// import Vue for use
import Vue from 'vue'
// import VueRouter
import VueRouter from 'vue-router'
// imports root Vue component named App
import App from './App.vue'
import Player from './components/Player.vue'

const routes = [
  {path: '/foo', component: Player}
]

const router = new VueRouter({
  routes
})
Vue.config.productionTip = false

Vue.use(VueRouter)

// here is where we declare our Vue application
new Vue({
  router
}).$mount('#app')
// above ^ is where we mount our vue to the targeted #app element in the public index.html

// render: h => h(App)
