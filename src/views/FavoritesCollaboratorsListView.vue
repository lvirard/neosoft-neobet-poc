<script setup lang="ts">
import CollaboratorCard from "@/components/CollaboratorCard.vue";
import { useCollaboratorStore } from "@/stores/collaboratorsListStore";
import ScrollToTop from "@/components/ScrollToTop.vue";

const store = useCollaboratorStore();
</script>

<template>
  <h1 class="text-center mb-6">Mes favoris :</h1>
  <v-row>
    <span v-if="store.favoriteCollaborators.length === 0">
      Vous n'avez encore aucun consultant favori.
      <v-btn href="mailto:commercial@neosoft.fr" block class="mt-4"
        >Discutons-en</v-btn
      >
    </span>
    <v-col
      v-for="collaborator in store.favoriteCollaborators"
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
