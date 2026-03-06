import { createRouter, createWebHistory } from 'vue-router';
import CollaboratorsListView from '@/views/CollaboratorsListView.vue';
import CollaboratorDetailView from '@/views/CollaboratorDetailView.vue';
import Home from '@/views/Home.vue';
import { Collaborator } from '@/types/collaborator';

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
    {
      path: '/detail/:name',
      name: 'detail',
      component: CollaboratorDetailView,
      props: true,
    },
  ]
})

export default router