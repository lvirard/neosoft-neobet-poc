<script setup lang="ts">
import { useRouter } from "vue-router";
import { useCollaboratorStore } from "@/stores/collaboratorsListStore";
import { JobRepository } from "@/types/JobRepository";
import {
  //officeOptions,
  seniorityOptions,
  titleOptions,
  availabilityOptions
} from "@/data/filterOptions";

const router = useRouter();

function handleSearch() {
  router.push({ name: "collaboratorsList" });
}
const store = useCollaboratorStore();

function onTitleChange(value: string | null) {
  store.setFilter("title", value as JobRepository | undefined);
}
</script>

<template>
  <div class="search-wrapper">
    <v-card class="search-card pa-4 mb-4">
      <!-- <v-row align="center" density="comfortable" justify="space-between">
        <v-select
          :model-value="store.filters.office"
          @update:model-value="store.setFilter('office', $event)"
          :items="officeOptions"
          label="Secteur géographique"
          clearable
          density="comfortable"
          hide-details
        />
      </v-row> -->
      <div class="d-flex flex-column ga-6">
        <v-select
          :model-value="store.filters.title"
          @update:model-value="onTitleChange"
          :items="titleOptions"
          label="Métier"
          clearable
          density="comfortable"
          hide-details
          variant="underlined"
        >
          <template #prepend>
            <v-icon icon="$job" />
          </template>
        </v-select>
      </div>
      <div class="d-flex flex-column ga-6">
        <v-select
          :model-value="store.filters.seniority"
          @update:model-value="store.setFilter('seniority', $event)"
          :items="seniorityOptions"
          label="Expérience"
          clearable
          density="comfortable"
          hide-details
          variant="underlined"
        >
          <template #prepend>
            <v-icon icon="$seniority" />
          </template>
        </v-select>
      </div>
      <div class="d-flex flex-column ga-6">
        <v-select
          :model-value="store.filters.availability"
          @update:model-value="store.setFilter('availability', $event)"
          :items="availabilityOptions"
          label="Disponibilité"
          clearable
          density="comfortable"
          hide-details
          variant="underlined"
        >
          <template #prepend>
            <v-icon icon="$calendarCheck" />
          </template>
        </v-select>
      </div>
      <div class="d-flex flex-column ga-6">
        <v-text-field
          :model-value="store.filters.search"
          @update:model-value="store.setFilter('search', $event)"
          label="Rechercher par mots clés"
          clearable
          density="comfortable"
          hide-details
          variant="underlined"
        >
          <template #prepend>
            <v-icon icon="$magnify" />
          </template>
        </v-text-field>
      </div>
      <div class="d-flex justify-end mt-2">
        <v-btn
          variant="text"
          size="small"
          color="var(--neo-orange)"
          @click="store.resetFilters()"
        >
          Réinitialiser
        </v-btn>
      </div>
    </v-card>
  
    <div class="d-flex justify-center">
      <v-btn
        prepend-icon="$magnify"
        variant="elevated"
        @click="handleSearch"
        class="search-btn"
        block
      >
        Rechercher
      </v-btn>
    </div>
  </div>
</template>

<style>
.search-card {
  border-radius: 24px;
  background-color: #f5f5f5; /* ou var si tu veux */
}

.search-btn {
  border-radius: 16px;
}

.search-wrapper {
  background-color: var(--neo-dark-blue);
  padding: 16px;
  border-radius: 28px;
}

.v-field {
  padding-bottom: 8px;
}
</style>