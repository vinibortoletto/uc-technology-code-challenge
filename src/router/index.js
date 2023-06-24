import { createRouter, createWebHistory } from 'vue-router'
import { EditEmployeeView, RegisterEmployeeView } from '../views'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Register Employee',
      component: RegisterEmployeeView
    },
    {
      path: '/edit-employee/:id',
      name: 'Edit Employee',
      component: EditEmployeeView
    }
  ]
})

export default router
