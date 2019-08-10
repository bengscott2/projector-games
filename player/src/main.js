import Vue from 'vue'
// imports root Vue component named App
import App from './App.vue'

Vue.config.productionTip = false
// here is where we declare our Vue application
new Vue({
  render: h => h(App),
}).$mount('#app')
// above ^ is where we mount our vue to the #app element in the public html
