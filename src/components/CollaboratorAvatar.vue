<script setup lang="ts">
import { computed, PropType } from "vue";
import { Collaborator } from "@/types/collaborator";

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
  hasImage.value ? `/img/${props.collaborator.document.image}` : "",
);
const initials = computed(() => {
  const { name, surname } = props.collaborator;
  return `${name?.[0] ?? ""}${surname?.[0] ?? ""}`.toUpperCase();
});

const statusIcon = computed(() =>
  props.collaborator.isAvailable ? "$calendarCheck" : "$calendarRemove",
);
</script>

<template>
  <v-avatar
    :color="'var(--neo-dark-blue)'"
    :size="size"
    :badge="{ color: collaborator.isAvailable ? 'green' : 'red' }"
  >
    <template v-slot:badge>
      <v-icon :icon="statusIcon" />
    </template>

    <v-img v-if="hasImage" :src="imageUrl" />
    <span v-else class="text-headline-small text-white">{{ initials }}</span>
  </v-avatar>
  {{ collaborator.surname }}
</template>
