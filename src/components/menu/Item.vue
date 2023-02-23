<template>
    <li :class="{ 'is-active': _menu.active }">
        <Link :menu="_menu" @click="menuClick(_menu)">
        </Link>

        <ul v-if="_menu.children">
            <li v-for="subMenu in _menu.children">
                <Link :menu="subMenu" @click="menuClick(subMenu)">
                </Link>
            </li>
        </ul>
    </li>
</template>

<script setup>
import { watch, reactive,onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Link from '@/components/menu/Link.vue';

const props = defineProps({
    menu: {
        type: Object,
        required: true
    }
})

const _menu = reactive(props.menu)

const router = useRouter()
const route = useRoute()

function menuClick(menu) {
    if (menu.route) {
        menu.active = true
        if (menu.route != route.name) {
            router.push({ name: menu.route })
        }
        return
    }
    menu.active = !menu.active
}

function activeMenu() {
    if (_menu.route) {
        _menu.active = _menu.route == route.name || _menu.route == route.meta.hl
        return
    }
    let got = false
    for (let i = 0; i < _menu.children.length; i++) {
        const sub = _menu.children[i]
        sub.active = sub.route == route.name || sub.route == route.meta.hl
        if (sub.active) {
            got = true
        }
    }
    _menu.active = got
}

watch(() => route.name, activeMenu)
onMounted(activeMenu)
</script>