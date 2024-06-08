import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../components/Login.vue')
    },
    {
      path: '/student',
      name: 'student',
      component: () => import('../views/StudentView.vue')
    },
    {
      path: '/teacher',
      name: 'teacher',
      component: () => import('../views/TeacherView.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../components/BuscarEstudiante.vue')
    },
    {
      path: '/califications',
      name: 'califications',
      component: () => import('../components/EnterCalifications.vue')
    }
  ]
})



export default router;


