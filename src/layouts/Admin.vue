<template>
    <div class="container-box">
        <div
            :class="[
                'content-box has-aside-left has-aside-mobile-transition has-navbar-fixed-top has-aside-expanded',
                { 'has-aside-mobile-expanded': styleStore.isAsideMobileOpen }
            ]"
        >
            <Menu></Menu>

            <RouterView v-slot="{ Component, route }">
                <Transition name="page">
                    <KeepAlive>
                        <component :is="Component" :key="route.path" />
                    </KeepAlive>
                </Transition>
            </RouterView>
        </div>
    </div>
</template>

<script setup>
import Menu from '@/components/Menu.vue'

import { useStyleStore } from '@/stores/style.js'

const styleStore = useStyleStore()
</script>
