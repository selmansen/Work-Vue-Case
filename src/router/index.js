import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Job from '../views/Job.vue'
import JobDetail from '../views/JobDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/job',
    name: 'Job',
    component: Job
  },
  {
    path: '/jobdetail/:id', 
    name: 'Job Detail',
    component: JobDetail
  },
  {
    path: "*", 
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
