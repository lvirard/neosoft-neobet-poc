import { createRouter, createWebHistory } from 'vue-router';
import CollaboratorsListView from '@/views/CollaboratorsListView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'collaboratorsList',
      component: CollaboratorsListView
    }
  ]
})

export default router