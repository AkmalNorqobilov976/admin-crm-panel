import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Settings from '@/views/settings/settings.vue'
import Mails from '@/views/mails/index.vue'
import GiveToCurier from '@/views/mails/givetocurier.vue'
import AddNewPost from "@/views/mails/addNewPost.vue"
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/mails',
    name: 'mails',
    component: Mails
  },
  {
    path: '/mails/give-to-curier',
    name: 'give-to-curier',
    component: GiveToCurier
  },
  {
    path: '/mails/add-new-post',
    name: 'add-new-post',
    component: AddNewPost
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
