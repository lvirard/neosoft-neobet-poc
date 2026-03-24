<script setup lang="ts">
import CollaboratorDetail from "@/components/CollaboratorDetail.vue";
import { useCollaboratorStore } from "@/stores/collaboratorsListStore";
import { useRoute, useRouter } from "vue-router";
import { computed, watchEffect } from "vue";
import type { Collaborator } from "@/types/collaborator";

// props may or may not be provided depending on how the user navigated
const props = defineProps<{ collaborator?: Collaborator }>();

const route = useRoute();
const router = useRouter();
const store = useCollaboratorStore();

// resolve the collaborator either from props or by looking up the id param/query
const resolved = computed<Collaborator | undefined>(() => {
  if (props.collaborator) return props.collaborator;
  const id = Number(route.params.id || route.query.id || "");
  return store.allCollaborators.find((c) => c.id === id);
});

// if none could be found, redirect back to the list after the current tick
watchEffect(() => {
  if (resolved.value === undefined) {
    router.replace({ name: "collaboratorsList" });
  }
});
</script>

<template>
  <div v-if="resolved">
    <CollaboratorDetail :collaborator="resolved" />
  </div>
  <div v-else class="text-center mt-8">
    <p>Collaborator not found.</p>
  </div>
</template>
