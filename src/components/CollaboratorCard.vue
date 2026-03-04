<script setup>
import { Collaborator } from '@/models/Collaborator';

defineProps({
    collaborator: {
        type: Collaborator,
        required: true
    },
})
</script>

<template>
    <div class="card">
        <div>Nom : {{ collaborator.name }}</div>
        <div>Métier : {{ collaborator.métier }}</div>
        <div>Compétences :
            <ul>
                <li v-if="collaborator.compétences.dev.length > 0">
                    Dev : <span v-for="element in collaborator.compétences.dev" :key="element.id">{{ element + " "}}</span> 
                </li>
                <li v-if="collaborator.compétences.ops.length > 0">
                    Ops : <span v-for="element in collaborator.compétences.ops" :key="element.id">{{ element + " "}}</span> 
                </li>
                <li v-if="collaborator.compétences.sec.length > 0">
                    Sec : <span v-for="element in collaborator.compétences.sec" :key="element.id">{{ element + " "}}</span> 
                </li>
            </ul>
        </div>
        <div class="actions">
            <div class="refuse candidate">
                <v-btn rounded="xl">
                    <v-icon icon="$close"></v-icon>
                </v-btn>
            </div>
            <div class="validateCandidate">
                <v-btn rounded="xl">
                    <v-icon icon="$handshake"></v-icon>
                </v-btn>
            </div>
        </div>
    </div>
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