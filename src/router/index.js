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
      path: '/biology',
      name: 'biology',
      component: () => import('../views/AsignaturesViews/BiologyView.vue')
    },
    {
      path: '/physics',
      name: 'physics',
      component: () => import('../views/AsignaturesViews/physicsView.vue')
    },
    {
      path: '/chemistry',
      name: 'chemistry',
      component: () => import('../views/AsignaturesViews/ChemistryView.vue')
    }
  
  ]
})

export default router
