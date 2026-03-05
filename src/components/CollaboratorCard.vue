<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
    profile: {
        type: Object,
        required: true
    },
});

const collaborator = props.profile.collaborator;
console.log(collaborator);

const show = ref(false);

</script>

<template>
    <v-card rounded="lg" class="mb-4 pa-4">
        <v-card-title>
            <v-avatar color="var(--neo-dark-blue)">
                <span class="text-headline-small text-white">{{ collaborator.name[0] }}</span>
            </v-avatar>
            {{ collaborator.name }}
        </v-card-title>
        <v-card-subtitle>{{ collaborator.title }}</v-card-subtitle>

        <v-card-text>{{ collaborator.highlight }}</v-card-text>

        <v-chip v-for="skill in collaborator.skills" :skill :key="skill.id" color="var(--neo-dark-blue)" variant="flat">
            {{ skill }}
        </v-chip>

        <v-card-actions>
            <v-btn text="Voir plus" color="var(--neo-medium-blue)"></v-btn>
            <v-spacer></v-spacer>
            <v-btn :icon="show ? '$chevronUp' : '$chevronRight'" @click="show = !show"></v-btn>
        </v-card-actions>

        <v-expand-transition>
            <div v-show="show">
                <v-divider></v-divider>
                <v-card-text>

                </v-card-text>
            </div>
        </v-expand-transition>
    </v-card>
</template>

<style>
.title-font {
    font-family: "Chillax Bold", "Arial", sans-serif;
}

.card {
    background: var(--neo-dark-blue);
    border-radius: 16px;
    border: 1px solid #fff;
    color: #fff;
    padding: 2.4rem 1.2rem;
}

.actions {
    color: var(--neo-dark-blue);
    display: flex;
    justify-content: space-around;
    margin-top: 1rem;
}
</style>