<script setup lang="ts">
defineProps({
  collaborator: {
    type: Object,
    required: true,
  },
});
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
  </span>

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
  <v-btn @click="$router.back()">Retour</v-btn>
  <v-fab app>
    <template v-slot:prepend>
      <v-icon icon="$phone"></v-icon>
    </template>
    <a class="text-white text-decoration-none" href="tel:0647237948"
      >Contacter le commercial</a
    >
  </v-fab>
</template>

<style scoped>
h3 {
  font-weight: 500;
}
</style>
