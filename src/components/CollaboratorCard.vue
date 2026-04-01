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

const { getCollaboratorDetailRoute, goToCollaboratorDetail } =
  useCollaboratorNavigation();

// function goToDetail() {
//   goToCollaboratorDetail(props.collaborator);
// }
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

    <!-- <v-card-actions class="card-footer justify-center">
      <v-btn
        variant="flat"
        rounded="xl"
        class="text-white w-100"
        @click="goToDetail"
      >
        <template v-slot:prepend><v-icon icon="$magnify"></v-icon> </template>
        Voir plus
      </v-btn>
    </v-card-actions> -->
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
