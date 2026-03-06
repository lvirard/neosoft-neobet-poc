import { createRouter, createWebHistory } from 'vue-router';
import CollaboratorsListView from '@/views/CollaboratorsListView.vue';
import Home from '@/views/Home.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/collaborators',
      name: 'collaboratorsList',
      component: CollaboratorsListView
    },
    
  ]
})

export default router