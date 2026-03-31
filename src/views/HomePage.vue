<script setup lang="ts">
import CollaboratorFilters from "@/components/CollaboratorFilters.vue";
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useCollaboratorStore } from "@/stores/collaboratorsListStore";
const router = useRouter();

function handleSearch() {
  router.push({ name: "collaboratorsList" });
}
onMounted(() => {
  useCollaboratorStore().resetFilters();
});
</script>

<template>
  <div class="home-page pa-6 mx-auto">
    <h1 class="mb-6 title-search">Trouvez le bon consultant pour réaliser vos projets !</h1>
    <CollaboratorFilters />
  </div>
</template>

<style>
.title-search {
  font-weight: 600; /* ou 700 si tu veux plus fort */
}

.home-page {
  max-width: 600px;
}

</style>