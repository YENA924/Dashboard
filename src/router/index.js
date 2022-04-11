import { createRouter, createWebHistory } from 'vue-router'

import DashBoard from '@/components/views/dashboard/DashBoardMain'
import UserProfile from '@/components/views/userProfile/UserProfileMain'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Dashboard',
      component: DashBoard
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashBoard
    },
    {
      path: '/userProfile',
      name: 'User Profile',
      component: UserProfile
    }
  ]
})

export default router