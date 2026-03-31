<script setup lang="ts">
import Header from "@/components/layout/SiteHeader.vue";
</script>

<template>
  <v-app>
    <Header />
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>
