<script setup lang="ts">
import { PropType } from "vue";
import { Collaborator } from "@/types/collaborator";
import CollaboratorAvatar from "@/components/CollaboratorAvatar.vue";
import CollaboratorSkills from "./CollaboratorSkills.vue";
import { useCollaboratorNavigation } from "@/composables/useCollaboratorNavigation";

const props = defineProps({
  collaborator: {
    type: Object as PropType<Collaborator>,
    required: true,
  },
});

const { getCollaboratorDetailRoute } =
  useCollaboratorNavigation();
</script>

<template>
  <v-card
    rounded="lg"
    class="collaborator-card h-100"
    :to="getCollaboratorDetailRoute(collaborator)"
  >
    <v-card-title>
      <CollaboratorAvatar :collaborator="collaborator" />
    </v-card-title>
    <v-card-subtitle>{{ collaborator.title }}</v-card-subtitle>

    <v-card-item>
      <CollaboratorSkills :collaborator :skills-number="3" />
    </v-card-item>
  </v-card>
</template>

<style>

.collaborator-card {
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
}

.collaborator-card .v-card-text.card-content {
  flex: 1;
}

.collaborator-card .v-card-actions.card-footer {
  margin-top: auto;
}
</style>
