<template>
    <div class="section-box">
        <section class="section is-title-bar">
            <div class="level">
                <div class="level-left">
                    <ul>
                        <li v-for="t in route.meta.title">{{ t }}</li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="section is-main-section">
            <slot />
        </section>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>
