import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from './components/Hello.vue'
import TodoCard from './components/TodoCard.vue'
import Home from './components/Home.vue'
import Main from './layouts/Main.vue'

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/hello', component: Hello },
    { path: '/survivo', component: TodoCard },
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(Main)
})