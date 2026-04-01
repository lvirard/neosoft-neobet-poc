<script setup lang="ts">
import logo from "@/assets/logo-neosoft-white.svg";
import { computed, ref } from "vue";
import NavDrawer from "@/components/layout/NavDrawer.vue";
import { getNavigationItems } from "@/data/navigation";

const drawer = ref(false);

//todo: à remplacer par système d'auth dès qu'il est en place
const isLoggedIn = ref(true);
const navigationItems = computed(() => getNavigationItems(isLoggedIn.value));
</script>

<template>
  <v-app-bar class="banner title-font">
    <v-toolbar-title class="d-flex align-center">
      <router-link
        :to="{ name: 'home' }"
        class="d-flex align-center text-decoration-none"
      >
        <span class="title-text text-white">NéoBet by</span>
        <img :src="logo" alt="logo" class="nav-logo" />
      </router-link>
    </v-toolbar-title>

    <!-- Desktop categories -->
    <div class="d-none d-lg-flex align-center ga-4 nav-items">
      <router-link
        v-for="item in navigationItems"
        :key="item.title"
        :to="item.to"
        class="d-flex align-center ga-2 text-white"
      >
        <v-icon :icon="item.icon" />
        <span>{{ item.title }}</span>
      </router-link>
    </div>

    <!-- Mobile burger -->
    <v-btn icon class="d-lg-none" @click="drawer = !drawer">
      <v-icon color="white" icon="$menu" />
    </v-btn>
  </v-app-bar>
  <NavDrawer v-model="drawer" />
</template>

<style scoped>
.banner {
  color: white;
  background-color: var(--neo-dark-blue);
}

.title-font {
  font-family: "Chillax Medium", "Arial", sans-serif;
}

.nav-logo {
  height: 14px;
}

.title-text {
  margin-left: 0;
  margin-right: 0.5rem;
  font-size: 0.9rem;
}

/* Desktop */
@media (min-width: 768px) {
  .title-text {
    margin-left: 1rem;
    font-size: 1.1rem;
  }

  .nav-logo {
    height: 20px;
  }

  .nav-items {
    margin-right: 1rem;
  }
}
</style>
