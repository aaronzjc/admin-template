<script setup>
import { computed } from 'vue'

const props = defineProps({
    path: {
        type: String,
        required: true
    },
    w: {
        type: String,
        default: 'w-6'
    },
    h: {
        type: String,
        default: 'h-6'
    },
    size: {
        type: [String, Number],
        default: null
    },
    left: {
        type: Boolean,
        default: true
    }
})

const iconSize = computed(() => props.size ?? 16)
</script>

<template>
    <span :class="['icon', { 'is-left': left }]">
        <svg
            viewBox="0 0 24 24"
            :width="iconSize"
            :height="iconSize"
            class="inline-block"
        >
            <path fill="currentColor" :d="path" />
        </svg>
        <slot />
    </span>
</template>
