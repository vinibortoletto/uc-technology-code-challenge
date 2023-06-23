import { createRouter, createWebHistory } from 'vue-router'
import RegisterEmployeeView from '../views/RegisterEmployeeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Register Employee',
      component: RegisterEmployeeView
    }
  ]
})

export default router
