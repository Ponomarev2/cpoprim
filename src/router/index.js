import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import News from '../views/News.vue'
import Post from '../views/Post.vue'
import Plans from '../views/Plans.vue'
import Hotlines from '../views/Hotlines.vue'
import Contacts from '../views/Contacts.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/news',
      name: 'news',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: News
    },
    {
      path: '/post/:id',
      name: 'post',
      props: true,
      component: Post
    },
    {
      path: '/contacts',
      name: 'contacts',
      props: true,
      component: Contacts
    },
    {
      path: '/hotlines',
      name: 'hotlines',
      props: true,
      component: Hotlines
    },
    {
      path: '/palns',
      name: 'plans',
      props: true,
      component: Plans
    }
  ]
})

export default router
