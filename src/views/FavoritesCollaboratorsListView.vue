<script setup lang="ts">
import CollaboratorCard from '@/components/CollaboratorCard.vue';
import { useCollaboratorStore } from '@/stores/collaboratorsListStore';

const store = useCollaboratorStore();

</script>

<template>
    <h1 class="text-center mb-6">Mes favoris : </h1>
    <CollaboratorCard v-for="collaborator in store.favoriteCollaborators" :collaborator key="collaborator.name" />
</template>