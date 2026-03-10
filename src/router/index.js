import { createRouter, createWebHistory } from 'vue-router';
import CollaboratorsListView from '@/views/CollaboratorsListView.vue';
import CollaboratorDetailView from '@/views/CollaboratorDetailView.vue';
import FavoritesCollaboratorsListView from '@/views/FavoritesCollaboratorsListView.vue';
import Home from '@/views/HomePage.vue';
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/collaborators",
            name: "collaboratorsList",
            component: CollaboratorsListView,
        },
        {
            path: "/detail/:name",
            name: "detail",
            component: CollaboratorDetailView,
            props: true,
        },
        {
            path: '/favorites',
            name: 'favorites',
            component: FavoritesCollaboratorsListView,
            props: true,
        },
    ],
    scrollBehavior() {
        return new Promise((resolve) => {
            resolve({ left: 0, top: 0 });
        });
    },
});
export default router;
