<template>
    <div class="is-divider">{{ props.title }}</div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        default: 'OR'
    }
})
</script>
