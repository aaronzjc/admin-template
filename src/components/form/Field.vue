<template>
    <div :class="['field', { 'is-horizontal': props.horizontal }]">
        <div :class="['field-label', normal ? 'is-normal' : '']">
            <label class="label">{{ props.label }}</label>
        </div>
        <div class="field-body">
            <div :class="['field', group ? 'is-grouped' : '']">
                <slot />
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    label: String,
    horizontal: {
        type: Boolean,
        default: true
    },
    group: {
        type: Boolean,
        default: false
    },
    normal: {
        type: Boolean,
        default: true
    }
})
</script>
