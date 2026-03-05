<script setup lang="ts">
import { useCollaboratorStore } from '@/stores/collaboratorsListStore';
import { JobRepository } from '@/types/JobRepository';
const store = useCollaboratorStore();
const titleOptions = Object.values(JobRepository);
const officeOptions = ['Brest', 'Rennes', 'Paris'];
const seniorityOptions = ['Débutant', 'Confirmé', 'Senior'];

function onTitleChange(value: string | null) {
  store.setFilter('title', value as JobRepository | undefined);
}
</script>

<template>
  <v-card class="pa-4 mb-4">
    <v-row dense>
        <v-col cols="12" sm="3">
            <v-select
                :model-value="store.filters.title"
                @update:model-value="onTitleChange"
                :items="titleOptions"
                label="Métier"
                clearable
                density="comfortable"
                hide-details
            />
        </v-col>
        <v-col cols="12" sm="3">
            <v-select
                :model-value="store.filters.office"
                @update:model-value="store.setFilter('office', $event)"
                :items="officeOptions"
                label="Agence"
                clearable
                density="comfortable"
                hide-details
            />
        </v-col>
        <v-col cols="12" sm="3">
            <v-select
                :model-value="store.filters.seniority"
                @update:model-value="store.setFilter('seniority', $event)"
                :items="seniorityOptions"
                label="Expérience"
                clearable
                density="comfortable"
                hide-details
            />
        </v-col>
        <v-col cols="12" sm="3">
            <v-text-field
                :model-value="store.filters.search"
                @update:model-value="store.setFilter('search', $event)"
                label="Rechercher par mots clés"
                clearable
                density="comfortable"
                hide-details
            />
        </v-col>
    </v-row>
    <v-row align="center" dense>
        <v-col cols="6" sm="3">
            <v-switch
                :model-value="store.filters.isAvailable"
                @update:model-value="store.setFilter('isAvailable', $event ?? undefined)"
                label="Disponibles"
                color="primary"
                hide-details
                density="comfortable"
            />
        </v-col>
        <v-col cols="6" class="d-flex ml-auto justify-end">
            <v-btn @click="store.resetFilters()" variant="text" color="secondary">
            Réinitialiser
            </v-btn>
        </v-col>
    </v-row>
  </v-card>
</template>