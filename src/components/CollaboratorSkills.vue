<script setup lang="ts">
import { Collaborator } from "@/types/collaborator";
import { PropType } from "vue";

const props = defineProps({
  collaborator: {
    type: Object as PropType<Collaborator>,
    required: true,
  },
  skillsNumber: {
    type: Number,
    required: true,
    default: 0,
  },
});

// 0 skillNumber means all the array
const skills =
  props.skillsNumber > 0
    ? props.collaborator.skills.slice(0, props.skillsNumber)
    : props.collaborator.skills;
</script>

<template>
  <div class="mt-4">
    <v-chip
      v-for="skill in skills"
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
    <v-chip
      v-if="skillsNumber > 0"
      :color="
        $vuetify.theme.current.dark
          ? 'var(--neo-light-blue)'
          : 'var(--neo-dark-blue)'
      "
      variant="outlined"
      class="mb-1 ms-1"
      >...
    </v-chip>
  </div>
</template>
