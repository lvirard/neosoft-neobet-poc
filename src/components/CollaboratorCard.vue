<script setup lang="ts">
import { computed, PropType } from "vue";
import { useCollaboratorStore } from "@/stores/collaboratorsListStore";
import { Collaborator } from "@/types/collaborator";
import CollaboratorAvatar from "@/components/CollaboratorAvatar.vue";
import CollaboratorSkills from "./CollaboratorSkills.vue";
import { useCollaboratorNavigation } from "@/composables/useCollaboratorNavigation";
import { useCollaboratorDate } from "@/composables/useCollaboratorDate";

const props = defineProps({
  collaborator: {
    type: Object as PropType<Collaborator>,
    required: true,
  },
});

const collaboratorStore = useCollaboratorStore();
const { getCollaboratorDetailRoute, goToCollaboratorDetail } =
  useCollaboratorNavigation();

const { formatAvailabilityDate } = useCollaboratorDate();
const dateFormatted = formatAvailabilityDate(
  props.collaborator.startAvailability,
);

const isStarred = computed(() =>
  collaboratorStore.favoriteCollaborators.some(
    (c) => c.id === props.collaborator.id,
  ),
);

function toggleStar() {
  if (isStarred.value) {
    collaboratorStore.removeFromFavorites(props.collaborator);
  } else {
    collaboratorStore.addToFavorites(props.collaborator);
  }
}

function goToDetail() {
  goToCollaboratorDetail(props.collaborator);
}
</script>

<template>
  <v-card
    rounded="lg"
    class="collaborator-card h-100"
    :to="getCollaboratorDetailRoute(collaborator)"
  >
    <v-card-title>
      <CollaboratorAvatar :collaborator="collaborator" />
      <v-btn icon="" variant="text" @click="toggleStar">
        <v-icon :icon="isStarred ? '$star' : '$starOutline'" />
      </v-btn>
    </v-card-title>
    <v-card-subtitle>{{ collaborator.title }}</v-card-subtitle>

    <v-card-subtitle>
      <v-icon icon="$location"></v-icon>
      {{ collaborator.office.name }} -
      <span v-if="!collaborator.isAvailable">
        Disponible à partir du {{ dateFormatted }}
      </span>
      <span v-else>Disponible immédiatement</span>
    </v-card-subtitle>

    <CollaboratorSkills :collaborator :skills-number="3" />

    <v-card-actions class="card-footer justify-center">
      <v-btn
        variant="flat"
        rounded="xl"
        class="text-white w-100"
        @click="goToDetail"
      >
        <template v-slot:prepend><v-icon icon="$magnify"></v-icon> </template>
        Voir plus
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style>
.title-font {
  font-family: "Chillax Bold", "Arial", sans-serif;
}

.card {
  background: var(--neo-dark-blue);
  border-radius: 16px;
  border: 1px solid #fff;
  color: #fff;
  padding: 2.4rem 1.2rem;
}

.actions {
  color: var(--neo-dark-blue);
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
}
.collaborator-card {
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

.collaborator-card .v-card-text.card-content {
  flex: 1;
}

.collaborator-card .v-card-actions.card-footer {
  margin-top: auto;
}
</style>
