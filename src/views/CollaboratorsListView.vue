<script setup lang="ts">
import CollaboratorFilters from "@/components/CollaboratorFilters.vue";
import CollaboratorCard from "@/components/CollaboratorCard.vue";
import { useCollaboratorStore } from "@/stores/collaboratorsListStore";
import ScrollToTop from "@/components/ScrollToTop.vue";
import { ref } from "vue";

const menu = ref(false);
const store = useCollaboratorStore();

</script>

<template>
  <v-row>
    <v-col cols="9">
      <p>
        {{ store.getNumberOfAvailableCollaborators }} consultants trouvés
      </p>
    </v-col>
    <v-col class="d-flex justify-end">
      <v-menu v-model="menu" :close-on-content-click="false">
        <template v-slot:activator="{ props }">
          <v-btn icon="$filter" variant="plain" v-bind="props"></v-btn>
        </template>
        <CollaboratorFilters />
      </v-menu>
    </v-col>
  </v-row>

  <v-row>
    <span v-if="store.filteredCollaborators.length === 0">
      Actuellement aucun de nos consultants ne répond à votre recherche.
      <v-btn href="tel:0101010101" block class="mt-4">Discutons-en</v-btn>
    </span>
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
