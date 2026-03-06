<script setup lang="ts">
import CollaboratorFilters from '@/components/CollaboratorFilters.vue';
import NeoButton from '@/components/NeoButton.vue';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useCollaboratorStore } from '@/stores/collaboratorsListStore';
const router = useRouter();

function handleSearch() {
  router.push({ name: 'collaboratorsList' });
}
onMounted(() => {
  useCollaboratorStore().resetFilters();
});
</script>

<template>
    <h1 class="text-center mb-6">Rechercher un talent : </h1>
    <CollaboratorFilters />
    <div class="d-flex justify-center mt-4 pt-4">
        <v-btn  
            prepend-icon="$magnify" 
            variant="elevated"
            @click="handleSearch" 
            color="primary" 
            class="mt-4">
            Voir tous les talents
        </v-btn>
    </div>
</template>