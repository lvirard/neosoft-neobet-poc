<script setup>
defineProps({
    title: {
        type: String,
        required: true,
    },
})
</script>

<template>
    <button class="neo" :title="title">{{ title }}</button>
</template>

<style>
.neo {
    background-color: var(--neo-medium-blue);
    color: white;
    height: 50px;
    width: 100px;
    border: white;
    border-radius: 25px;
    cursor: pointer;
}
</style>