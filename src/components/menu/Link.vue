<template>
    <a
        :class="[
            { 'is-active': active },
            { 'has-icon has-dropdown-icon': dropdown }
        ]"
    >
        <Icon v-if="icon" :path="icon"></Icon>
        <span class="menu-item-label">{{ title }}</span>
        <div v-if="dropdown" class="dropdown-icon">
            <Icon :path="active ? mdiMinus : mdiPlus"></Icon>
        </div>
    </a>
</template>
<script setup>
import { mdiPlus, mdiMinus } from '@mdi/js'
import Icon from '@/components/Icon.vue'

defineProps({
    title: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        required: true
    },
    icon: String,
    dropdown: Boolean
})
</script>
