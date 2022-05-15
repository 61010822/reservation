import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Menu.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import ForgotPassword from '../views/ForgotPassword.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Bell',
    name: 'Bell',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => { return import(/* webpackChunkName: "about" */ '../views/Bell.vue') }
  },
  {
    path: '/Song',
    name: 'Song',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => { return import(/* webpackChunkName: "about" */ '../views/Song.vue') }
  },
  {
    path: '/Time',
    name: 'Time',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => { return import(/* webpackChunkName: "about" */ '../views/Time.vue') }
  },
  {
    path: '/Reserve',
    name: 'Reserve',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => { return import(/* webpackChunkName: "about" */ '../views/Reserve.vue') }
  },
  {
    path: '/Home',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => { return import(/* webpackChunkName: "about" */ '../views/Home.vue') }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: 'Login'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      title: 'Register'
    }
  },
  {
    path: '/forgotpassword',
    name: 'ForgotPassword',
    component: ForgotPassword,
    meta: {
      title: 'ForgotPassword'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
