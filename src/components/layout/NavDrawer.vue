<script setup lang="ts">
import { computed, ref } from "vue";
import { getNavigationItems } from "@/data/navigation";

const props = defineProps<{
  modelValue: boolean;
}>();

const emit = defineEmits(["update:modelValue"]);

//todo: à remplacer par système d'auth dès qu'il est en place
const isLoggedIn = ref(true);
const navigationItems = computed(() => getNavigationItems(isLoggedIn.value));

const close = () => emit("update:modelValue", false);
</script>

<template>
  <v-navigation-drawer
    :model-value="modelValue"
    @update:model-value="emit('update:modelValue', $event)"
    temporary
  >
    <v-list>
      <v-list-item
        v-for="item in navigationItems"
        :key="item.title"
        :to="item.to"
        link
      >
        <template #prepend>
          <v-icon :icon="item.icon" />
        </template>
        <v-list-item-title>
          {{ item.title }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
