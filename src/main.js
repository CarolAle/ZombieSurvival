import Vue from 'vue'
import VueRouter from 'vue-router'
import Survivor from './components/Survivor.vue'
import TodoCard from './components/TodoCard.vue'
import Home from './components/Home.vue'
import Main from './layouts/Main.vue'

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/register', component: Survivor },
    { path: '/survivos', component: TodoCard },
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(Main)
})