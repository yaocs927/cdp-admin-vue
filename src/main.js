import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
// import $ from 'jquery'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
// page components
import Login from 'components/login'
import Main from 'components/main'
import Places from 'components/places/places'
import Activities from 'components/activities/activities'
import Users from 'components/users/users'
import Systems from 'components/systems/systems'
import NewPlace from 'components/newPlace/newPlace'

Vue.use(ElementUI)
Vue.use(VueRouter)

const routes = [{
  path: '/login',
  component: Login
}, {
  path: '/main',
  component: Main,
  children: [{
    path: 'places',
    component: Places
  }, {
    path: 'activities',
    component: Activities
  }, {
    path: 'users',
    component: Users
  }, {
    path: 'systems',
    component: Systems
  }, {
    path: 'newPlace',
    component: NewPlace
  }]
}]

var router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  },
  router
})

router.replace('/main/places')
