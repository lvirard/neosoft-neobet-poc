<script setup lang="ts">
import { computed, PropType } from "vue";
import { useRouter } from "vue-router";
import { useCollaboratorStore} from "@/stores/collaboratorsListStore";
import { Collaborator } from "@/types/collaborator";

const props = defineProps({
  collaborator: {
    type: Object as PropType<Collaborator>,
    required: true,
  },
});

const imgPath = (img: string) => `${import.meta.env.BASE_URL}img/${img}`

const router = useRouter();
const collaboratorStore = useCollaboratorStore();
const isStarred = computed(() =>
  collaboratorStore.favoriteCollaborators.some(
    c => c.id === props.collaborator.id
  )
);

function toggleStar() {
  if (isStarred.value) {
    collaboratorStore.removeFromFavorites(props.collaborator)
  } else {
    collaboratorStore.addToFavorites(props.collaborator)
  }
}

function goToDetail() {
  router.push({
    path: "detail/" + props.collaborator.name,
  });
}
</script>

<template>
  <v-card rounded="lg" class="mb-4 pa-4">
    <v-card-title>
      <v-avatar
        color="var(--neo-dark-blue)"
        :badge="{ color: collaborator.isAvailable ? 'green' : 'red' }"
      >
        <template v-slot:badge>
          <v-icon
            :icon="
              collaborator.isAvailable ? '$calendarCheck' : '$calendarRemove'
            "
          ></v-icon>
        </template>
        <v-img
          v-if="collaborator.document.image"
          :src="imgPath(collaborator.document.image)"
        ></v-img>
        <span v-else class="text-headline-small text-white">
          {{ collaborator.name[0] }}{{ collaborator.surname[0] }}
        </span>
      </v-avatar>
      {{ collaborator.surname }}

      <v-btn icon="" variant="text" @click="toggleStar">
        <v-icon :icon="isStarred ? '$star' : '$starOutline'" />
      </v-btn>
    </v-card-title>
    <v-card-subtitle>{{ collaborator.title }}</v-card-subtitle>

    <v-card-subtitle>
      <v-icon icon="$location"></v-icon>
      {{ collaborator.office.name }} -
      {{ collaborator.isAvailable ? "Disponible" : "Indisponible" }}
    </v-card-subtitle>

    <v-card-text>{{ collaborator.highlight }}</v-card-text>

    <v-chip
      v-for="skill in collaborator.skills"
      :skill
      :key="skill"
      :color="$vuetify.theme.current.dark ? 'var(--neo-light-blue)' : 'var(--neo-dark-blue)'"
      variant="outlined"
      class="mb-1 ms-1"
    >
      {{ skill }}
    </v-chip>

    <v-card-actions class="justify-center">
      <v-btn variant="flat" rounded="xl" class="text-white w-100" @click="goToDetail">
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
</style>
