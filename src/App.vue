<script setup lang="ts">
import {ref} from 'vue'
import CollaboratorCard from './components/CollaboratorCard.vue'
import NeoButton from './components/NeoButton.vue'
import logo from './assets/logo-neosoft-white.svg'
import {collaborators} from './assets/data.js'
import CollaboratorsListView from './views/CollaboratorsListView.vue'
import profiles from './assets/data.json';

const show = ref(false)
</script>

<template>
  <v-app>
    <v-app-bar class="banner title-font">
      <v-toolbar-title class="d-flex align-center">
        <span class="title-text">NeoBet by</span>
        <img :src="logo" alt="logo" class="nav-logo" />
      </v-toolbar-title>
      <template v-slot:append>
        <v-app-bar-nav-icon color="white"></v-app-bar-nav-icon>
      </template>
    </v-app-bar>
    
    <v-main>
      <CollaboratorCard v-for="profile in profiles" :profile :key="profile.collaborator.name" />
    </v-main>
  </v-app>
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
