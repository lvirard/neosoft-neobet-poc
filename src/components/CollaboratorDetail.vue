<script setup lang="ts">
import { useGoTo, useDate } from "vuetify";
import { shallowRef } from "vue";

const props = defineProps({
  collaborator: {
    type: Object,
    required: true,
  },
});

const goTo = useGoTo({ layout: true });
const date = useDate();
const dateFormatted = date.format(
  props.collaborator.startAvailability,
  "fullDate",
);
const model = shallowRef(false);

function onScroll() {
  model.value = window.scrollY > 200;
}
</script>

<template>
  <h3>
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
        :src="'/img/' + collaborator.document.image"
      ></v-img>
      <span v-else class="text-headline-small text-white">
        {{ collaborator.name[0] }}{{ collaborator.surname[0] }}
      </span>
    </v-avatar>
    {{ collaborator.surname }}
  </h3>
  <span class="text-grey">
    <v-icon icon="$location"></v-icon> {{ collaborator.office.name }} -
    {{ collaborator.seniority }}
    <br />
    <span v-if="!collaborator.isAvailable"
      >Disponible à partir du {{ dateFormatted }}</span>
    <span v-else>Disponilbe immédiatement</span>  
  </span>
  <div class="mt-4">
    <p>Compétences :</p>
    <v-chip
      v-for="skill in collaborator.skills"
      :skill
      :key="skill"
      :color="
        $vuetify.theme.current.dark
          ? 'var(--neo-light-blue)'
          : 'var(--neo-dark-blue)'
      "
      variant="outlined"
      class="mb-1 ms-1"
    >
      {{ skill }}
    </v-chip>
  </div>

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
  <v-fab
    v-model="model"
    app
    icon="$chevronUp"
    @click="goTo(0)"
    v-scroll="onScroll"
  ></v-fab>
</template>

<style scoped>
h3 {
  font-weight: 500;
}
</style>
