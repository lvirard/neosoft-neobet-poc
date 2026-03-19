<script setup lang="ts">
import CollaboratorFilters from "@/components/CollaboratorFilters.vue";
import CollaboratorCard from "@/components/CollaboratorCard.vue";
import { useCollaboratorStore } from "@/stores/collaboratorsListStore";
import ScrollToTop from "@/components/ScrollToTop.vue";

const store = useCollaboratorStore();
</script>

<template>
  <CollaboratorFilters />
  <v-row>
    <v-col
      v-for="collaborator in store.filteredCollaborators"
      :collaborator
      :key="collaborator.id"
      cols="12"
      md="4"
    >
      <CollaboratorCard :collaborator />
    </v-col>
  </v-row>

  <ScrollToTop></ScrollToTop>
</template>
