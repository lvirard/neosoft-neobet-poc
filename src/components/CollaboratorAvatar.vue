<script setup lang="ts">
import { computed, PropType } from "vue";
import { Collaborator } from "@/types/collaborator";
// import { useCollaboratorDate } from "@/composables/useCollaboratorDate";
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
  hasImage.value ? `${import.meta.env.BASE_URL}img/${props.collaborator.document.image}` : ""
);
const initials = computed(() => {
  const { name, surname } = props.collaborator;
  return `${name?.[0] ?? ""}${surname?.[0] ?? ""}`.toUpperCase();
});

const collaboratorStore = useCollaboratorStore();

const isStarred = computed(() =>
  collaboratorStore.favoriteCollaborators.some((c) => c.id === props.collaborator.id)
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
  <div class="d-flex">
    <div class="my-auto">
      <v-avatar :color="'var(--neo-dark-blue)'" :size="size" class="avatar">
        <v-img v-if="hasImage" :src="imageUrl" />
        <span v-else class="text-headline-small text-white">{{ initials }}</span>
      </v-avatar>
    </div>
    <div class="ma-2 me-auto">
      <div class="name">
        {{ collaborator.surname }}
      </div>

      <div class="location">
        <v-icon size="14" class="mr-1">$location</v-icon>
        {{ collaborator.office.name }}
      </div>

      <div class="chips">
        <v-chip
          size="small"
          variant="outlined"
          class="chip"
          color="orange"
          v-if="collaborator.availability === 'soon'"
        >
          Bientôt disponible
        </v-chip>
        <v-chip
          size="small"
          variant="outlined"
          class="chip"
          color="success"
          v-else-if="collaborator.availability === 'immediate'"
        >
          Disponible
        </v-chip>
        <v-chip size="small" variant="outlined" class="chip" color="error" v-else>
          Indisponible
        </v-chip>
      </div>
    </div>

    <div class="ma-2 pa-2">
      <v-btn variant="text" @click.prevent="toggleStar" class="like">
        <v-icon :icon="isStarred ? '$heart' : '$heartOutline'" />
      </v-btn>
    </div>
  </div>
</template>

<style>
.avatar {
  font-weight: 600;
  font-size: 16px;
}

.name {
  font-size: 16px;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 2px;
}

.location {
  font-size: 13px;
  color: #9e9e9e;
  display: flex;
  align-items: center;
  gap: 4px;
}

.chip {
  font-size: 12px;
  height: 24px;
  margin-right: 4px;
  margin-top: 4px;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 4px;
}

.like {
  min-width: 0;
  padding: 0;
}
</style>
