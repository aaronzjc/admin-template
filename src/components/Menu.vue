<template>
    <nav id="navbar-main" class="navbar is-fixed-top">
        <div class="navbar-brand">
            <a
                class="navbar-item is-hidden-desktop jb-aside-mobile-toggle"
                @click="styleStore.toggleAside()"
            >
                <BasicIcon
                    :name="
                        styleStore.isAsideMobileOpen
                            ? mdiBackburger
                            : mdiForwardburger
                    "
                    :size="24"
                ></BasicIcon>
            </a>
            <div class="navbar-item has-control">
                <div class="control"></div>
            </div>
        </div>
        <div class="navbar-brand is-right">
            <a
                class="navbar-item is-hidden-desktop jb-navbar-menu-toggle"
                data-target="navbar-menu"
                @click="styleStore.toggleNav()"
            >
                <BasicIcon :name="mdiDotsVertical"></BasicIcon>
            </a>
        </div>
        <div
            :class="[
                'navbar-menu fadeIn animated faster',
                { 'is-active': styleStore.isNavMobileOpen }
            ]"
            id="navbar-menu"
        >
            <div class="navbar-end">
                <div
                    class="navbar-item has-dropdown has-dropdown-with-icons has-divider has-user-avatar is-hoverable"
                >
                    <a class="navbar-link is-arrowless">
                        <div class="is-user-avatar">
                            <img
                                :src="mainStore.userInfo.avatar"
                                :alt="mainStore.userInfo.username"
                            />
                        </div>
                        <div class="is-user-name">
                            <span>{{ mainStore.userInfo.username }}</span>
                        </div>
                        <BasicIcon :name="mdiChevronDown"></BasicIcon>
                    </a>
                    <div class="navbar-dropdown">
                        <a href="#" class="navbar-item">
                            <span class="icon"
                                ><i class="mdi mdi-account"></i
                            ></span>
                            <span>个人资料</span>
                        </a>
                        <a class="navbar-item">
                            <span class="icon"
                                ><i class="mdi mdi-settings"></i
                            ></span>
                            <span>系统设置</span>
                        </a>
                        <hr class="navbar-divider" />
                        <a class="navbar-item">
                            <span class="icon"
                                ><i class="mdi mdi-logout"></i
                            ></span>
                            <span>退出登录</span>
                        </a>
                    </div>
                </div>
                <a
                    href="https://github.com/aaronzjc"
                    title="Github"
                    class="navbar-item has-divider is-desktop-icon-only"
                >
                    <BasicIcon :name="mdiGithub"></BasicIcon>
                    <span>Github</span>
                </a>
                <a title="退出登录" class="navbar-item is-desktop-icon-only">
                    <BasicIcon :name="mdiLogout"></BasicIcon>
                    <span>退出登录</span>
                </a>
            </div>
        </div>
    </nav>

    <aside class="aside is-placed-left is-expanded">
        <div class="aside-tools">
            <div class="aside-tools-label">
                <span>后台管理</span>
            </div>
        </div>
        <div class="menu is-menu-main">
            <p class="menu-label">全部</p>
            <ul class="menu-list">
                <MenuItem :menu="menu" v-for="menu in menus"></MenuItem>
            </ul>
        </div>
    </aside>
</template>

<script setup>
import { useRouter } from 'vue-router'

import {
    mdiForwardburger,
    mdiBackburger,
    mdiHelpCircleOutline,
    mdiLogout,
    mdiDotsVertical,
    mdiChevronDown,
    mdiGithub
} from '@mdi/js'
import { menus } from '@/config.js'
import { useMainStore } from '@/stores/main'
import { useStyleStore } from '@/stores/style'
import BasicIcon from '@/components/BasicIcon.vue'
import MenuItem from '@/components/MenuItem.vue'

const router = useRouter()
router.beforeEach(() => {
    styleStore.isAsideMobileOpen = false
    styleStore.isNavMobileOpen = false
})

const styleStore = useStyleStore()
const mainStore = useMainStore()
mainStore.setUser({
    avatar: 'https://avatars.githubusercontent.com/u/2597771?v=4',
    username: 'aaronzjc'
})
</script>
