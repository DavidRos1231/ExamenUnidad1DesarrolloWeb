import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Form from '../components/Form.vue'
import LandingPage from '../components/LandingPage.vue'
import Vehiculos from '../components/Vehiculos.vue'


Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: LandingPage
    },
    {
      path: '/inicio',
      name: 'inicio',
      component: HomeView
    },
    {
      path: '/vehiculos',
      name: 'vehiculos',
      component: Vehiculos
    },
    {
      path: '/form',
      name: 'form',
      component: Form
    }
  ]
})

export default router
