<script setup lang="ts">
import ScrollToTop from "./ScrollToTop.vue";
import CollaboratorAvatar from "./CollaboratorAvatar.vue";
import { Collaborator } from "@/types/collaborator";
import { PropType } from "vue";
import CollaboratorSkills from "./CollaboratorSkills.vue";
import CollaboratorJobTitle from "./CollaboratorJobTitle.vue";

defineProps({
  collaborator: {
    type: Object as PropType<Collaborator>,
    required: true,
  },
});
</script>

<template>
  <v-btn prepend-icon="$arrowLeft" @click="$router.back()" variant="text"
    >Retour</v-btn
  >

  <h3>
    <CollaboratorAvatar :collaborator />
  </h3>

  <CollaboratorJobTitle :jobTitle="collaborator.jobTitle" />

  <CollaboratorSkills :collaborator />

  <v-btn
    class="text-white text-decoration-none mt-8"
    href="mailto:commercial@neosoft.fr"
    block
  >
    Contacter Néosoft
  </v-btn>

  <p class="font-weight-semibold text-title-medium">Résumé :</p>
  <v-card-text class="card-content">{{ collaborator.highlight }}</v-card-text>

  <p class="font-weight-semibold text-title-medium">Expériences :</p>
  <v-list-item
    v-for="experience in collaborator.experiences"
    :key="experience.name"
    class="pa-0"
  >
    <h3 class="text-break text-pre-wrap font-weight-semibold">
      {{ experience.name }}
    </h3>
    <p>{{ experience.description }}</p>
  </v-list-item>
  <ScrollToTop></ScrollToTop>
</template>

<style scoped>
h3 {
  font-weight: 500;
}
</style>
