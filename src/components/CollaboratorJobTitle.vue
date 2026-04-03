<script setup lang="ts">
defineProps({
  jobTitle: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <span class="font-weight-semibold text-title-medium">{{ jobTitle }}</span>
</template>
