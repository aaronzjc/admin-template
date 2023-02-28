<template>
    <div :class="controlCls">
        <slot :class="fail ? 'is-danger' : ''"></slot>
        <Icon v-if="icon" :path="icon" size="16"></Icon>
        <p :class="['help is-danger']" v-if="help">
            {{ help }}
        </p>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import Icon from '@/components/Icon.vue'
const props = defineProps({
    expanded: Boolean,
    help: String, // 提示文字
    icon: String // 输入框图标
})

const controlCls = computed(() => {
    let cls = 'control '
    cls += props.expanded ? 'is-expanded ' : ''
    cls += props.icon ? 'has-icons-left ' : ''
    return cls
})
</script>
