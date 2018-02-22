import Vue from 'vue'
import App from './components/app.vue'
import VueRouter from 'vue-router'
import { firebaseApp } from './firebaseApp.js'

Vue.use(VueRouter)

import store from './store'

import Dashboard from './components/dashboard.vue'
import Signin from './components/signin.vue'
import Signup from './components/signup.vue'

const router = new VueRouter({
  mode: 'history', //mode 'history' or 'hash' doesnt refresh app when hit new url
  routes: [
    { path: '/dashboard', component: Dashboard },
    { path: '/signin', component: Signin },
    { path: '/signup', component: Signup }
  ]
})

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch('signIn', user)
    router.push('./dashboard')
  } else {
    router.replace('/signin')
  }
})

new Vue ({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
