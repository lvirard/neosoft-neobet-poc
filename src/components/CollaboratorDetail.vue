<script setup lang="ts">
import { useDate } from "vuetify";
import ScrollToTop from "./ScrollToTop.vue";
import CollaboratorAvatar from "./CollaboratorAvatar.vue";
import { Collaborator } from "@/types/collaborator";
import { PropType } from "vue";
import CollaboratorSkills from "./CollaboratorSkills.vue";

const props = defineProps({
  collaborator: {
    type: Object as PropType<Collaborator>,
    required: true,
  },
});

const date = useDate();
const dateFormatted = date.format(props.collaborator.startAvailability, "fullDate");
</script>

<template>
  <h3>
    <CollaboratorAvatar :collaborator />
  </h3>
  <span class="text-grey">
    <v-icon icon="$location"></v-icon> {{ collaborator.office.name }} -
    {{ collaborator.seniority }}
    <br />
    <span v-if="!collaborator.isAvailable">
      Disponible à partir du {{ dateFormatted }}
    </span>
    <span v-else>Disponible immédiatement</span>
  </span>

  <CollaboratorSkills :collaborator />

  <p>Résumé :</p>
  <v-card-text class="card-content">{{ collaborator.highlight }}</v-card-text>

  <p>Expériences :</p>
  <v-list-item
    v-for="experience in collaborator.experiences"
    :key="experience.name"
    class="pa-0"
  >
    <h3 class="text-break text-pre-wrap font-weight-bold">
      {{ experience.name }}
    </h3>
    <p>{{ experience.description }}</p>
  </v-list-item>
  <v-btn @click="$router.back()" block>Retour</v-btn>
  <v-fab app prepend-icon="$phone" class="mb-16">
    <a class="text-white text-decoration-none" href="tel:0647237948">
      Contacter le commercial
    </a>
  </v-fab>
  <ScrollToTop></ScrollToTop>
</template>

<style scoped>
h3 {
  font-weight: 500;
}
</style>
