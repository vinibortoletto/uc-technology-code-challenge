import { createRouter, createWebHistory } from 'vue-router'
import { EditEmployeeView, NotFoundView, RegisterEmployeeView } from '../views'

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
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'Not Found',
      component: NotFoundView
    }
  ]
})

export default router
