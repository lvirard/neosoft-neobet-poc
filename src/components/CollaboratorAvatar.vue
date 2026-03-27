<script setup lang="ts">
import { computed, PropType } from "vue";
import { Collaborator } from "@/types/collaborator";
import { useCollaboratorDate } from "@/composables/useCollaboratorDate";
import { useCollaboratorStore } from "@/stores/collaboratorsListStore";

const props = defineProps({
  collaborator: {
    type: Object as PropType<Collaborator>,
    required: true,
  },
  size: {
    type: [String, Number],
    default: 56,
  },
});

const hasImage = computed(() => !!props.collaborator.document?.image);
const imageUrl = computed(() =>
  hasImage.value ? `/img/${props.collaborator.document.image}` : ""
);
const initials = computed(() => {
  const { name, surname } = props.collaborator;
  return `${name?.[0] ?? ""}${surname?.[0] ?? ""}`.toUpperCase();
});

const statusIcon = computed(() =>
  props.collaborator.isAvailable ? "$calendarCheck" : "$calendarRemove"
);

const { getMonthsToAvailability } = useCollaboratorDate();
const dateFormatted = getMonthsToAvailability(props.collaborator.startAvailability);

const collaboratorStore = useCollaboratorStore();

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
</script>

<template>
  <v-row gap="0">
    <v-col cols="3">
      <v-avatar
        :color="'var(--neo-dark-blue)'"
        :size="size"
      >
        <template v-slot:badge>
          <v-icon :icon="statusIcon" />
        </template>

        <v-img v-if="hasImage" :src="imageUrl" />
        <span v-else class="text-headline-small text-white">{{ initials }}</span>
      </v-avatar>
    </v-col>
    <v-col cols="8">
      {{ collaborator.surname }}
      <br />
      <span class="text-grey">
        <v-icon icon="$location"></v-icon> {{ collaborator.office.name }}
      </span>
      <br />
      <v-chip variant="outlined" color="orange" v-if="!collaborator.isAvailable">
        Disponible dans {{ dateFormatted }}
      </v-chip>
      <v-chip variant="outlined" color="success" v-else>Disponible</v-chip>
    </v-col>
    <v-col cols="1">
      <v-btn icon="" variant="text" @click.prevent="toggleStar" class="align-center">
        <v-icon :icon="isStarred ? '$star' : '$starOutline'" />
      </v-btn>
    </v-col>
  </v-row>
</template>
