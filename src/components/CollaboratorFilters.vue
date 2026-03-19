<script setup lang="ts">
import { useCollaboratorStore } from "@/stores/collaboratorsListStore";
import { JobRepository } from "@/types/JobRepository";
import {
  officeOptions,
  seniorityOptions,
  titleOptions,
} from "@/data/filterOptions";

const store = useCollaboratorStore();

function onTitleChange(value: string | null) {
  store.setFilter("title", value as JobRepository | undefined);
}
</script>

<template>
  <v-card class="pa-4 mb-4">
    <v-row align="center" density="comfortable" justify="space-between">
      <v-select
        :model-value="store.filters.office"
        @update:model-value="store.setFilter('office', $event)"
        :items="officeOptions"
        label="Secteur géographique"
        clearable
        density="comfortable"
        hide-details
      />
    </v-row>
    <v-row align="center" density="comfortable" justify="space-between">
      <v-select
        :model-value="store.filters.title"
        @update:model-value="onTitleChange"
        :items="titleOptions"
        label="Métier"
        clearable
        density="comfortable"
        hide-details
      />
    </v-row>
    <v-row align="center" density="comfortable" justify="space-between">
      <v-select
        :model-value="store.filters.seniority"
        @update:model-value="store.setFilter('seniority', $event)"
        :items="seniorityOptions"
        label="Expérience"
        clearable
        density="comfortable"
        hide-details
      />
    </v-row>
    <v-row align="center" density="comfortable" justify="space-between">
      <v-text-field
        :model-value="store.filters.search"
        @update:model-value="store.setFilter('search', $event)"
        label="Rechercher par mots clés"
        clearable
        density="comfortable"
        hide-details
      />
    </v-row>
    <v-row align="center" density="comfortable" justify="space-between">
      <v-col cols="7" sm="auto">
        <v-switch
          :model-value="store.filters.isAvailable"
          @update:model-value="
            store.setFilter('isAvailable', $event ?? undefined)
          "
          label="Disponibles"
          color="primary"
          hide-details
          density="comfortable"
        />
      </v-col>
      <v-col cols="5" sm="auto" class="d-flex justify-end justify-sm-end">
        <v-btn
          @click="store.resetFilters()"
          variant="text"
          color="var(--neo-orange)"
          hide-details
          density="comfortable"
        >
          Réinitialiser
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>
