<script setup lang="ts">

const props = defineProps({
    collaborator: {
        type: Object,
        required: true
    }
});
</script>

<template>
    <v-card rounded="lg" class="mb-4 pa-4">
        <v-card-title>
            <v-avatar color="var(--neo-dark-blue)">
                <v-img v-if="collaborator.document.image" :src="'/img/' + collaborator.document.image"></v-img>
                <span v-else class="text-headline-small text-white">
                    {{ collaborator.name[0] }}{{ collaborator.surname[0] }}
                </span>
            </v-avatar>
            {{ collaborator.surname }}
        </v-card-title>
        <v-card-subtitle>{{ collaborator.seniority }}</v-card-subtitle>

        <v-list-item v-for="experience in collaborator.experiences">
            <v-card-title class="text-break text-pre-wrap">{{ experience.name }}</v-card-title>
            <v-card-text>{{ experience.description }}</v-card-text>
        </v-list-item>
    </v-card>
</template>

<style></style>