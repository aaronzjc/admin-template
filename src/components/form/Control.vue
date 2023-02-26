<template>
    <div :class="controlCls">
        <slot :class="fail ? 'is-danger' : ''"></slot>
        <Icon v-if="icon" :path="icon" size="24"></Icon>
        <p :class="['help', fail ? 'is-danger' : '']" v-if="help">
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
    icon: String, // 输入框图标
    fail: Boolean // 校验失败
})

const controlCls = computed(() => {
    let cls = 'control '
    cls += props.expanded ? 'is-expanded ' : ''
    cls += props.icon ? 'has-icons-left ' : ''
    return cls
})
</script>
