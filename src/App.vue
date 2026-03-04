<script setup>
import {ref} from 'vue'
import CollaboratorCard from './components/CollaboratorCard.vue'
import NeoButton from './components/NeoButton.vue'
import logo from './assets/logo-neosoft-white.svg'
import {collaborators} from './assets/data.js'
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
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>
    </v-app-bar>
    
    <v-main>
      <v-card rounded="xl">
        <v-avatar color="var(--neo-dark-blue)">
          <v-icon icon="$account"></v-icon>
        </v-avatar>
        <v-card-title>Yves</v-card-title>
        <v-card-subtitle>Developpeur FullStack</v-card-subtitle>      
        <v-chip color="var(--neo-dark-blue)">PHP</v-chip>
        <v-chip color="var(--neo-medium-blue)">Javascript</v-chip>
        <v-chip color="var(--neo-light-blue)">CSS</v-chip>
        <v-chip color="var(--neo-dark-blue)" variant="flat">Python</v-chip>
        <v-chip color="var(--neo-medium-blue)" variant="flat">Typescript</v-chip>
        <v-chip color="var(--neo-light-blue)" variant="flat">HTML</v-chip>
        <v-chip-group>
          <v-chip color="var(--neo-dark-blue)">PHP</v-chip>
          <v-chip color="var(--neo-medium-blue)">Javascript</v-chip>
          <v-chip color="var(--neo-light-blue)">CSS</v-chip>
        </v-chip-group>
        <v-chip-group>
          <v-chip color="var(--neo-dark-blue)" variant="flat">Python</v-chip>
          <v-chip color="var(--neo-medium-blue)" variant="flat">Typescript</v-chip>
          <v-chip color="var(--neo-light-blue)" variant="flat">HTML</v-chip>
        </v-chip-group>
        <v-card-actions>
          <v-btn text="Voir plus" color="var(--neo-medium-blue)"></v-btn>
          <v-spacer></v-spacer>
          <v-btn :icon="show ? '$chevronUp' : '$chevronDown'"
          @click="show = !show"></v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>
            <v-card-text>
              Expérience de malade de ouf
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>

      <CollaboratorCard v-for="collaborator in collaborators" :collaborator :key="collaborator.id" />
      <NeoButton title="clic" />
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
