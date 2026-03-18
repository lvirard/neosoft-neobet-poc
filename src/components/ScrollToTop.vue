<script setup lang="ts">
import { shallowRef } from "vue";
import { useGoTo } from "vuetify";

const model = shallowRef(false);
const goTo = useGoTo({ layout: true });

function onScroll() {
  model.value = window.scrollY > 200;
}
</script>

<template>
  <v-fab
    v-model="model"
    app
    icon="$chevronUp"
    @click="goTo(0)"
    v-scroll="onScroll"
  ></v-fab>
</template>
