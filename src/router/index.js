import { createRouter, createWebHistory } from 'vue-router'
import StudentView from '../views/student/StudentView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: StudentView
    },
    {
      path: '/teacher',
      name: 'teacher',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/teacher/TeacherView.vue')
    }
  ]
})

export default router
