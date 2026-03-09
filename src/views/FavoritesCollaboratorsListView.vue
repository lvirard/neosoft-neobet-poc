<script setup lang="ts">
import CollaboratorCard from '@/components/CollaboratorCard.vue';
import { useCollaboratorStore } from '@/stores/collaboratorsListStore';

const store = useCollaboratorStore();

</script>

<template>
    <CollaboratorCard v-for="collaborator in store.favoriteCollaborators" :collaborator key="collaborator.name" />
</template>