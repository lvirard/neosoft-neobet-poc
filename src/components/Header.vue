<script setup lang="ts">
import logo from '@/assets/logo-neosoft-white.svg';
</script>

<template>
    <v-app-bar class="banner title-font">
        <v-toolbar-title class="d-flex align-center">
          <router-link 
            :to="{ name: 'home' }"
            class="d-flex align-center text-decoration-none"
          >
            <span class="title-text text-white">NeoBet by</span>
            <img :src="logo" alt="logo" class="nav-logo" />
          </router-link>
        </v-toolbar-title>
        <template v-slot:append>
            <v-app-bar-nav-icon color="white"></v-app-bar-nav-icon>
        </template>
    </v-app-bar>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.banner {
  color: white;
  background-color: var(--neo-dark-blue);
}

.title-font {
    font-family: "Chillax Medium", "Arial", sans-serif;
}

.top-header {
  background-color: var(--neo-dark-blue);
  display: flex;
}

.nav-logo {
  display: inline-block;
  height: 20px;
}

.title-text {
  margin: 0 .5rem 0 1rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>