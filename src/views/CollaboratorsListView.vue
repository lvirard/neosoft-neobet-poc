<script setup lang="ts">
import CollaboratorFilters from "@/components/CollaboratorFilters.vue";
import CollaboratorCard from "@/components/CollaboratorCard.vue";
import { useCollaboratorStore } from "@/stores/collaboratorsListStore";
import ScrollToTop from "@/components/ScrollToTop.vue";

const store = useCollaboratorStore();
</script>

<template>
  <CollaboratorFilters />
  <CollaboratorCard
    v-for="collaborator in store.filteredCollaborators"
    :collaborator
    :key="collaborator.id"
  />
  <ScrollToTop></ScrollToTop>
</template>
