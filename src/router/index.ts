import MainLayout from '@/layouts/MainLayout.vue';
import Error404Layout from '@/layouts/Error404Layout.vue';
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: 'home',
      component: MainLayout,
      children: [
        {
          path: '/home',

          component: HomeView,
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not found',

      component: Error404Layout,
    },
  ],
});

export default router;
