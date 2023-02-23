<template>
<a :class="[ {'is-active' : menu.active}, {'has-icon has-dropdown-icon':menu.children} ]">
    <Icon v-if="menu.icon" :path="menu.icon"></Icon>
    <span class="menu-item-label">{{ menu.title }}</span>
    <div v-if="menu.children" class="dropdown-icon">
        <Icon :path="menu.active ? mdiMinus : mdiPlus"></Icon>
    </div>
</a>
</template>
<script setup>
import { mdiPlus, mdiMinus } from '@mdi/js';
import Icon from '@/components/Icon.vue';

defineProps({
    menu: {
        type: Object,
        required: true
    },
})
</script>