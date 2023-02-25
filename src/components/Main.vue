<template>
    <section class="section is-title-bar">
        <div class="level">
            <div class="level-left">
                <div class="level-item">
                    <ul>
                        <li v-for="t in title">{{ t }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <section class="section is-main-section">
        <slot />
    </section>
</template>

<script setup>
defineProps({
    title: Array
})
</script>
